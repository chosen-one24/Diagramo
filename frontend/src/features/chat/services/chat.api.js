import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

export const sendMessage = async (roomId, message) => {
    try {
        const { data } = await api.post("/api/chat/send", {
            roomId,
            message,
        });

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
};

export const getMessages = async (roomId) => {
    try {
        const { data } = await api.get(`/api/chat/${roomId}`);

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
};