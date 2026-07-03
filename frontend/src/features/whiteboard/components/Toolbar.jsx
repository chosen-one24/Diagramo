// import React, { useContext, useState } from "react";
// import whiteBoardContext from "../whiteboardContext.jsx";
// import useAi from "../../ai/hooks/useAI.js";
// import AISummary from "../../ai/components/AISummary.jsx";
// import AIPromptModal from "../../ai/components/AIPromptModal.jsx";
// import GenerationModal from "../../ai/components/GenerationModal.jsx";

// const Toolbar = () => {
//   const [showClearConfirm, setShowClearConfirm] = useState(false);
//   const { 
//     handleAiCleanup, 
//     isLoading, 
//     handleGenerateSummary, 
//     latestSummary, 
//     setLatestSummary, 
//     loading, 
//     setIsPromptOpen, 
//     generating 
//   } = useAi();

//   const context = useContext(whiteBoardContext);

//   if (!context) {
//     throw new Error("Toolbar must be used within a WhiteBoardProvider");
//   }

//   const {
//     tool,
//     setTool,
//     elements,
//     setElements,
//     strokeColor,
//     setStrokeColor,
//     strokeWidth,
//     setStrokeWidth,
//     History,
//     setHistory,
//     canvasRef,
//   } = context;

//   const handleClear = () => {
//     setShowClearConfirm(true);
//   };

//   const confirmClear = () => {
//     setElements([]);
//     setShowClearConfirm(false);
//   };

//   const handleUndo = () => {
//     if (elements.length === 0) return;
//     const lastElement = elements[elements.length - 1];

//     setHistory((prev) => [...prev, lastElement]);
//     setElements((prev) => prev.slice(0, -1));
//   };

//   const handleRedo = () => {
//     if (History.length === 0) return;

//     const lastElement = History[History.length - 1];

//     setElements((prev) => [...prev, lastElement]);
//     setHistory((prev) => prev.slice(0, -1));
//   };

//   const handleDownload = () => {
//     const canvas = canvasRef.current;
//     const exportCanvas = document.createElement("canvas");

//     exportCanvas.width = canvas.width;
//     exportCanvas.height = canvas.height;

//     const exportCtx = exportCanvas.getContext("2d");

//     exportCtx.fillStyle = "#ffffff";
//     exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
//     exportCtx.drawImage(canvas, 0, 0);

//     const image = exportCanvas.toDataURL("image/png");
//     const link = document.createElement("a");

//     link.download = "whiteboard.png";
//     link.href = image;
//     link.click();
//   };

//   return (
//     <div className="flex justify-center w-full mb-6">
//       {/* Floating Rounded Toolbar */}
//       <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full px-5 py-2.5 flex items-center gap-4 shadow-lg shadow-gray-200/50 transition duration-300">

//         {/* GROUP 1: DRAWING TOOLS */}
//         <div className="flex items-center gap-1.5">
//           {/* Pen */}
//           <div className="relative group">
//             <input
//               type="radio"
//               name="tool"
//               id="pen"
//               checked={tool === "pen"}
//               onChange={() => setTool("pen")}
//               className="sr-only"
//             />
//             <label
//               htmlFor="pen"
//               className={`h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${
//                 tool === "pen"
//                   ? "bg-indigo-600 text-white shadow-sm"
//                   : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
//             </label>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Pen
//             </span>
//           </div>

//           {/* Line */}
//           <div className="relative group">
//             <input
//               type="radio"
//               name="tool"
//               id="line"
//               checked={tool === "line"}
//               onChange={() => setTool("line")}
//               className="sr-only"
//             />
//             <label
//               htmlFor="line"
//               className={`h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${
//                 tool === "line"
//                   ? "bg-indigo-600 text-white shadow-sm"
//                   : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
//             </label>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Line
//             </span>
//           </div>

//           {/* Rectangle */}
//           <div className="relative group">
//             <input
//               type="radio"
//               name="tool"
//               id="rectangle"
//               checked={tool === "rectangle"}
//               onChange={() => setTool("rectangle")}
//               className="sr-only"
//             />
//             <label
//               htmlFor="rectangle"
//               className={`h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${
//                 tool === "rectangle"
//                   ? "bg-indigo-600 text-white shadow-sm"
//                   : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rectangle-horizontal"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
//             </label>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Rectangle
//             </span>
//           </div>

