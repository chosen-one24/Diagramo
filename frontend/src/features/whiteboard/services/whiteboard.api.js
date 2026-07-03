import axios from "axios";


const api=axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
})


export const saveWhiteboard=async(roomId,elements)=>{
    try {
        const {data}=await api.post('/api/whiteboard/save',{roomId,elements})

        if(!data.success) throw new Error(data.message);

        return data;
        
    } catch (error) {
        console.error("Error saving whiteboard:",error);
        throw error;
    }
}


export const getWhiteboard=async(roomId)=>{
    try {
        const {data}=await api.get(`/api/whiteboard/${roomId}`)

        if(!data.success) throw new Error(data.message);

        return data;
        
    } catch (error) {
        console.error("Error getting whiteboard:",error);
        throw error;
    }
}