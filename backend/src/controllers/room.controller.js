import mongoose from "mongoose";
import { Room } from "../models/room.model.js";


export function generateRoomCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = "";

    for (let i = 0; i < length; i++) {
        code += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    return code;
}



export async function createRoom(req, res) {
    const user = req.user;
    console.log(user);

    if (!user) {
        return res.status(401).json({
            message: "user not found"
        })
    }

    //now gave them createRoom 

    const roomCode = generateRoomCode();
    const room = await Room(
        {
            roomCode,
            createdBy: user.id,
            members: [user.id]
        }
    ).save();
    return res.status(201).json({
        message: "room created successfully",
        roomId: room._id,
        roomCode: room.roomCode,
    })

}


export async function joinRoom(req, res) {
    const user = req.user;
    const { roomCode } = req.body;

    if (!user || !roomCode) {
        return res.status(401).json({
            message: "user not found or roomCode not found"
        })
    }


    const room = await Room.findOne({ roomCode: roomCode });
    if (!room) {
        return res.status(404).json({
            message: "Room Not Found !",
        })
    }

    ///push if he is not created that same room only 

    if (room.createdBy.toString() === user.id.toString()) {
        return res.status(200).json({
            message: "Room Joined Successfully",
            roomId: room._id,
            roomCode: room.roomCode,
        })
    }

    await Room.updateOne(
        { _id: room._id },
        { $addToSet: { members: user.id } }
    );

    return res.status(200).json({
        message: "Room Joined Successfully",
        roomId: room._id,
        roomCode: room.roomCode,
    })
}

export async function getRoomById(req, res) {
    const { roomId } = req.params;

    // Check if the provided roomId is a valid ObjectId, otherwise treat it as roomCode
    const isObjectId = mongoose.Types.ObjectId.isValid(roomId);
    const query = isObjectId ? { _id: roomId } : { roomCode: roomId };

    const room = await Room.findOne(query)
        .populate("createdBy", "_id email username")
        .populate("members", "_id email username");

    if (!room) {
        return res.status(404).json({
            message: "Room Not Found",
        })
    }

    return res.status(200).json({
        message: "Room Found",
        room,
    })
}

export async function getRoomMembers(req, res) {
    const { roomId } = req.params;

    // Check if the provided roomId is a valid ObjectId, otherwise treat it as roomCode
    const isObjectId = mongoose.Types.ObjectId.isValid(roomId);
    const query = isObjectId ? { _id: roomId } : { roomCode: roomId };

    const room = await Room.findOne(query).populate("members", "_id email username");

    if (!room) {
        return res.status(404).json({
            message: "Room Not Found",
        })
    }

    return res.status(200).json({
        message: "Room Members Found",
        members: room.members,
    })
}

export async function getUserRooms(req, res) {
    const user = req.user;

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    try {
        const rooms = await Room.find({
            $or: [
                { createdBy: user.id || user._id },
                { members: user.id || user._id }
            ]
        })
        .populate("createdBy", "username email")
        .sort({ updatedAt: -1 });

        return res.status(200).json({
            success: true,
            rooms,
        });
    } catch (error) {
        console.error("Get User Rooms Error:", error);
        return res.status(500).json({
            message: "Failed to fetch user rooms",
            error: error.message
        });
    }
}