//           {/* Circle */}
//           <div className="relative group">
//             <input
//               type="radio"
//               name="tool"
//               id="circle"
//               checked={tool === "circle"}
//               onChange={() => setTool("circle")}
//               className="sr-only"
//             />
//             <label
//               htmlFor="circle"
//               className={`h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${
//                 tool === "circle"
//                   ? "bg-indigo-600 text-white shadow-sm"
//                   : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
//             </label>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Circle
//             </span>
//           </div>

//           {/* Arrow */}
//           <div className="relative group">
//             <input
//               type="radio"
//               name="tool"
//               id="arrow"
//               checked={tool === "arrow"}
//               onChange={() => setTool("arrow")}
//               className="sr-only"
//             />
//             <label
//               htmlFor="arrow"
//               className={`h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${
//                 tool === "arrow"
//                   ? "bg-indigo-600 text-white shadow-sm"
//                   : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up"><path d="M8 6L12 2L16 6"/><path d="M12 2V22"/></svg>
//             </label>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Arrow
//             </span>
//           </div>

//           {/* Text */}
//           <div className="relative group">
//             <input
//               type="radio"
//               name="tool"
//               id="text"
//               checked={tool === "text"}
//               onChange={() => setTool("text")}
//               className="sr-only"
//             />
//             <label
//               htmlFor="text"
//               className={`h-9 w-9 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${
//                 tool === "text"
//                   ? "bg-indigo-600 text-white shadow-sm"
//                   : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
//               }`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-case-sensitive"><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M22 9v7"/><path d="M3.304 13h6.392"/><circle cx="18.5" cy="12.5" r="3.5"/></svg>
//             </label>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Text
//             </span>
//           </div>
//         </div>

//         {/* SEPARATOR */}
//         <div className="h-6 w-px bg-gray-200" />

//         {/* GROUP 2: STYLING TOOLS (COLOR & SIZE) */}
//         <div className="flex items-center gap-3">
//           {/* Color Picker */}
//           <div className="relative group flex items-center">
//             <label
//               htmlFor="color"
//               className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer relative transition duration-200"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paintbrush-vertical"><path d="M10 2v2"/><path d="M14 2v4"/><path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"/><path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/></svg>
//               <span
//                 className="absolute bottom-1 right-1 h-3 w-3 rounded-full border border-white shadow-sm"
//                 style={{ backgroundColor: strokeColor }}
//               />
//             </label>
//             <input
//               type="color"
//               id="color"
//               value={strokeColor}
//               onChange={(e) => setStrokeColor(e.target.value)}
//               className="sr-only"
//             />
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Color
//             </span>
//           </div>

//           {/* Size range slider */}
//           <div className="relative group flex items-center gap-2">
//             <span className="text-slate-500 hover:text-slate-900 transition duration-200">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-audio-waveform"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/></svg>
//             </span>
//             <input
//               type="range"
//               min="1"
//               max="50"
//               value={strokeWidth}
//               onChange={(e) => setStrokeWidth(e.target.value)}
//               className="w-16 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none transition duration-150"
//             />
//             <span className="text-[10px] font-mono font-bold text-slate-500 w-5">
//               {strokeWidth}
//             </span>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Size
//             </span>
//           </div>
//         </div>

//         {/* SEPARATOR */}
//         <div className="h-6 w-px bg-gray-200" />

//         {/* GROUP 3: HISTORY & DOCUMENT ACTIONS */}
//         <div className="flex items-center gap-1.5">
//           {/* Undo */}
//           <div className="relative group">
//             <button
//               onClick={handleUndo}
//               disabled={elements.length === 0}
//               type="button"
//               className="h-9 w-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition duration-200 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-500 cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
//             </button>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Undo
//             </span>
//           </div>

//           {/* Redo */}
//           <div className="relative group">
//             <button
//               onClick={handleRedo}
//               disabled={History.length === 0}
//               type="button"
//               className="h-9 w-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition duration-200 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-500 cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
//             </button>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Redo
//             </span>
//           </div>

//           {/* Clear */}
//           <div className="relative group">
//             <button
//               onClick={handleClear}
//               type="button"
//               className="h-9 w-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-red-50 hover:text-red-600 transition duration-200 cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
//             </button>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Clear All
//             </span>
//           </div>

//           {/* Download */}
//           <div className="relative group">
//             <button
//               onClick={handleDownload}
//               type="button"
//               className="h-9 w-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition duration-200 cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-down"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19 3 3v-5.5"/><path d="m17 22 3-3"/><circle cx="9" cy="9" r="2"/></svg>
//             </button>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               Export PNG
//             </span>
//           </div>
//         </div>

