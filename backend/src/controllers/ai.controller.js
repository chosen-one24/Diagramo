import cloudinary from "../config/cloudinary.js";
import { cleanupDiagram, generateSummary, generateDiagram } from "../services/ai.service.js";
import AISnapshot from "../models/aiSnapshot.model.js";
import AIGeneration from "../models/AIGeneration.model.js";


export const generateSummaryController = async (req, res) => {
    try {
        const { roomId, elements, image } = req.body;

        const user = req.user;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        // console.log("INSIDE GENERATE Summary controller","user",user);

        if (!roomId || !elements || !image) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        // Step 1: Generate AI Summary
        const summary = await generateSummary(elements);

        // Step 2: Upload Image only if summary generation succeeds
        const uploadResult = await cloudinary.uploader.upload(image, {
            folder: "ai-snapshots",
        });

        // Step 3: Save Snapshot
        const snapshot = await AISnapshot.create({
            roomId,
            summary,
            imageUrl: uploadResult.secure_url,
            createdBy: user.id || user._id,
        });

        //impppp 
        // Populate user details before returning
        await snapshot.populate("createdBy", "username");

        return res.status(200).json({
            success: true,
            message: "Summary generated successfully",
            summary,
            snapshot,
        });

    } catch (error) {
        console.error("AI Summary Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message || "Failed to generate summary",
        });
    }
};

export const getSummaryHistory = async (req, res) => {
    try {

        const { roomId } = req.params;

        const snapshots = await AISnapshot.find({ roomId })
            .populate("createdBy", "username")
            .sort({ createdAt: -1 });

            // console.log(snapshots)
        
        const latestSummary = snapshots.length > 0 ? snapshots[0] : null;

        return res.status(200).json({
            success: true,
            latestSummary,
            history: snapshots.slice(1),
        });
    } catch (error) {

        console.error("Get Summary History Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch summary history",
        });

    }
};
export const generateDiagramController = async (req, res) => {
    try {
        const { roomId, prompt, image } = req.body;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        if (!roomId || !prompt) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        // Phase 1: Gemini elements generation (no image sent yet)
        if (!image) {
            const generatedElements = await generateDiagram(prompt);
            return res.status(200).json({
                success: true,
                message: "Elements generated successfully",
                elements: generatedElements,
            });
        }

        // Phase 2: Save metadata and upload image
        const uploadResult = await cloudinary.uploader.upload(image, {
            folder: "ai-generations",
        });

        const generation = await AIGeneration.create({
            roomId,
            prompt,
            imageUrl: uploadResult.secure_url,
            createdBy: user.id || user._id,
        });

        await generation.populate("createdBy", "username");

        return res.status(200).json({
            success: true,
            message: "Diagram saved successfully",
            generation,
        });

    } catch (error) {
        console.error("AI Generation Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message || "Failed to process diagram",
        });
    }
};
export const getGenerationHistory = async (req, res) => {
    try {
        const { roomId } = req.params;

        const generations = await AIGeneration.find({ roomId })
            .populate("createdBy", "username")
            .sort({ createdAt: -1 });

        const latestGeneration = generations.length > 0 ? generations[0] : null;

        return res.status(200).json({
            success: true,
            latestGeneration,
            history: generations.slice(1),
        });
    } catch (error) {
        console.error("Get Generation History Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch generation history",
        });
    }
};

//to be continued


export const handleCleanupDiagram = async (req, res) => {
    try {
        const { elements } = req.body;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        if (!Array.isArray(elements)) {
            return res.status(400).json({
                success: false,
                message: "Elements array is required",
            });
        }

        const cleanedElements = await cleanupDiagram(elements);

        return res.status(200).json({
            success: true,
            message: "Diagram cleaned successfully",
            elements: cleanedElements,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message || "Failed to clean diagram",
        });
    }
};