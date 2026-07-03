
import { useState } from "react";
import { RoomContext } from "./room.context.js";

export const RoomProvider = ({ children }) => {

    const [room, setRoom] = useState(null);
    const [roomUsers, setRoomUsers] = useState([]);
    const [userRooms, setUserRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <RoomContext.Provider
            value={{
                room,
                setRoom,

                roomUsers,
                setRoomUsers,

                userRooms,
                setUserRooms,

                loading,
                setLoading,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export default RoomProvider;
