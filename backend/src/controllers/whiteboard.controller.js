import Whiteboard from "../models/whiteboard.model.js";

export const saveWhiteboard = async (req, res) => {
    try {
        const { roomId, elements } = req.body;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        if (!roomId || !Array.isArray(elements)) {
            return res.status(400).json({
                message: "roomId and elements are required",
            });
        }

        const whiteboard = await Whiteboard.findOneAndUpdate(
            { roomId },
            { elements },
            {
                upsert: true,
                returnDocument: "after",
            }
        );

        return res.status(200).json({
            success: true,
            message: "Whiteboard saved successfully",
            whiteboard,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

export const getWhiteboard = async (req, res) => {
    try {
        const { roomId } = req.params;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        if (!roomId) {
            return res.status(400).json({
                message: "roomId is required",
            });
        }

        const whiteboard = await Whiteboard.findOne({ roomId });

        if (!whiteboard) {
            return res.status(200).json({
                success: true,
                message: "Whiteboard fetched successfully",
                whiteboard: {
                    elements: [],
                },
            });
        }

        return res.status(200).json({
            success:true,
            message: "Whiteboard fetched successfully",
            whiteboard,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};