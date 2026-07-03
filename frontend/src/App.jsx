import { Outlet } from "react-router-dom"
import AuthProvider from "./features/auth/auth.context.jsx"
import RoomProvider from "./features/room/roomContext.jsx"
import { WhiteBoardProvider } from "./features/whiteboard/whiteboardContext.jsx"
import { ChatProvider } from "./features/chat/chatContext.jsx";
import { AIProvider } from "./features/ai/aiContext.jsx";

import { useEffect } from "react";
import { socket } from "./socket.js";

function App() {
  useEffect(() => {
      console.log("aPP mounted ")
      socket.on("connect", () => {
          console.log(
              "Connected To Socket:",
              socket.id
          );
      });

      return () => {
          socket.off("connect");
      };

  }, []);

  return (
    <>
    <WhiteBoardProvider>
    <RoomProvider>
    <ChatProvider>
    <AIProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </AIProvider>
    </ChatProvider>
    </RoomProvider>
    </WhiteBoardProvider>
    </>
  )
}

export default App
