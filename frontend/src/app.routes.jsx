import { createBrowserRouter } from "react-router-dom"

import Login from "./features/auth/pages/Login.jsx"
import Register from "./features/auth/pages/Register.jsx"
import RoomPage from "./features/room/pages/RoomPage.jsx"
import App from "./App.jsx"
import LandingPage from "./features/home/pages/LandingPage.jsx"
import DashboardPage from "./features/dashboard/pages/DashboardPage.jsx"
import MyRoomsPage from "./features/room/pages/MyRoomsPage.jsx"
import ProfilePage from "./features/auth/pages/ProfilePage.jsx"
import DashboardLayout from "./components/layout/DashboardLayout.jsx"
import Protected from "./features/auth/components/Protected.jsx"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage />
                    },
                    {
                        path: "my-rooms",
                        element: <MyRoomsPage />
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />
                    }
                ]
            },
            {
                path: "room/:roomId",
                element: <Protected>
                    <RoomPage />
                </Protected>,
            },
        ]
    }
])