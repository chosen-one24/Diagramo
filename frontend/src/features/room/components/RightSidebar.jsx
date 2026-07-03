// import React, { useState } from "react";

// import UserList from "./UserList.jsx";
// import ChatPanel from "../../chat/components/ChatPanel.jsx";
// import AIContainer from "../../ai/components/AIContainer.jsx";

// const RightSidebar = () => {

//     const [activeTab, setActiveTab] = useState("users");

//     return (
//         <aside className="w-80 bg-white border-l border-gray-200 flex flex-col h-full shrink-0 shadow-sm z-10">

//             {/* Header */}

//             <div className="flex border-b border-gray-200 bg-gray-50 text-sm font-medium">

//                 <button
//                     onClick={() => setActiveTab("users")}
//                     className={`flex-1 py-3 transition-colors cursor-pointer ${
//                         activeTab === "users"
//                             ? "bg-white border-b-2 border-indigo-600 text-indigo-600 font-semibold"
//                             : "text-gray-500 hover:text-gray-700"
//                     }`}
//                 >
//                     👥 Users
//                 </button>

//                 <button
//                     onClick={() => setActiveTab("chat")}
//                     className={`flex-1 py-3 transition-colors cursor-pointer ${
//                         activeTab === "chat"
//                             ? "bg-white border-b-2 border-indigo-600 text-indigo-600 font-semibold"
//                             : "text-gray-500 hover:text-gray-700"
//                     }`}
//                 >
//                     💬 Chat
//                 </button>

//                 <button
//                     onClick={() => setActiveTab("ai")}
//                     className={`flex-1 py-3 transition-colors cursor-pointer ${
//                         activeTab === "ai"
//                             ? "bg-white border-b-2 border-indigo-600 text-indigo-600 font-semibold"
//                             : "text-gray-500 hover:text-gray-700"
//                     }`}
//                 >
//                     ✨ AI
//                 </button>

//             </div>

//             {/* Body */}

//             <div className="flex-1 overflow-hidden">

//                 {activeTab === "users" && (
//                     <UserList />
//                 )}

//                 {activeTab === "chat" && (
//                     <ChatPanel />
//                 )}

//                 {activeTab === "ai" && (
//                     <AIContainer />
//                 )}

//             </div>

//         </aside>
//     );
// };

// export default RightSidebar;



import React, { useState } from "react";

import UserList from "./UserList.jsx";
import ChatPanel from "../../chat/components/ChatPanel.jsx";
import AIContainer from "../../ai/components/AIContainer.jsx";

const RightSidebar = () => {

    const [activeTab, setActiveTab] = useState("users");

    return (
        <aside className="w-80 bg-white dark:bg-ink-900 border-l border-ink-200 dark:border-ink-800 flex flex-col h-full shrink-0 z-10">

            {/* Header */}

            <div className="flex border-b border-ink-100 dark:border-ink-800 text-sm font-medium">

                <button
                    onClick={() => setActiveTab("users")}
                    className={`flex-1 py-3 transition-colors cursor-pointer ${
                        activeTab === "users"
                            ? "bg-white dark:bg-ink-900 border-b-2 border-accent-600 text-accent-600 dark:text-accent-400 font-semibold"
                            : "text-ink-400 dark:text-ink-500 hover:text-ink-700 dark:hover:text-ink-300"
                    }`}
                >
                    Users
                </button>

                <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-1 py-3 transition-colors cursor-pointer ${
                        activeTab === "chat"
                            ? "bg-white dark:bg-ink-900 border-b-2 border-accent-600 text-accent-600 dark:text-accent-400 font-semibold"
                            : "text-ink-400 dark:text-ink-500 hover:text-ink-700 dark:hover:text-ink-300"
                    }`}
                >
                    Chat
                </button>

                <button
                    onClick={() => setActiveTab("ai")}
                    className={`flex-1 py-3 transition-colors cursor-pointer ${
                        activeTab === "ai"
                            ? "bg-white dark:bg-ink-900 border-b-2 border-accent-600 text-accent-600 dark:text-accent-400 font-semibold"
                            : "text-ink-400 dark:text-ink-500 hover:text-ink-700 dark:hover:text-ink-300"
                    }`}
                >
                    AI
                </button>

            </div>

            {/* Body */}

            <div className="flex-1 overflow-hidden">

                {activeTab === "users" && (
                    <UserList />
                )}

                {activeTab === "chat" && (
                    <ChatPanel />
                )}

                {activeTab === "ai" && (
                    <AIContainer />
                )}

            </div>

        </aside>
    );
};

export default RightSidebar;