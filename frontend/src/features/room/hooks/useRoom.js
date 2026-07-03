import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RoomContext } from "../room.context";
import { createRoom, joinRoom, getRoomById, getRoomMembers, getUserRooms } from "../services/room.api.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useRoom = () => {
    const context = useContext(RoomContext);
    const navigate = useNavigate();

    if (!context) {
        throw new Error("useRoom must be used within a RoomProvider");
    }

    const { room, setRoom, roomUsers, setRoomUsers, userRooms, setUserRooms, loading, setLoading } = context;

    const handleCreateRoom = async () => {
        try {
            setLoading(true);
            const response = await createRoom();
            const { roomId, roomCode } = response;
            await delay(1500); // 1.5s delay to show loader animation beautifully
            setRoom({ roomId, roomCode });
            navigate(`/room/${roomId}`);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };  

    const handleJoinRoom = async (roomCode) => {
        try {
            setLoading(true);
            const response = await joinRoom(roomCode);
            const { roomId, roomCode: joinedRoomCode } = response;
            await delay(1500); // 1.5s delay to show loader animation beautifully
            setRoom({ roomId, roomCode: joinedRoomCode });
            navigate(`/room/${roomId}`);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };  

    const handleGetRoomById = async (roomId) => {
        try {
            setLoading(true);
            const response = await getRoomById(roomId);
            setRoom(response.room);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };  

    const handleGetRoomMembers = async (roomId) => {
        try {
            setLoading(true);
            const response = await getRoomMembers(roomId);
            setRoomUsers(response.members || response.roomUsers || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };  

    const handleGetUserRooms = async () => {
        try {
            setLoading(true);
            const response = await getUserRooms();
            setUserRooms(response.rooms || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };  

    return {
        room,
        setRoom,
        roomUsers,
        setRoomUsers,
        userRooms,
        setUserRooms,
        loading,
        setLoading,
        handleCreateRoom,
        handleJoinRoom,
        handleGetRoomById,
        handleGetRoomMembers,
        handleGetUserRooms,
    };
};

export default useRoom;
