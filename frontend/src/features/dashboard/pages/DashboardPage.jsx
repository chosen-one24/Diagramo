// // import React, { useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { useAuth } from "../../auth/hooks/useAuth.js";
// // import { useRoom } from "../../room/hooks/useRoom.js";
// // import CreateRoomForm from "../../room/components/CreateRoomForm.jsx";
// // import JoinRoomForm from "../../room/components/JoinRoomForm.jsx";

// // const DashboardPage = () => {
// //   const { user } = useAuth();
// //   const { userRooms, handleGetUserRooms, loading } = useRoom();

// //   useEffect(() => {
// //     handleGetUserRooms();
// //   }, []);

// //   // Show up to 4 most recent rooms
// //   const recentRooms = (userRooms || []).slice(0, 4);

// //   return (
// //     <div className="space-y-10 animate-in fade-in duration-200">
// //       {/* Welcome Banner */}
// //       <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl shadow-indigo-600/10">
// //         <h1 className="text-3xl font-extrabold tracking-tight">
// //           Welcome back, {user?.username || "Collaborator"}!
// //         </h1>
// //         <p className="text-indigo-100 mt-2 text-sm leading-relaxed max-w-xl">
// //           Create a fresh whiteboard canvas to map out designs with your team, or paste a room code to join an active session.
// //         </p>
// //       </div>

// //       {/* Forms Section */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
// //         <div className="flex flex-col">
// //           <CreateRoomForm />
// //         </div>
// //         <div className="flex flex-col">
// //           <JoinRoomForm />
// //         </div>
// //       </div>

// //       {/* Recent Rooms */}
// //       <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
// //         <div className="flex justify-between items-center mb-6">
// //           <div>
// //             <h2 className="text-xl font-bold text-gray-900">Recent Whiteboard Sessions</h2>
// //             <p className="text-xs text-gray-500 mt-1">Your recently created or joined rooms</p>
// //           </div>
// //           <Link
// //             to="/my-rooms"
// //             className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
// //           >
// //             View all rooms &rarr;
// //           </Link>
// //         </div>

// //         {loading && userRooms.length === 0 ? (
// //           <div className="flex justify-center items-center py-10">
// //             <svg className="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //             </svg>
// //           </div>
// //         ) : recentRooms.length === 0 ? (
// //           <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
// //             <span className="text-3xl mb-3 block">✏</span>
// //             <p className="text-sm text-gray-600 font-medium">No recent whiteboard sessions found</p>
// //             <p className="text-xs text-gray-400 mt-1">Create or join a room above to get started!</p>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {recentRooms.map((room) => {
// //               const isCreator = room.createdBy?._id === user?._id || room.createdBy === user?._id;
// //               return (
// //                 <div
// //                   key={room._id}
// //                   className="border border-gray-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
// //                 >
// //                   <div>
// //                     <div className="flex justify-between items-start gap-2 mb-3">
// //                       <span className="bg-indigo-50 text-indigo-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-indigo-100">
// //                         {room.roomCode}
// //                       </span>
// //                       <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
// //                         isCreator ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-blue-50 text-blue-700 border border-blue-100"
// //                       }`}>
// //                         {isCreator ? "Creator" : "Joined"}
// //                       </span>
// //                     </div>

// //                     <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">
// //                       Whiteboard {room.roomCode}
// //                     </h3>
// //                     <p className="text-[10px] text-gray-500 font-medium mb-4">
// //                       Updated: {new Date(room.updatedAt).toLocaleDateString()}
// //                     </p>
// //                   </div>

// //                   <Link
// //                     to={`/room/${room._id}`}
// //                     className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-xs font-bold transition cursor-pointer"
// //                   >
// //                     Open Canvas
// //                   </Link>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardPage;


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../auth/hooks/useAuth.js";
// import { useRoom } from "../../room/hooks/useRoom.js";
// import CreateRoomForm from "../../room/components/CreateRoomForm.jsx";
// import JoinRoomForm from "../../room/components/JoinRoomForm.jsx";

// const DashboardPage = () => {
//   const { user } = useAuth();
//   const { userRooms, handleGetUserRooms, loading } = useRoom();

//   useEffect(() => {
//     handleGetUserRooms();
//   }, []);

//   // Show up to 4 most recent rooms
//   const recentRooms = (userRooms || []).slice(0, 4);

//   return (
//     <div className="space-y-10 animate-fade-in">
//       {/* Welcome Banner */}
//       <div className="bg-linear-to-r from-accent-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl shadow-accent-600/10">
//         <h1 className="text-3xl font-extrabold tracking-tight">
//           Welcome back, {user?.username || "Collaborator"}!
//         </h1>
//         <p className="text-accent-100 mt-2 text-sm leading-relaxed max-w-xl">
//           Create a fresh whiteboard canvas to map out designs with your team, or paste a room code to join an active session.
//         </p>
//       </div>

