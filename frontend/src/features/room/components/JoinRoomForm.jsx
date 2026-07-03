// import React, { useState } from "react";
// import { useRoom } from "../hooks/useRoom.js";

// const JoinRoomForm = () => {
//   const [roomCode, setRoomCode] = useState("");
//   const { handleJoinRoom, loading } = useRoom();

//   const handleJoinRoomNow = (e) => {
//     e.preventDefault();
//     if (!roomCode.trim()) return;
//     handleJoinRoom(roomCode.trim());
//   };

//   return (
//     <form onSubmit={handleJoinRoomNow}>
//       <div className="w-100 rounded-md border border-blue-300 bg-white p-10 shadow-sm">
//         <h1 className="mb-6 text-center text-5xl font-bold text-blue-600">
//           Join Room
//         </h1>
//         <p className="mb-6 text-center text-gray-500">
//           Enter a room code to join an existing whiteboard.
//         </p>

//         <input
//           type="text"
//           placeholder="Enter room code"
//           value={roomCode}
//           onChange={(e) => setRoomCode(e.target.value)}
//           required
//           className="mb-8 w-full rounded border px-4 py-3 outline-none focus:border-blue-500 transition"
//         />

//         <button
//           type="submit"
//           disabled={loading || !roomCode.trim()}
//           className="w-full rounded bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {loading ? "Joining..." : "Join Room"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default JoinRoomForm;



import React, { useState } from "react";
import { useRoom } from "../hooks/useRoom.js";
import { useTheme } from "../../../components/layout/UseTheme.js";
import Loader from "../../../components/layout/Loader.jsx";

const JoinRoomForm = () => {
  const [roomCode, setRoomCode] = useState("");
  const { handleJoinRoom, loading } = useRoom();
  const { isDark } = useTheme();

  const handleJoinRoomNow = (e) => {
    e.preventDefault();
    if (!roomCode.trim()) return;
    handleJoinRoom(roomCode.trim());
  };

  return (
    <form onSubmit={handleJoinRoomNow} className="h-full">
      <div className="h-full flex flex-col justify-between rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 p-8 shadow-sm text-center">
        <div>
          <div className="mx-auto mb-5 h-12 w-12 rounded-2xl bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-600 dark:text-ink-300">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>

          <h1 className="mb-2 text-2xl font-bold text-ink-900 dark:text-white">
            Join Room
          </h1>
          <p className="mb-6 text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
            Enter a room code to join an existing whiteboard.
          </p>

          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            required
            className="mb-6 w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-3 text-sm font-mono font-semibold tracking-wider text-ink-800 dark:text-white text-center placeholder:text-ink-300 dark:placeholder:text-ink-500 placeholder:font-normal placeholder:tracking-normal outline-none focus:border-accent-400 focus:ring-4 focus:ring-accent-100 dark:focus:ring-accent-900/40 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !roomCode.trim()}
          className="w-full rounded-xl bg-ink-900 dark:bg-white py-3 font-semibold text-sm text-white dark:text-ink-900 hover:bg-ink-800 dark:hover:bg-ink-100 hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 disabled:scale-100 cursor-pointer flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={18} color={isDark ? "black" : "white"} />
              <span>Joining...</span>
            </>
          ) : (
            "Join Room"
          )}
        </button>
      </div>
    </form>
  );
};

export default JoinRoomForm;