//         {/* SEPARATOR */}
//         <div className="h-6 w-px bg-gray-200" />

//         {/* GROUP 4: AI FEATURES */}
//         <div className="flex items-center gap-2">
//           {/* AI Generate */}
//           <div className="relative group">
//             <button
//               onClick={() => setIsPromptOpen(true)}
//               disabled={generating}
//               type="button"
//               className={`h-9 px-3.5 flex items-center gap-1.5 rounded-full font-bold text-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:scale-[1.03] active:scale-[0.97] transition duration-200 disabled:opacity-50 disabled:scale-100 cursor-pointer`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-sparkles"><path d="M10 3H8"/><path d="m15.007 5.008 3.987 3.986"/><path d="M20 15v4"/><path d="M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="M22 17h-4"/><path d="M4 5v4"/><path d="M6 7H2"/><path d="M9 2v2"/></svg>
//               <span>{generating ? "Generating..." : "Generate"}</span>
//             </button>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               AI Shape Generator
//             </span>
//           </div>

//           {/* AI Summary */}
//           <div className="relative group">
//             <button
//               onClick={handleGenerateSummary}
//               disabled={loading}
//               type="button"
//               className={`h-9 px-3.5 flex items-center gap-1.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-slate-800 text-slate-100 shadow-md border border-slate-800 hover:scale-[1.03] active:scale-[0.97] transition duration-200 disabled:opacity-50 disabled:scale-100 cursor-pointer`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-summary"><path d="M15 4H7"/><path d="m18 16 3 3-3 3"/><path d="M3 4v13a2 2 0 0 0 2 2h16"/><path d="M7 14h7"/><path d="M7 9h12"/></svg>
//               <span>{loading ? "Summarizing..." : "Summarize"}</span>
//             </button>
//             <span className="pointer-events-none absolute hidden group-hover:block bg-slate-950 text-slate-100 text-[10px] font-semibold px-2 py-1 rounded-md -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md border border-slate-800 transition duration-150">
//               AI Summary documentation
//             </span>
//           </div>
//         </div>

//       </div>

//       <AISummary />
//       <AIPromptModal />
//       <GenerationModal />

//       {showClearConfirm && (
//         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-100 p-4 animate-in fade-in duration-200">
//           <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm border border-gray-100 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
//             {/* Warning Icon */}
//             <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//             </div>

//             <h3 className="text-lg font-bold text-gray-900 mb-2">Clear Whiteboard?</h3>
//             <p className="text-sm text-gray-500 mb-6 leading-relaxed">
//               This will permanently delete all components, drawings, and text from the canvas. This action cannot be undone.
//             </p>

//             <div className="flex gap-3 w-full justify-center">
//               <button
//                 type="button"
//                 onClick={() => setShowClearConfirm(false)}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition cursor-pointer text-sm"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={confirmClear}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition cursor-pointer text-sm"
//               >
//                 Clear All
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Toolbar;



import React, { useContext, useState, useEffect } from "react";
import whiteBoardContext from "../whiteboardContext.jsx";
import useAi from "../../ai/hooks/useAI.js";
import AISummary from "../../ai/components/AISummary.jsx";
import AIPromptModal from "../../ai/components/AIPromptModal.jsx";
import GenerationModal from "../../ai/components/GenerationModal.jsx";
import { useTheme } from "../../../components/layout/UseTheme.js";
import Loader from "../../../components/layout/Loader.jsx";

