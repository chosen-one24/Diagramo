// import React, { useState } from "react";
// import useAi from "../hooks/useAI.js";

// const AIPromptModal = () => {
//     const {
//         isPromptOpen,
//         setIsPromptOpen,
//         generating,
//         handleGenerateDiagram,
//     } = useAi();

//     const [prompt, setPrompt] = useState("");

//     if (!isPromptOpen) return null;

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!prompt.trim() || generating) return;

//         const success = await handleGenerateDiagram(prompt);
//         if (success) {
//             setPrompt("");
//             setIsPromptOpen(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end justify-center pb-12 transition-all duration-300">
//             <div className="bg-white/90 border border-gray-200/80 shadow-2xl rounded-2xl w-full max-w-2xl p-6 mx-4 animate-in slide-in-from-bottom-5 duration-200 backdrop-blur-md">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
//                         ✨ AI Diagram Generator
//                     </h3>
//                     <button
//                         onClick={() => setIsPromptOpen(false)}
//                         disabled={generating}
//                         className="text-gray-400 hover:text-gray-600 disabled:opacity-50 text-xl font-bold p-1 cursor-pointer"
//                     >
//                         &times;
//                     </button>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="relative">
//                         <textarea
//                             value={prompt}
//                             onChange={(e) => setPrompt(e.target.value)}
//                             disabled={generating}
//                             placeholder="Example: Draw AWS 3-tier architecture with VPC, Public Subnet, Private Subnet, EC2, Load Balancer and RDS."
//                             className="w-full h-32 rounded-xl border border-gray-200 p-4 resize-none outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 text-sm leading-relaxed"
//                             maxLength={500}
//                         />
//                         <div className="absolute bottom-3 right-3 text-xs text-gray-400">
//                             {prompt.length}/500
//                         </div>
//                     </div>

//                     <div className="flex justify-end gap-3 items-center">
//                         <button
//                             type="button"
//                             onClick={() => setIsPromptOpen(false)}
//                             disabled={generating}
//                             className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition disabled:opacity-50 cursor-pointer"
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type="submit"
//                             disabled={generating || !prompt.trim()}
//                             className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-5 py-2 rounded-lg text-sm font-semibold transition cursor-pointer"
//                         >
//                             {generating ? (
//                                 <>
//                                     <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     <span>Generating...</span>
//                                 </>
//                             ) : (
//                                 "Generate"
//                             )}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AIPromptModal;



import React, { useState } from "react";
import useAi from "../hooks/useAI.js";
import Loader from "../../../components/layout/Loader.jsx";

const AIPromptModal = () => {
    const {
        isPromptOpen,
        setIsPromptOpen,
        generating,
        handleGenerateDiagram,
    } = useAi();

    const [prompt, setPrompt] = useState("");

    if (!isPromptOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim() || generating) return;

        const success = await handleGenerateDiagram(prompt);
        if (success) {
            setPrompt("");
            setIsPromptOpen(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end justify-center pb-12 transition-all duration-300">
            <div className="bg-white/90 dark:bg-ink-900/95 border border-ink-200/80 dark:border-ink-700 shadow-2xl rounded-2xl w-full max-w-2xl p-6 mx-4 animate-in slide-in-from-bottom-5 duration-200 backdrop-blur-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-ink-800 dark:text-white flex items-center gap-2">
                        ✨ AI Diagram Generator
                    </h3>
                    <button
                        onClick={() => setIsPromptOpen(false)}
                        disabled={generating}
                        className="text-ink-400 dark:text-ink-500 hover:text-ink-600 dark:hover:text-ink-300 disabled:opacity-50 text-xl font-bold p-1 cursor-pointer"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={generating}
                            placeholder="Example: Draw AWS 3-tier architecture with VPC, Public Subnet, Private Subnet, EC2, Load Balancer and RDS."
                            className="w-full h-32 rounded-xl border border-ink-200 dark:border-ink-700 p-4 resize-none outline-none focus:ring-2 focus:ring-accent-500 bg-white/50 dark:bg-ink-800/60 text-ink-900 dark:text-white text-sm leading-relaxed placeholder:text-ink-400 dark:placeholder:text-ink-500"
                            maxLength={500}
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-ink-400 dark:text-ink-500">
                            {prompt.length}/500
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 items-center">
                        <button
                            type="button"
                            onClick={() => setIsPromptOpen(false)}
                            disabled={generating}
                            className="px-4 py-2 text-sm font-semibold text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 rounded-lg transition disabled:opacity-50 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={generating || !prompt.trim()}
                            className="flex items-center gap-2 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-300 dark:disabled:bg-accent-900 text-white px-5 py-2 rounded-lg text-sm font-semibold transition cursor-pointer"
                        >
                            {generating ? (
                                <>
                                    <Loader size={16} color="white" />
                                    <span>Generating...</span>
                                </>
                            ) : (
                                "Generate"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AIPromptModal;


