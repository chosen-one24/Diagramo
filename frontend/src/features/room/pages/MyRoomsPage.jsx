// import React, { useEffect } from "react";
// import { useRoom } from "../hooks/useRoom.js";
// import { useAuth } from "../../auth/hooks/useAuth.js";
// import RoomCard from "./RoomCard.jsx";

// const MyRoomsPage = () => {
//   const { user } = useAuth();
//   const { userRooms, handleGetUserRooms, loading } = useRoom();

//   useEffect(() => {
//     handleGetUserRooms();
//   }, []);

//   return (
//     <div className="space-y-8 animate-in fade-in duration-200">
//       {/* Header */}

     


//       <div className="flex justify-between items-center border-b border-gray-200 pb-5">
//         <div>
//           <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Whiteboards</h1>
//           <p className="text-sm text-gray-500 mt-1">List of all cooperative boards you created or joined</p>
//         </div>
//         <div className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-xl border border-indigo-100">
//           Total: {userRooms?.length || 0} {userRooms?.length === 1 ? "Board" : "Boards"}
//         </div>
//       </div>

//       {/* Grid List */}
//       {loading && userRooms.length === 0 ? (
//         <div className="flex justify-center items-center py-20">
//           <svg className="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//           </svg>
//         </div>
//       ) : userRooms.length === 0 ? (
//         <div className="text-center py-20 bg-white border border-gray-200 rounded-2xl shadow-sm">
//           <span className="text-4xl mb-4 block">📁</span>
//           <h3 className="text-lg font-bold text-gray-800">No rooms found</h3>
//           <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">
//             You haven't created or joined any room code sessions yet. Go to your Dashboard to open a new whiteboard!
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {userRooms.map((room) => (
//             <RoomCard
//               key={room._id}
//               room={room}
//               currentUserId={user?._id || user?.id}
//             />
//           ))}
//         </div>
//       )}
    
      
//     </div>

    
//   );
// };

// export default MyRoomsPage;


import React, { useEffect } from "react";
import { useRoom } from "../hooks/useRoom.js";
import { useAuth } from "../../auth/hooks/useAuth.js";
import RoomCard from "./RoomCard.jsx";
import Loader from "../../../components/layout/Loader.jsx";

const MyRoomsPage = () => {
  const { user } = useAuth();
  const { userRooms, handleGetUserRooms, loading } = useRoom();

  useEffect(() => {
    handleGetUserRooms();
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-ink-200 dark:border-ink-800 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold text-ink-900 dark:text-white tracking-tight">My Whiteboards</h1>
          <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">List of all cooperative boards you created or joined</p>
        </div>
        <div className="bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-800 text-xs font-semibold px-4 py-2 rounded-xl border border-accent-100 dark:border-accent-900">
          Total: {userRooms?.length || 0} {userRooms?.length === 1 ? "Board" : "Boards"}
        </div>
      </div>

      {/* Grid List */}
      {loading && userRooms.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <Loader size={48} />
        </div>
      ) : userRooms.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-2xl shadow-sm">
          <span className="text-4xl mb-4 block">📁</span>
          <h3 className="text-lg font-bold text-ink-800 dark:text-ink-100">No rooms found</h3>
          <p className="text-sm text-ink-400 dark:text-ink-500 mt-1 max-w-sm mx-auto">
            You haven't created or joined any room code sessions yet. Go to your Dashboard to open a new whiteboard!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userRooms.map((room) => (
            <RoomCard
              key={room._id}
              room={room}
              currentUserId={user?._id || user?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRoomsPage;