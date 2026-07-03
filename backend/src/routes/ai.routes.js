import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { 
    handleCleanupDiagram, 
    generateSummaryController, 
    getSummaryHistory,
    generateDiagramController,
    getGenerationHistory
} from "../controllers/ai.controller.js";

const aiRouter = Router();

/*
POST /api/ai/cleanup
*/
aiRouter.post("/cleanup", authMiddleware.authUser, handleCleanupDiagram);

/*
POST /api/ai/summary
*/
aiRouter.post("/summary", authMiddleware.authUser, generateSummaryController);

/**
 * GET /api/ai/summary/history/:roomId
 */
aiRouter.get("/summary/history/:roomId", authMiddleware.authUser, getSummaryHistory);

/*
POST /api/ai/generate
*/
aiRouter.post("/generate", authMiddleware.authUser, generateDiagramController);

/**
 * GET /api/ai/generate/history/:roomId
 */
aiRouter.get("/generate/history/:roomId", authMiddleware.authUser, getGenerationHistory);

export default aiRouter;