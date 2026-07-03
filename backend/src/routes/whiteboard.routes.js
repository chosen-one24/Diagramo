import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { saveWhiteboard,getWhiteboard } from "../controllers/whiteboard.controller.js";

const whiteboardRouter=Router();


/***
 * POST /api/whiteboard/save
 * save/update enitre whiteboard
 */

whiteboardRouter.post("/save",authMiddleware.authUser,saveWhiteboard);

/***
 * GET /api/whiteboard/:roomId
 * get enitre whiteboard
 */

whiteboardRouter.get("/:roomId",authMiddleware.authUser,getWhiteboard);


export default whiteboardRouter;