// import React from "react";
// import useAi from "../hooks/useAI.js";

// const GenerationHistory = () => {
//     const {
//         generationHistory,
//         setSelectedGeneration,
//         setIsGenerationOpen,
//     } = useAi();

//     if (generationHistory.length === 0) {
//         return (
//             <div className="flex items-center justify-center h-full text-gray-400 text-sm">
//                 No diagrams generated yet.
//             </div>
//         );
//     }

//     const handleOpenGeneration = (generation) => {
//         setSelectedGeneration(generation);
//         setIsGenerationOpen(true);
//     };

//     return (
//         <div className="h-full flex flex-col bg-slate-50/50">
//             {/* Header */}
//             <div className="px-4 py-3.5 border-b border-gray-100 bg-white">
//                 <h2 className="font-bold text-sm text-gray-900 flex items-center gap-2">
//                     ✨ Generation History
//                 </h2>
//                 <p className="text-[10px] text-gray-400 mt-0.5">
//                     Click any diagram to inspect the canvas architecture elements.
//                 </p>
//             </div>

//             {/* List */}
//             <div className="flex-grow overflow-y-auto p-4 space-y-3.5">
//                 {generationHistory.map((item, index) => (
//                     <div
//                         key={item._id}
//                         onClick={() => handleOpenGeneration(item)}
//                         className="cursor-pointer rounded-xl border border-gray-200/80 bg-white hover:border-indigo-500 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition duration-200 p-3.5 relative overflow-hidden group shadow-sm flex flex-col gap-2"
//                     >
//                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
//                         <div className="flex justify-between items-start gap-3">
//                             <div className="flex-1 min-w-0">
//                                 <h3 className="font-bold text-xs text-gray-800">
//                                     Generation #{generationHistory.length - index}
//                                 </h3>
//                                 <p className="text-[10px] text-indigo-600 font-semibold mt-1 line-clamp-2 leading-relaxed bg-indigo-50/30 border border-indigo-100/30 p-2 rounded-lg italic">
//                                     "{item.prompt}"
//                                 </p>
//                                 <p className="text-[10px] text-gray-400 mt-2">
//                                     By <span className="text-gray-600 font-semibold">{item.createdBy?.fullname || item.createdBy?.username || "Collaborator"}</span>
//                                 </p>
//                             </div>

//                             <div className="flex flex-col items-end gap-2 shrink-0">
//                                 <span className="text-[9px] font-mono text-gray-400 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded">
//                                     {new Date(item.createdAt).toLocaleDateString()}
//                                 </span>
//                                 {item.imageUrl && (
//                                     <img
//                                         src={item.imageUrl}
//                                         alt="Thumbnail"
//                                         className="w-12 h-12 rounded-lg object-cover border border-gray-200 bg-white shadow-sm group-hover:border-indigo-400 transition"
//                                     />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default GenerationHistory;


import React from "react";
import useAi from "../hooks/useAI.js";

const GenerationHistory = () => {
    const {
        generationHistory,
        setSelectedGeneration,
        setIsGenerationOpen,
    } = useAi();

    if (generationHistory.length === 0) {
        return (
            <div className="flex items-center justify-center h-full text-ink-400 dark:text-ink-500 text-sm">
                No diagrams generated yet.
            </div>
        );
    }

    const handleOpenGeneration = (generation) => {
        setSelectedGeneration(generation);
        setIsGenerationOpen(true);
    };

    return (
        <div className="h-full flex flex-col bg-ink-50/50 dark:bg-ink-900">
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900">
                <h2 className="font-bold text-sm text-ink-900 dark:text-white flex items-center gap-2">
                    ✨ Generation History
                </h2>
                <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-0.5">
                    Click any diagram to inspect the canvas architecture elements.
                </p>
            </div>

            {/* List */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3.5">
                {generationHistory.map((item, index) => (
                    <div
                        key={item._id}
                        onClick={() => handleOpenGeneration(item)}
                        className="cursor-pointer rounded-xl border border-ink-200/80 dark:border-ink-700 bg-white dark:bg-ink-800 hover:border-accent-500 dark:hover:border-accent-500 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition duration-200 p-3.5 relative overflow-hidden group shadow-sm flex flex-col gap-2"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex justify-between items-start gap-3">
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-xs text-ink-800 dark:text-ink-100">
                                    Generation #{generationHistory.length - index}
                                </h3>
                                <p className="text-[10px] text-accent-600 dark:text-accent-400 font-semibold mt-1 line-clamp-2 leading-relaxed bg-accent-50/30 dark:bg-accent-950/20 border border-accent-100/30 dark:border-accent-900/30 p-2 rounded-lg italic">
                                    "{item.prompt}"
                                </p>
                                <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-2">
                                    By <span className="text-ink-600 dark:text-ink-300 font-semibold">{item.createdBy?.fullname || item.createdBy?.username || "Collaborator"}</span>
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0">
                                <span className="text-[9px] font-mono text-ink-400 dark:text-ink-500 bg-ink-50 dark:bg-ink-900 border border-ink-100 dark:border-ink-700 px-1.5 py-0.5 rounded">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </span>
                                {item.imageUrl && (
                                    <img
                                        src={item.imageUrl}
                                        alt="Thumbnail"
                                        className="w-12 h-12 rounded-lg object-cover border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 shadow-sm group-hover:border-accent-400 transition"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenerationHistory;