// import { useState } from "react";

// import SummaryHistory from "./SummaryHistory.jsx";
// import GenerationHistory from "./GenerationHistory.jsx";

// const AIContainer = () => {

//     const [activeTab, setActiveTab] = useState("summary");

//     return (
//         <div className="flex flex-col h-full">

//             {/* Toggle */}
//             <div className="p-3 bg-white border-b border-gray-100">
//                 <div className="flex p-1 bg-slate-100 rounded-xl">
//                     <button
//                         onClick={() => setActiveTab("summary")}
//                         className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
//                             activeTab === "summary"
//                                 ? "bg-white text-slate-900 shadow-sm"
//                                 : "text-slate-500 hover:text-slate-800"
//                         }`}
//                     >
//                         📄 Summary
//                     </button>

//                     <button
//                         onClick={() => setActiveTab("generate")}
//                         className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
//                             activeTab === "generate"
//                                 ? "bg-white text-slate-900 shadow-sm"
//                                 : "text-slate-500 hover:text-slate-800"
//                         }`}
//                     >
//                         ✨ Generate
//                     </button>
//                 </div>
//             </div>

//             {/* Body */}

//             <div className="flex-1 overflow-hidden">

//                 {activeTab === "summary" ? (
//                     <SummaryHistory />
//                 ) : (
//                     <GenerationHistory />
//                 )}

//             </div>

//         </div>
//     );
// };

// export default AIContainer;



import { useState } from "react";

import SummaryHistory from "./SummaryHistory.jsx";
import GenerationHistory from "./GenerationHistory.jsx";

const AIContainer = () => {

    const [activeTab, setActiveTab] = useState("summary");

    return (
        <div className="flex flex-col h-full">

            {/* Toggle */}
            <div className="p-3 bg-white dark:bg-ink-900 border-b border-ink-100 dark:border-ink-800">
                <div className="flex p-1 bg-ink-100 dark:bg-ink-800 rounded-xl">
                    <button
                        onClick={() => setActiveTab("summary")}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                            activeTab === "summary"
                                ? "bg-white dark:bg-ink-700 text-ink-900 dark:text-white shadow-sm"
                                : "text-ink-500 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-200"
                        }`}
                    >
                        📄 Summary
                    </button>

                    <button
                        onClick={() => setActiveTab("generate")}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                            activeTab === "generate"
                                ? "bg-white dark:bg-ink-700 text-ink-900 dark:text-white shadow-sm"
                                : "text-ink-500 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-200"
                        }`}
                    >
                        ✨ Generate
                    </button>
                </div>
            </div>

            {/* Body */}

            <div className="flex-1 overflow-hidden">

                {activeTab === "summary" ? (
                    <SummaryHistory />
                ) : (
                    <GenerationHistory />
                )}

            </div>

        </div>
    );
};

export default AIContainer;


