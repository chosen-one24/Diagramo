// import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { useChat } from "../hooks/useChat.js";
// import { useAuth } from "../../auth/hooks/useAuth.js";
// import { socket } from "../../../socket.js";

// const ChatPanel = () => {
//     const { roomId } = useParams();
//     const { messages, setMessages, handleSendMessage, handleGetMessages } = useChat();
//     const { user: currentUser } = useAuth();
//     const [message, setMessage] = useState("");
//     const chatContainerRef = useRef(null);

//     const scrollToBottom = () => {
//         if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTo({
//                 top: chatContainerRef.current.scrollHeight,
//                 behavior: "smooth",
//             });
//         }
//     };

//     useEffect(() => {
//         if (roomId) {
//             handleGetMessages(roomId);
//         }
//     }, [roomId]);

//     useEffect(() => {
//         socket.on("receive-message", (chat) => {
//             setMessages((prev) => [...prev, chat]);
//         });

//         return () => {
//             socket.off("receive-message");
//         };
//     }, []);

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!message.trim()) return;

//         const chat = await handleSendMessage(roomId, message);

//         if (chat) {
//             socket.emit("send-message", {
//                 roomId,
//                 chat,
//             });
//         }

//         setMessage("");
//     };

//     return (
//         <div className="flex-1 flex flex-col h-full bg-slate-50/50 overflow-hidden">
//             {/* Scrollable Messages Area */}
//             <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 space-y-4">
//                 {messages && messages.length > 0 ? (
//                     messages.map((msg, index) => {
//                         const isMe = 
//                             msg.sender?._id === currentUser?._id || 
//                             msg.sender === currentUser?._id || 
//                             msg.sender?.id === currentUser?.id;
                        
//                         const senderName = msg.sender?.fullname || msg.sender?.username || "Collaborator";
//                         const initial = senderName.charAt(0).toUpperCase();

//                         return (
//                             <div 
//                                 key={msg._id || index} 
//                                 className={`flex items-end gap-2 max-w-[85%] ${
//                                     isMe ? "ml-auto flex-row-reverse" : "mr-auto"
//                                 }`}
//                             >
//                                 {/* User Initial Avatar */}
//                                 {!isMe && (
//                                     <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold shrink-0 shadow-sm">
//                                         {initial}
//                                     </div>
//                                 )}

//                                 <div>
//                                     {/* Sender name for others */}
//                                     {!isMe && (
//                                         <span className="text-[10px] text-gray-400 font-bold block ml-1 mb-0.5">
//                                             {senderName}
//                                         </span>
//                                     )}

//                                     {/* Message Bubble */}
//                                     <div 
//                                         className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm break-words ${
//                                             isMe 
//                                                 ? "bg-indigo-600 text-white rounded-br-none" 
//                                                 : "bg-white text-gray-800 border border-gray-150 rounded-bl-none"
//                                         }`}
//                                     >
//                                         {msg.message}
//                                     </div>

//                                     {/* Timestamp */}
//                                     <span className={`text-[8px] font-mono text-gray-400 mt-1 block ${isMe ? "text-right mr-1" : "text-left ml-1"}`}>
//                                         {msg.createdAt 
//                                             ? new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
//                                             : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                                         }
//                                     </span>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-400">
//                         <span className="text-3xl mb-2">💬</span>
//                         <p className="text-xs font-semibold text-gray-500">No messages yet</p>
//                         <p className="text-[10px] text-gray-400 mt-1">Start the conversation by sending a message below!</p>
//                     </div>
//                 )}
//             </div>

//             {/* Fixed Input Area at Bottom */}
//             <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 bg-white">
//                 <div className="relative flex items-center">
//                     <input
//                         type="text"
//                         placeholder="Message room..."
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs outline-none transition shadow-inner pr-12"
//                     />
//                     <button
//                         type="submit"
//                         disabled={!message.trim()}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-800 disabled:opacity-30 disabled:hover:text-indigo-600 transition p-2 cursor-pointer"
//                     >
//                         {/* Styled Send Arrow */}
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
//                         </svg>
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ChatPanel;


import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../hooks/useChat.js";
import { useAuth } from "../../auth/hooks/useAuth.js";
import { socket } from "../../../socket.js";

const ChatPanel = () => {
    const { roomId } = useParams();
    const { messages, setMessages, handleSendMessage, handleGetMessages } = useChat();
    const { user: currentUser } = useAuth();
    const [message, setMessage] = useState("");
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        if (roomId) {
            handleGetMessages(roomId);
        }
    }, [roomId]);

    useEffect(() => {
        socket.on("receive-message", (chat) => {
            setMessages((prev) => [...prev, chat]);
        });

        return () => {
            socket.off("receive-message");
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const chat = await handleSendMessage(roomId, message);

        if (chat) {
            socket.emit("send-message", {
                roomId,
                chat,
            });
        }

        setMessage("");
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-ink-50/50 dark:bg-ink-900 overflow-hidden">
            {/* Scrollable Messages Area */}
            <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages && messages.length > 0 ? (
                    messages.map((msg, index) => {
                        const isMe = 
                            msg.sender?._id === currentUser?._id || 
                            msg.sender === currentUser?._id || 
                            msg.sender?.id === currentUser?.id;
                        
                        const senderName = msg.sender?.fullname || msg.sender?.username || "Collaborator";
                        const initial = senderName.charAt(0).toUpperCase();

                        return (
                            <div 
                                key={msg._id || index} 
                                className={`flex items-end gap-2 max-w-[85%] ${
                                    isMe ? "ml-auto flex-row-reverse" : "mr-auto"
                                }`}
                            >
                                {/* User Initial Avatar */}
                                {!isMe && (
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-accent-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold shrink-0 shadow-sm">
                                        {initial}
                                    </div>
                                )}

                                <div>
                                    {/* Sender name for others */}
                                    {!isMe && (
                                        <span className="text-[10px] text-ink-400 dark:text-ink-500 font-bold block ml-1 mb-0.5">
                                            {senderName}
                                        </span>
                                    )}

                                    {/* Message Bubble */}
                                    <div 
                                        className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm break-words ${
                                            isMe 
                                                ? "bg-accent-600 text-white rounded-br-none" 
                                                : "bg-white dark:bg-ink-800 text-ink-800 dark:text-ink-100 border border-ink-150 dark:border-ink-700 rounded-bl-none"
                                        }`}
                                    >
                                        {msg.message}
                                    </div>

                                    {/* Timestamp */}
                                    <span className={`text-[8px] font-mono text-ink-400 dark:text-ink-500 mt-1 block ${isMe ? "text-right mr-1" : "text-left ml-1"}`}>
                                        {msg.createdAt 
                                            ? new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                                            : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                        }
                                    </span>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6 text-ink-400 dark:text-ink-500">
                        <span className="text-3xl mb-2">💬</span>
                        <p className="text-xs font-semibold text-ink-500 dark:text-ink-400">No messages yet</p>
                        <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-1">Start the conversation by sending a message below!</p>
                    </div>
                )}
            </div>

            {/* Fixed Input Area at Bottom */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Message room..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-accent-500 rounded-xl px-4 py-3 text-xs text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 outline-none transition shadow-inner pr-12"
                    />
                    <button
                        type="submit"
                        disabled={!message.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-accent-600 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 disabled:opacity-30 disabled:hover:text-accent-600 transition p-2 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatPanel;

