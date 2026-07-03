import Chat from "../models/chat.model.js";


export const sendMessage = async (req, res) => {
    try {
        const { roomId, message } = req.body;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        if (!roomId || !message) {
            return res.status(400).json({
                success: false,
                message: "RoomId and message are required",
            });
        }

        const chat = await Chat.create({
            roomId,
            sender: user.id || user._id,
            message,
        });

        const populatedChat = await Chat.findById(chat._id)
            .populate("sender", "fullname username");

        return res.status(201).json({
            success: true,
            message: "Message sent successfully",
            chat: populatedChat,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { roomId } = req.params;
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        if (!roomId) {
            return res.status(400).json({
                success: false,
                message: "RoomId is required",
            });
        }

        const chats = await Chat.find({ roomId })
            .populate("sender", "fullname username")
            .sort({ createdAt: 1 });

        return res.status(200).json({
            success: true,
            message: "Messages fetched successfully",
            chats,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