//       {/* Forms Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
//         <div className="flex flex-col">
//           <CreateRoomForm />
//         </div>
//         <div className="flex flex-col">
//           <JoinRoomForm />
//         </div>
//       </div>

//       {/* Recent Rooms */}
//       <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 shadow-sm">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-xl font-bold text-ink-900 dark:text-white">Recent Whiteboard Sessions</h2>
//             <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">Your recently created or joined rooms</p>
//           </div>
//           <Link
//             to="/my-rooms"
//             className="text-sm font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 transition"
//           >
//             View all rooms &rarr;
//           </Link>
//         </div>

//         {loading && userRooms.length === 0 ? (
//           <div className="flex justify-center items-center py-10">
//             <svg className="animate-spin h-8 w-8 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//           </div>
//         ) : recentRooms.length === 0 ? (
//           <div className="text-center py-12 bg-ink-50 dark:bg-ink-800 rounded-xl border border-dashed border-ink-200 dark:border-ink-700">
//             <span className="text-3xl mb-3 block">✏</span>
//             <p className="text-sm text-ink-600 dark:text-ink-300 font-medium">No recent whiteboard sessions found</p>
//             <p className="text-xs text-ink-400 dark:text-ink-500 mt-1">Create or join a room above to get started!</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {recentRooms.map((room) => {
//               const isCreator = room.createdBy?._id === user?._id || room.createdBy === user?._id;
//               return (
//                 <div
//                   key={room._id}
//                   className="border border-ink-200 dark:border-ink-700 rounded-xl p-5 hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-md transition duration-200 flex flex-col justify-between"
//                 >
//                   <div>
//                     <div className="flex justify-between items-start gap-2 mb-3">
//                       <span className="bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-accent-100 dark:border-accent-900">
//                         {room.roomCode}
//                       </span>
//                       <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
//                         isCreator
//                           ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900"
//                           : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
//                       }`}>
//                         {isCreator ? "Creator" : "Joined"}
//                       </span>
//                     </div>

//                     <h3 className="font-bold text-ink-900 dark:text-white text-sm mb-1 truncate">
//                       Whiteboard {room.roomCode}
//                     </h3>
//                     <p className="text-[10px] text-ink-500 dark:text-ink-400 font-medium mb-4">
//                       Updated: {new Date(room.updatedAt).toLocaleDateString()}
//                     </p>
//                   </div>

//                   <Link
//                     to={`/room/${room._id}`}
//                     className="w-full text-center bg-accent-600 hover:bg-accent-700 text-white py-2 rounded-lg text-xs font-bold transition cursor-pointer"
//                   >
//                     Open Canvas
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth.js";
import { useRoom } from "../../room/hooks/useRoom.js";
import CreateRoomForm from "../../room/components/CreateRoomForm.jsx";
import JoinRoomForm from "../../room/components/JoinRoomForm.jsx";
import Loader from "../../../components/layout/Loader.jsx";

