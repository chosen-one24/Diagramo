
import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { sendMessage, getMessages } from "../controllers/chat.controller.js";

const chatRouter = Router();

/**
 * POST /api/chat/send
 * Send a new message
 */
chatRouter.post("/send", authMiddleware.authUser, sendMessage);

/**
 * GET /api/chat/:roomId
 * Get all messages of a room
 */
chatRouter.get("/:roomId", authMiddleware.authUser, getMessages);

export default chatRouter;