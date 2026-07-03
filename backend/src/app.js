
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";





const app=express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))





// /* Require all routes here  */
import authRouter from "./routes/auth.routes.js"
import roomRouter from "./routes/room.routes.js";
import whiteboardRouter from "./routes/whiteboard.routes.js";
import aiRouter from "./routes/ai.routes.js";
import chatRouter from "./routes/chat.routes.js";

// Using all the routes here
app.use("/api/auth",authRouter);
app.use("/api/rooms",roomRouter);   
app.use("/api/whiteboard", whiteboardRouter);
app.use("/api/ai",aiRouter);
app.use("/api/chat", chatRouter);

export default app;