import { Link } from "react-router";
import { PlusIcon, Moon, Sun } from "lucide-react";

const Navbar = ({ theme, setTheme }) => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">

        <div className="flex items-center justify-between">

          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            NoteFlow
          </h1>

          <div className="flex items-center gap-3">

            <button
              className="btn btn-circle btn-ghost"
              onClick={() =>
                setTheme(
                  theme === "forest"
                    ? "forestlight"
                    : "forest"
                )
              }
            >
              {
                theme === "forest"
                  ? <Sun className="size-5" />
                  : <Moon className="size-5" />
              }
            </button>

            <Link
              to="/create"
              className="btn btn-primary"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;