const DashboardPage = () => {
  const { user } = useAuth();
  const { userRooms, handleGetUserRooms, loading } = useRoom();

  useEffect(() => {
    handleGetUserRooms();
  }, []);

  // Show up to 4 most recent rooms
  const recentRooms = (userRooms || []).slice(0, 4);

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Welcome Banner */}

      <div className="relative overflow-hidden bg-linear-to-r from-accent-700 via-accent-600 to-purple-600 rounded-2xl px-8 py-10 text-white shadow-xl shadow-accent-600/10">
  {/* Dot pattern accent — top right corner, out of the way of content */}
  <div className="absolute top-8 right-8 w-20 h-14 opacity-30 hidden lg:block pointer-events-none">
    <svg viewBox="0 0 100 60" fill="none">
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="1.5" fill="white" />
        ))
      )}
    </svg>
  </div>

  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* Text content */}
    <div className="max-w-xl text-center lg:text-left">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Welcome back, {user?.username || "Collaborator"}!
      </h1>
      <p className="text-accent-100 mt-3 text-sm leading-relaxed">
        Create a fresh whiteboard canvas to map out designs with your team, or paste a room code to join an active session.
      </p>
    </div>

    {/* Illustration */}
    <div className="hidden lg:flex shrink-0 items-center justify-center w-64 h-40">
      <svg viewBox="0 0 260 160" className="w-full h-full overflow-visible">
        {/* Mini toolbar */}
        <g transform="translate(0, 20)">
          <rect x="0" y="0" width="32" height="100" rx="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <g stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9">
            <path d="M11 14 l9 -5.5 l3.5 3.5 l-5.5 9 l-7 1.8 z" />
            <rect x="8" y="34" width="16" height="12" rx="1.5" />
            <circle cx="16" cy="60" r="7" />
            <text x="11" y="82" fontSize="11" fontFamily="monospace" fill="white">T</text>
          </g>
        </g>

        {/* Whiteboard card */}
        <g transform="translate(46, 0)">
          <rect x="0" y="0" width="200" height="128" rx="12" fill="white" />
          <circle cx="14" cy="14" r="3.2" fill="#e5e7eb" />
          <circle cx="25" cy="14" r="3.2" fill="#e5e7eb" />
          <circle cx="36" cy="14" r="3.2" fill="#e5e7eb" />

          {/* Shapes */}
          <rect x="22" y="36" width="30" height="30" rx="4" fill="#a78bfa" />
          <circle cx="135" cy="50" r="18" fill="#60a5fa" />
          <rect x="82" y="78" width="22" height="22" rx="4" fill="#f472b6" transform="rotate(45 93 89)" />

          {/* Connector arrows */}
          <path d="M55 50 h40" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrowhead)" />
          <path d="M37 69 v16 h28" stroke="#334155" strokeWidth="1.6" fill="none" markerEnd="url(#arrowhead)" />

          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#334155" />
            </marker>
          </defs>
        </g>

        {/* Sticky note */}
        <g transform="translate(216, 88) rotate(-6)">
          <rect x="0" y="0" width="42" height="36" rx="4" fill="#ddd6fe" />
          <line x1="7" y1="11" x2="34" y2="11" stroke="#7c3aed" strokeWidth="1.4" opacity="0.5" />
          <line x1="7" y1="18" x2="29" y2="18" stroke="#7c3aed" strokeWidth="1.4" opacity="0.5" />
          <line x1="7" y1="25" x2="31" y2="25" stroke="#7c3aed" strokeWidth="1.4" opacity="0.5" />
        </g>

        {/* Cursor */}
        <g transform="translate(228, 126)">
          <path d="M0 0 L13 10 L7.5 11 L10 18 L6.5 19.5 L3.5 12.5 L0 15 Z" fill="white" />
        </g>

        {/* Squiggle accent */}
        <path
          d="M0 92 Q 13 74 26 92 T 48 92"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
      </svg>
    </div>
  </div>
</div>

      {/* Forms Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col">
          <CreateRoomForm />
        </div>
        <div className="flex flex-col">
          <JoinRoomForm />
        </div>
      </div>

      {/* Recent Rooms */}
      <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-ink-900 dark:text-white">Recent Whiteboard Sessions</h2>
            <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">Your recently created or joined rooms</p>
          </div>
          <Link
            to="/my-rooms"
            className="text-sm font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 transition"
          >
            View all rooms &rarr;
          </Link>
        </div>

        {loading && userRooms.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <Loader size={36} />
          </div>
        ) : recentRooms.length === 0 ? (
          <div className="text-center py-12 bg-ink-50 dark:bg-ink-800 rounded-xl border border-dashed border-ink-200 dark:border-ink-700">
            <span className="text-3xl mb-3 block">✏</span>
            <p className="text-sm text-ink-600 dark:text-ink-300 font-medium">No recent whiteboard sessions found</p>
            <p className="text-xs text-ink-400 dark:text-ink-500 mt-1">Create or join a room above to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentRooms.map((room) => {
              const isCreator = room.createdBy?._id === user?._id || room.createdBy === user?._id;
              return (
                <div
                  key={room._id}
                  className="border border-ink-200 dark:border-ink-700 rounded-xl p-5 hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-md transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <span className="bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-accent-100 dark:border-accent-900">
                        {room.roomCode}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                        isCreator
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900"
                          : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
                      }`}>
                        {isCreator ? "Creator" : "Joined"}
                      </span>
                    </div>

                    <h3 className="font-bold text-ink-900 dark:text-white text-sm mb-1 truncate">
                      Whiteboard {room.roomCode}
                    </h3>
                    <p className="text-[10px] text-ink-500 dark:text-ink-400 font-medium mb-4">
                      Updated: {new Date(room.updatedAt).toLocaleDateString()}
                    </p>
                  </div>

                  <Link
                    to={`/room/${room._id}`}
                    className="w-full text-center bg-accent-600 hover:bg-accent-700 text-white py-2 rounded-lg text-xs font-bold transition cursor-pointer"
                  >
                    Open Canvas
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
