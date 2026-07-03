import { createContext, useState } from "react";

const chatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    return (
        <chatContext.Provider
            value={{
                messages,
                setMessages,
            }}
        >
            {children}
        </chatContext.Provider>
    );
};

export default chatContext;