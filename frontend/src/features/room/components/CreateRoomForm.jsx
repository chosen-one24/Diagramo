// import React from "react";
// import { useRoom } from "../hooks/useRoom.js";

// const CreateRoomForm = () => {
//   const { handleCreateRoom, loading } = useRoom();

//   const handleCreateRoomNow = (e) => {
//     e.preventDefault();
//     handleCreateRoom();
//   };

//   return (
//     <form onSubmit={handleCreateRoomNow}>
//       <div className="w-100 rounded-md border border-blue-300 bg-white p-10 shadow-sm text-center">
//         <h1 className="mb-6 text-center text-5xl font-bold text-blue-600">
//           Create Room
//         </h1>
//         <p className="mb-8 text-gray-500">
//           Create a new collaborative whiteboard room instantly.
//         </p>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full rounded bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 transition disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Create Room"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CreateRoomForm;



import React from "react";
import { useRoom } from "../hooks/useRoom.js";
import Loader from "../../../components/layout/Loader.jsx";

const CreateRoomForm = () => {
  const { handleCreateRoom, loading } = useRoom();

  const handleCreateRoomNow = (e) => {
    e.preventDefault();
    handleCreateRoom();
  };

  return (
    <form onSubmit={handleCreateRoomNow} className="h-full">
      <div className="h-full flex flex-col justify-between rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 p-8 shadow-sm text-center">
        <div>
          <div className="mx-auto mb-5 h-12 w-12 rounded-2xl bg-accent-50 dark:bg-accent-950/40 border border-accent-100 dark:border-accent-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600 dark:text-accent-400">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>

          <h1 className="mb-2 text-2xl font-bold text-ink-900 dark:text-white">
            Create Room
          </h1>
          <p className="mb-8 text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
            Create a new collaborative whiteboard room instantly.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-accent-600 py-3 font-semibold text-sm text-white shadow-accent-glow hover:bg-accent-700 hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 disabled:scale-100 cursor-pointer flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={18} color="white" />
              <span>Creating...</span>
            </>
          ) : (
            "Create Room"
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateRoomForm;

