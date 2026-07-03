// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useRoom } from "../hooks/useRoom.js";
// import { socket } from "../../../socket.js";

// const RoomFormHeader = () => {
//     const { room } = useRoom();
//     const navigate = useNavigate();
//     const roomCode = room?.roomCode || "N/A";

//     const handleLeaveRoom = () => {
//         if (room?._id) {
//             socket.emit("leave-room", room._id);
//         }
//         navigate("/dashboard");
//     };

//     return (
//       <header className="bg-white border-b border-gray-200 px-6 py-3 text-slate-800 flex items-center justify-between sticky top-0 z-40">
//         <div className="flex items-center gap-3">
//           <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/10">
//             B
//           </div>
//           <span className="font-extrabold text-base tracking-tight text-gray-900">
//             BlackBoard Session
//           </span>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Room Code:</span>
//             <span className="bg-indigo-50 text-indigo-700 text-xs font-mono font-bold px-2.5 py-1 rounded border border-indigo-100 select-all">
//               {roomCode}
//             </span>
//           </div>
//           <button
//             onClick={handleLeaveRoom}
//             className="bg-slate-50 hover:bg-red-50 hover:text-red-600 hover:border-red-100 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm border border-slate-200 cursor-pointer"
//           >
//             ← Leave Room
//           </button>
//         </div>
//       </header>
//     );
// };

// export default RoomFormHeader;


import React from "react";
import { useNavigate } from "react-router-dom";
import { useRoom } from "../hooks/useRoom.js";
import { socket } from "../../../socket.js";
import { useTheme } from "../../../components/layout/UseTheme.js";
import logo from "../../../assets/logo.png";

const RoomFormHeader = () => {
  const { room } = useRoom();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const roomCode = room?.roomCode || "N/A";

  const handleLeaveRoom = () => {
    if (room?._id) {
      socket.emit("leave-room", room._id);
    }
    navigate("/dashboard");
  };

  return (
    <header className="h-16 shrink-0 bg-white dark:bg-ink-900 border-b border-ink-200 dark:border-ink-800 px-5 flex items-center justify-between relative z-40">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Diagramo" className="h-10 w-10 rounded-2xl group-hover:scale-105 transition" />
        <span className="font-bold text-lg text-ink-900 dark:text-white tracking-tight">
          Diagramo
        </span>
      </div>

      {/* Right: room code, theme toggle, leave */}
      <div className="flex items-center gap-2.5">
        {/* Room code chip */}
        <div className="flex items-center gap-1.5 bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-lg pl-2.5 pr-2.5 py-1.5">
          <span className="text-[10px] text-ink-400 dark:text-ink-500 font-bold uppercase">
            Room Code
          </span>
          <span className="text-accent-700 dark:text-accent-300 text-xs font-mono font-bold select-all">
            {roomCode}
          </span>
        </div>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          title="Toggle theme"
          className="h-9 w-9 flex items-center justify-center rounded-lg text-ink-500 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition cursor-pointer"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Leave */}
        <button
          onClick={handleLeaveRoom}
          className="flex items-center gap-1.5 bg-white dark:bg-ink-800 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400 text-ink-600 dark:text-ink-300 px-3.5 py-2 rounded-lg text-xs font-bold transition border border-ink-200 dark:border-ink-700 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Leave Room
        </button>
      </div>
    </header>
  );
};

export default RoomFormHeader;

