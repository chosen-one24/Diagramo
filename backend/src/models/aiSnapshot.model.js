import mongoose from "mongoose";

const aiSnapshotSchema = new mongoose.Schema(
    {
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            required: true,
        },

        summary: {
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

const AISnapshot = mongoose.model(
    "AISnapshot",
    aiSnapshotSchema
);

export default AISnapshot;