import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "forest"
  );

  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  return (

    <div className="relative min-h-screen">

      <div
        className={`
          absolute inset-0 -z-10
          ${
            theme === "forest"
              ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"
              : "[background:radial-gradient(125%_125%_at_50%_10%,#F8FFF9_60%,#00C46A12_100%)]"
          }
        `}
      />

      <Routes>

        <Route
          path="/"
          element={
            <HomePage
              theme={theme}
              setTheme={setTheme}
            />
          }
        />

        <Route
          path="/create"
          element={
            <CreatePage
              theme={theme}
              setTheme={setTheme}
            />
          }
        />

        <Route
          path="/note/:id"
          element={
            <NoteDetailPage
              theme={theme}
              setTheme={setTheme}
            />
          }
        />

      </Routes>

    </div>

  );
};

export default App;