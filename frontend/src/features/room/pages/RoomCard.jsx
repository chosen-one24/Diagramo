// import React from "react";
// import { Link } from "react-router-dom";

// const RoomCard = ({ room, currentUserId }) => {
//   const isCreator = room.createdBy?._id === currentUserId || room.createdBy === currentUserId;
//   const creatorName = room.createdBy?.username || (isCreator ? "You" : "Unknown");
//   const memberCount = room.members?.length || 0;

//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-indigo-400 hover:shadow-md transition duration-200 flex flex-col justify-between">
//       <div>
//         <div className="flex justify-between items-start gap-2 mb-4">
//           <span className="bg-indigo-50 text-indigo-700 text-xs font-mono font-bold px-2.5 py-1 rounded border border-indigo-100">
//             {room.roomCode}
//           </span>
//           <span className={`text-xs font-medium px-2 py-1 rounded ${
//             isCreator ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-blue-50 text-blue-700 border border-blue-100"
//           }`}>
//             {isCreator ? "Creator" : "Joined"}
//           </span>
//         </div>

//         <h3 className="font-bold text-gray-900 text-base mb-2">
//           Whiteboard Canvas {room.roomCode}
//         </h3>

//         <div className="space-y-1.5 text-xs text-gray-500 mb-6 font-medium">
//           <p>
//             Creator: <span className="text-gray-700 font-semibold">{creatorName}</span>
//           </p>
//           <p>
//             Members: <span className="text-gray-700 font-semibold">{memberCount} {memberCount === 1 ? "user" : "users"}</span>
//           </p>
//           <p>
//             Created: <span className="text-gray-700">{new Date(room.createdAt).toLocaleDateString()}</span>
//           </p>
//           <p>
//             Last Active: <span className="text-gray-700">{new Date(room.updatedAt).toLocaleDateString()}</span>
//           </p>
//         </div>
//       </div>

//       <Link
//         to={`/room/${room._id}`}
//         className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-xs font-bold transition cursor-pointer"
//       >
//         Open Board
//       </Link>
//     </div>
//   );
// };

// export default RoomCard;



import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room, currentUserId }) => {
  const isCreator = room.createdBy?._id === currentUserId || room.createdBy === currentUserId;
  const creatorName = room.createdBy?.username || (isCreator ? "You" : "Unknown");
  const memberCount = room.members?.length || 0;

  return (
    <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 rounded-2xl p-6 shadow-sm hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-md transition duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-4">
          <span className="bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-800 text-xs font-mono font-bold px-2.5 py-1 rounded border border-accent-100 dark:border-accent-900">
            {room.roomCode}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            isCreator
              ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900"
              : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
          }`}>
            {isCreator ? "Creator" : "Joined"}
          </span>
        </div>

        <h3 className="font-bold text-ink-900 dark:text-white text-base mb-2">
          Whiteboard Canvas {room.roomCode}
        </h3>

        <div className="space-y-1.5 text-xs text-ink-500 dark:text-ink-400 mb-6 font-medium">
          <p>
            Creator: <span className="text-ink-700 dark:text-ink-200 font-semibold">{creatorName}</span>
          </p>
          <p>
            Members: <span className="text-ink-700 dark:text-ink-200 font-semibold">{memberCount} {memberCount === 1 ? "user" : "users"}</span>
          </p>
          <p>
            Created: <span className="text-ink-700 dark:text-ink-200">{new Date(room.createdAt).toLocaleDateString()}</span>
          </p>
          <p>
            Last Active: <span className="text-ink-700 dark:text-ink-200">{new Date(room.updatedAt).toLocaleDateString()}</span>
          </p>
        </div>
      </div>

      <Link
        to={`/room/${room._id}`}
        className="w-full text-center bg-accent-600 hover:bg-accent-700 text-white py-2.5 rounded-xl text-xs font-bold transition cursor-pointer"
      >
        Open Board
      </Link>
    </div>
  );
};

export default RoomCard;
