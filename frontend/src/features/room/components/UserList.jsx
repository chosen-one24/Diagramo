// import React from "react";
// import { useRoom } from "../hooks/useRoom.js";

// const UserList = () => {
//   const { roomUsers } = useRoom();

//   return (
//     <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 h-full">
//       <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
//         <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4">
//           Online Collaborators
//         </h3>

//         <ul className="space-y-3">
//           {roomUsers && roomUsers.length > 0 ? (
//             roomUsers.map((user) => {
//               const username = user.username || "Collaborator";
//               const initial = username.charAt(0).toUpperCase();

//               return (
//                 <li
//                   key={user._id || user.id}
//                   className="px-3.5 py-3 bg-white rounded-xl border border-gray-150 flex items-center justify-between hover:border-indigo-400 hover:shadow-sm transition duration-200"
//                 >
//                   <div className="flex items-center gap-3">
//                     {/* User Avatar */}
//                     <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
//                       {initial}
//                       <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
//                     </div>

//                     <div className="flex flex-col text-left">
//                       <span className="text-xs font-bold text-gray-800 leading-tight">
//                         {username}
//                       </span>
//                       <span className="text-[9px] text-gray-400 font-medium">
//                         Active now
//                       </span>
//                     </div>
//                   </div>

//                   <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-wider">
//                     Online
//                   </span>
//                 </li>
//               );
//             })
//           ) : (
//             <div className="text-center py-8 text-slate-400">
//               <span className="text-2xl mb-2 block">👥</span>
//               <p className="text-xs font-semibold text-gray-500">No users online</p>
//             </div>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserList;


import React from "react";
import { useRoom } from "../hooks/useRoom.js";

const UserList = () => {
  const { roomUsers } = useRoom();

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-ink-50/50 dark:bg-ink-900 h-full">
      <div className="bg-white dark:bg-ink-800 rounded-2xl border border-ink-200 dark:border-ink-700 shadow-sm p-4">
        <h3 className="text-xs font-bold text-ink-800 dark:text-ink-200 uppercase tracking-wider mb-4">
          Online Collaborators
        </h3>

        <ul className="space-y-3">
          {roomUsers && roomUsers.length > 0 ? (
            roomUsers.map((user) => {
              const username = user.username || "Collaborator";
              const initial = username.charAt(0).toUpperCase();

              return (
                <li
                  key={user._id || user.id}
                  className="px-3.5 py-3 bg-white dark:bg-ink-800 rounded-xl border border-ink-150 dark:border-ink-700 flex items-center justify-between hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-sm transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    {/* User Avatar */}
                    <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-accent-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      {initial}
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-ink-800 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-ink-800 dark:text-ink-100 leading-tight">
                        {username}
                      </span>
                      <span className="text-[9px] text-ink-400 dark:text-ink-500 font-medium">
                        Active now
                      </span>
                    </div>
                  </div>

                  <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900 uppercase tracking-wider">
                    Online
                  </span>
                </li>
              );
            })
          ) : (
            <div className="text-center py-8 text-ink-400 dark:text-ink-500">
              <span className="text-2xl mb-2 block">👥</span>
              <p className="text-xs font-semibold text-ink-500 dark:text-ink-400">No users online</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserList;

