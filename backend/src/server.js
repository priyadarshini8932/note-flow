import express from "express"
import cors from "cors"
import dotenv from "dotenv" 

import notesRoute from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001


//middleware
app.use(cors({
    origin:"http://localhost:5173",
}) 
);
app.use(express.json()) //this middleware will parese JSON bodies: req.body
app.use(rateLimiter)

//our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes",notesRoute);

connectDB().then(()=>{
    app.listen(5001,()=>{
    console.log("Server started on PORT:", PORT);
    });
})



//mongodb+srv://<db_username>:MRS7y1ItmQ2DWpfn@cluster0.nwlccql.mongodb.net/?appName=Cluster0