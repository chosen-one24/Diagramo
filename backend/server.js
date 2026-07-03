import "dotenv/config";

import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

import { createServer } from "http";
import { Server } from "socket.io";


connectToDB();

const server = createServer(app);

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean);

const io = new Server(server,{
    cors:{
        origin: allowedOrigins,
        credentials: true
    }
});

io.on("connection",(socket)=>{
    console.log("User Connected:",socket.id);
    
    socket.on("join-room",(roomId)=>{
        socket.join(roomId);
        console.log(`${socket.id} joined room ${roomId}`)
    })

    socket.on("draw-element",(data)=>{
        // console.log("DATA ELEMENT IN SERVER.JS CAME IS :");
        // console.log(data.element);
        socket.to(data.roomId).emit("receive-element",data.element)
    });


    socket.on("send-message", (data) => {
        console.log("NEW CHAT MESSAGE");
        console.log(data);

        socket.to(data.roomId).emit("receive-message", data.chat);
    });
    
});

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log(
        `Server running on port ${PORT} ✅`
    );
});