const TOOLS = [
  { id: "pen", label: "Pen", path: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" },
];

const Toolbar = () => {
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const {
    handleAiCleanup,
    isLoading,
    handleGenerateSummary,
    latestSummary,
    setLatestSummary,
    loading,
    setIsPromptOpen,
    generating,
  } = useAi();

  const context = useContext(whiteBoardContext);
  if (!context) throw new Error("Toolbar must be used within a WhiteBoardProvider");

  const {
    tool,
    setTool,
    elements,
    setElements,
    strokeColor,
    setStrokeColor,
    strokeWidth,
    setStrokeWidth,
    History,
    setHistory,
    canvasRef,
  } = context;

  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setStrokeColor(isDark ? "#ffffff" : "#1e1c18");
  }, [isDark, setStrokeColor]);

  const swatches = isDark
    ? ["#ffffff", "#e03131", "#1971c2"]
    : ["#1e1c18", "#e03131", "#1971c2"];

  const handleClear = () => setShowClearConfirm(true);

  const confirmClear = () => {
    setElements([]);
    setShowClearConfirm(false);
  };

  const handleUndo = () => {
    if (elements.length === 0) return;
    const lastElement = elements[elements.length - 1];
    setHistory((prev) => [...prev, lastElement]);
    setElements((prev) => prev.slice(0, -1));
  };

  const handleRedo = () => {
    if (History.length === 0) return;
    const lastElement = History[History.length - 1];
    setElements((prev) => [...prev, lastElement]);
    setHistory((prev) => prev.slice(0, -1));
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const exportCtx = exportCanvas.getContext("2d");
    exportCtx.fillStyle = "#ffffff";
    exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
    exportCtx.drawImage(canvas, 0, 0);
    const image = exportCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "whiteboard.png";
    link.href = image;
    link.click();
  };

  const iconBtnClass = (active) =>
    `h-9 w-9 flex items-center justify-center rounded-lg transition duration-150 cursor-pointer ${active
      ? "bg-accent-600 text-white shadow-sm"
      : "text-ink-500 dark:text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800 hover:text-ink-900 dark:hover:text-white"
    }`;

  return (
    <>
      {/* TOP TOOLBAR ROW */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex justify-center">
        <div className="bg-white/95 dark:bg-ink-900/95 backdrop-blur-md border border-ink-200 dark:border-ink-800 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg">
          {/* Drawing tools */}
          <div className="flex items-center gap-1">
            <div className="relative group">
              <input type="radio" name="tool" id="pen" checked={tool === "pen"} onChange={() => setTool("pen")} className="sr-only" />
              <label htmlFor="pen" className={iconBtnClass(tool === "pen")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></svg>
              </label>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Pen</span>
            </div>

            <div className="relative group">
              <input type="radio" name="tool" id="line" checked={tool === "line"} onChange={() => setTool("line")} className="sr-only" />
              <label htmlFor="line" className={iconBtnClass(tool === "line")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
              </label>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Line</span>
            </div>

            <div className="relative group">
              <input type="radio" name="tool" id="rectangle" checked={tool === "rectangle"} onChange={() => setTool("rectangle")} className="sr-only" />
              <label htmlFor="rectangle" className={iconBtnClass(tool === "rectangle")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2" /></svg>
              </label>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Rectangle</span>
            </div>

            <div className="relative group">
              <input type="radio" name="tool" id="circle" checked={tool === "circle"} onChange={() => setTool("circle")} className="sr-only" />
              <label htmlFor="circle" className={iconBtnClass(tool === "circle")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
              </label>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Circle</span>
            </div>

            <div className="relative group">
              <input type="radio" name="tool" id="arrow" checked={tool === "arrow"} onChange={() => setTool("arrow")} className="sr-only" />
              <label htmlFor="arrow" className={iconBtnClass(tool === "arrow")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6L12 2L16 6" /><path d="M12 2V22" /></svg>
              </label>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Arrow</span>
            </div>

            <div className="relative group">
              <input type="radio" name="tool" id="text" checked={tool === "text"} onChange={() => setTool("text")} className="sr-only" />
              <label htmlFor="text" className={iconBtnClass(tool === "text")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.14" strokeLinecap="round" strokeLinejoin="round"><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /><path d="M22 9v7" /><path d="M3.304 13h6.392" /><circle cx="18.5" cy="12.5" r="3.5" /></svg>
              </label>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Text</span>
            </div>
          </div>

          <div className="h-6 w-px bg-ink-200 dark:bg-ink-700" />

          {/* History & document actions */}
          <div className="flex items-center gap-1">
            <div className="relative group">
              <button onClick={handleUndo} disabled={elements.length === 0} type="button" className={`${iconBtnClass(false)} disabled:opacity-30`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
              </button>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Undo</span>
            </div>

            <div className="relative group">
              <button onClick={handleRedo} disabled={History.length === 0} type="button" className={`${iconBtnClass(false)} disabled:opacity-30`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
              </button>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Redo</span>
            </div>

            <div className="relative group">
              <button onClick={handleClear} type="button" className="h-9 w-9 flex items-center justify-center rounded-lg text-ink-500 dark:text-ink-400 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
              </button>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Clear All</span>
            </div>

            <div className="relative group">
              <button onClick={handleDownload} type="button" className={iconBtnClass(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /><path d="m14 19 3 3v-5.5" /><path d="m17 22 3-3" /><circle cx="9" cy="9" r="2" /></svg>
              </button>
              <span className="pointer-events-none absolute hidden group-hover:block bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-[10px] font-semibold px-2 py-1 rounded-md -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md">Export PNG</span>
            </div>
          </div>

          <div className="h-6 w-px bg-ink-200 dark:bg-ink-700" />

          {/* AI features */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPromptOpen(true)}
              disabled={generating}
              type="button"
              className="h-9 px-3.5 flex items-center gap-1.5 rounded-full font-bold text-xs bg-gradient-to-r from-purple-600 to-accent-600 text-white shadow-md hover:scale-[1.03] active:scale-[0.97] transition disabled:opacity-50 disabled:scale-100 cursor-pointer"
            >
              {generating ? (
                <Loader size={14} color="white" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3H8" /><path d="m15.007 5.008 3.987 3.986" /><path d="M20 15v4" /><path d="M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="M22 17h-4" /><path d="M4 5v4" /><path d="M6 7H2" /><path d="M9 2v2" /></svg>
              )}
              {generating ? "Generating..." : "Generate"}
            </button>

            <button
              onClick={handleGenerateSummary}
              disabled={loading}
              type="button"
              className="h-9 px-3.5 flex items-center gap-1.5 rounded-full font-bold text-xs bg-ink-900 dark:bg-white hover:bg-ink-800 dark:hover:bg-ink-100 text-white dark:text-ink-900 shadow-md hover:scale-[1.03] active:scale-[0.97] transition disabled:opacity-50 disabled:scale-100 cursor-pointer"
            >
              {loading ? (
                <Loader size={14} color={isDark ? "black" : "white"} />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4H7" /><path d="m18 16 3 3-3 3" /><path d="M3 4v13a2 2 0 0 0 2 2h16" /><path d="M7 14h7" /><path d="M7 9h12" /></svg>
              )}
              {loading ? "Summarizing..." : "Summarize"}
            </button>
          </div>
        </div>
      </div>

      {/* Canvas content renders here (children/sibling) */}

      <AISummary />
      <AIPromptModal />
      <GenerationModal />

      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-100 p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-ink-900 rounded-2xl shadow-2xl p-6 w-full max-w-sm border border-ink-100 dark:border-ink-700 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
            <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">Clear Whiteboard?</h3>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-6 leading-relaxed">
              This will permanently delete all components, drawings, and text from the canvas. This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full justify-center">
              <button type="button" onClick={() => setShowClearConfirm(false)} className="px-4 py-2 bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 text-ink-700 dark:text-ink-200 rounded-lg font-medium transition cursor-pointer text-sm">
                Cancel
              </button>
              <button type="button" onClick={confirmClear} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition cursor-pointer text-sm">
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STROKE PROPERTIES PANEL */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white/95 dark:bg-ink-900/95 backdrop-blur-md border border-ink-200 dark:border-ink-800 rounded-2xl p-4 flex flex-col items-center gap-4 shadow-lg w-36">
          {/* Stroke Color section */}
          <div className="flex flex-col items-center gap-1.5 w-full">
            <span className="text-[10px] font-bold tracking-wider uppercase text-ink-500 dark:text-ink-400">Stroke Color</span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
              {swatches.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setStrokeColor(c)}
                  style={{ backgroundColor: c }}
                  className={`h-5 w-5 rounded-md cursor-pointer transition ${strokeColor === c ? "ring-2 ring-offset-1 ring-accent-500 dark:ring-offset-ink-900" : "hover:scale-110"
                    }`}
                />
              ))}
              <label className="relative h-5 w-5 rounded-md cursor-pointer border border-ink-200 dark:border-ink-700 flex items-center justify-center overflow-hidden text-ink-400 text-xs hover:bg-ink-50 dark:hover:bg-ink-800">
                <input type="color" value={strokeColor} onChange={(e) => setStrokeColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                +
              </label>
            </div>
          </div>

          <div className="w-full h-px bg-ink-200 dark:bg-ink-800" />

          {/* Stroke Width section */}
          <div className="flex flex-col items-center gap-2 w-full">
            <span className="text-[10px] font-bold tracking-wider uppercase text-ink-500 dark:text-ink-400">Stroke Width</span>
            <input
              type="range"
              min="1"
              max="50"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(e.target.value)}
              className="w-full h-1 bg-ink-200 dark:bg-ink-700 rounded-lg appearance-none cursor-pointer accent-accent-600"
            />
            <span className="text-[11px] font-mono font-bold text-ink-500 dark:text-ink-400">{strokeWidth}px</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;

