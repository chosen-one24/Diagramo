// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useRoom } from "../hooks/useRoom.js";
// import RoomFormHeader from "../components/RoomHeader.jsx";
// import RightSidebar from "../components/RightSidebar.jsx";

// import Toolbar from "../../whiteboard/components/Toolbar.jsx";
// import Whiteboard from "../../whiteboard/components/Whiteboard.jsx";

// import whiteBoardContext from "../../whiteboard/whiteboardContext.jsx";
// import useWhiteboard from "../../whiteboard/hooks/useWhiteboard.js";
// // import { socket } from "../../../socket.js"; 
// import { socket } from "../../../socket.js"


// import useAi from "../../ai/hooks/useAI.js";


// const RoomPage = () => {
//   const { roomId } = useParams();
//   const { handleGetRoomById, handleGetRoomMembers } = useRoom();
 
//   const { handleGetWhiteboard } = useWhiteboard();
//   const { handleGetSummaryHistory, handleGetGenerationHistory } = useAi();
  
//     useEffect(() => {
//     if (roomId) {

//         handleGetRoomById(roomId);

//         handleGetRoomMembers(roomId);

//         handleGetWhiteboard(roomId);

//         handleGetSummaryHistory(roomId);
        
//         handleGetGenerationHistory(roomId);

//         socket.emit("join-room", roomId);

//      }
//     }, [roomId]);


//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
//       <RoomFormHeader />

//       <div className="flex grow overflow-hidden">
//         {/* Whiteboard Area */}
//         <div className="flex-1 flex flex-col p-6 overflow-hidden relative">
//           <Toolbar />
//           <div className="grow flex justify-center items-center overflow-auto">
//             <Whiteboard />
//           </div>
//         </div>

//         {/* Right Sidebar (Users | Chat toggle) */}
//         <RightSidebar />
//       </div>
//     </div>
//   );
// };

// export default RoomPage;



import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRoom } from "../hooks/useRoom.js";
import RoomFormHeader from "../components/RoomHeader.jsx";
import RightSidebar from "../components/RightSidebar.jsx";

import Toolbar from "../../whiteboard/components/Toolbar.jsx";
import Whiteboard from "../../whiteboard/components/Whiteboard.jsx";

import whiteBoardContext from "../../whiteboard/whiteboardContext.jsx";
import useWhiteboard from "../../whiteboard/hooks/useWhiteboard.js";
import { socket } from "../../../socket.js"
import Loader from "../../../components/layout/Loader.jsx";


import useAi from "../../ai/hooks/useAI.js";


const RoomPage = () => {
  const { roomId } = useParams();
  const { handleGetRoomById, handleGetRoomMembers, loading } = useRoom();
 
  const { handleGetWhiteboard } = useWhiteboard();
  const { handleGetSummaryHistory, handleGetGenerationHistory } = useAi();
  
    useEffect(() => {
    if (roomId) {

        handleGetRoomById(roomId);

        handleGetRoomMembers(roomId);

        handleGetWhiteboard(roomId);

        handleGetSummaryHistory(roomId);
        
        handleGetGenerationHistory(roomId);

        socket.emit("join-room", roomId);

     }
    }, [roomId]);


  if (loading) {
    return (
      <div className="h-screen w-screen bg-canvas dark:bg-canvas-dark flex items-center justify-center">
        <Loader size={64} />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-canvas dark:bg-canvas-dark">
      <RoomFormHeader />

      <div className="flex flex-grow overflow-hidden">
        {/* Whiteboard Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          <div className="flex-grow overflow-auto flex flex-col">
            <Whiteboard />
          </div>
          <Toolbar />
        </div>

        {/* Right Sidebar (Users | Chat | AI toggle) */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default RoomPage;


