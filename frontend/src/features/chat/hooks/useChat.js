import { useContext } from "react";
import chatContext from "../chatContext.jsx";
import { sendMessage, getMessages } from "../services/chat.api.js";

export const useChat = () => {
    const context = useContext(chatContext);

    if (!context) {
        throw new Error(
            "useChat must be used within ChatProvider"
        );
    }

    const { messages, setMessages } = context;

    const handleSendMessage = async (roomId, message) => {
        try {
            const data = await sendMessage(roomId, message);

            setMessages((prev) => [
                ...(prev || []),
                data.chat,
            ]);

            return data.chat;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const handleGetMessages = async (roomId) => {
        try {
            const data = await getMessages(roomId);

            setMessages(data.chats);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    return {
        messages,
        setMessages,
        handleSendMessage,
        handleGetMessages,
    };
};

export default useChat;