import "dotenv/config";

import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

import { createServer } from "http";
import { Server } from "socket.io";


connectToDB();

const server = createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        credentials:true
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

server.listen(3000,()=>{
    console.log(
        "Server running on port 3000 ✅"
    );
});