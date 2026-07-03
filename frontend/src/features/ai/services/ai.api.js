import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

export const cleanupDiagram = async (elements) => {
    try {
        const response = await api.post("/api/ai/cleanup", { elements });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const generateSummary = async (roomId, elements, image) => {
    try {

        const { data } = await api.post("/api/ai/summary", {
            roomId,
            elements,
            image,
        });

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const getSummaryHistory = async (roomId) => {
    try {

        const { data } = await api.get(`/api/ai/summary/history/${roomId}`);

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const generateDiagram = async (roomId, prompt, image = null) => {
    try {
        const payload = { roomId, prompt };
        if (image) {
            payload.image = image;
        }
        const { data } = await api.post("/api/ai/generate", payload);

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getGenerationHistory = async (roomId) => {
    try {
        const { data } = await api.get(`/api/ai/generate/history/${roomId}`);

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
