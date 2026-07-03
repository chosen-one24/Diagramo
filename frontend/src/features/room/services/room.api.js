import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

export async function createRoom() {
    try {
        const response = await api.post("/api/rooms/create");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function joinRoom(roomCode) {
    try {
        const response = await api.post("/api/rooms/join", { roomCode });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRoomById(roomId) {
    try {
        const response = await api.get(`/api/rooms/${roomId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getRoomMembers(roomId) {
    try {
        const response = await api.get(`/api/rooms/${roomId}/users`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }   
}

export async function getUserRooms() {
    try {
        const response = await api.get("/api/rooms");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
