import mongoose from "mongoose";

const aiGenerationSchema = new mongoose.Schema(
    {
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            required: true,
        },

        prompt: {
            type: String,
            required: true,
        },

        imageUrl: {
            type: String,
            required: true,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const AIGeneration = mongoose.model(
    "AIGeneration",
    aiGenerationSchema
);

export default AIGeneration;
