import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js"
import { createRoom,joinRoom,getRoomById,getRoomMembers,getUserRooms } from "../controllers/room.controller.js"

const roomRouter=Router();

// Get User's Rooms
// GET /api/rooms
roomRouter.get("/",authMiddleware.authUser,getUserRooms);

// Create Room
// POST /api/rooms/create
roomRouter.post("/create",authMiddleware.authUser,createRoom);


// Join Room
// POST /api/rooms/join
roomRouter.post("/join",authMiddleware.authUser,joinRoom);

// Get Room Details
// GET /api/rooms/:roomId
roomRouter.get("/:roomId",authMiddleware.authUser,getRoomById);

// Get Joined Users
// GET /api/rooms/:roomId/users
roomRouter.get("/:roomId/users",authMiddleware.authUser,getRoomMembers);

export default roomRouter;
