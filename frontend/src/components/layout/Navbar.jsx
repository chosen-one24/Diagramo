// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../../features/auth/hooks/useAuth.js";

// const Navbar = () => {
//   const { user, handleLogout } = useAuth();
//   const navigate = useNavigate();

//   const onLogout = async () => {
//     await handleLogout();
//     navigate("/login");
//   };

//   return (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/dashboard" className="flex items-center gap-2 group cursor-pointer">
//           <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition">
//             B
//           </div>
//           <span className="font-extrabold text-xl text-gray-900 tracking-tight">
//             BlackBoard
//           </span>
//         </Link>

//         {/* Navigation links */}
//         <nav className="hidden md:flex items-center gap-6">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `text-sm font-semibold transition py-2 ${
//                 isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-gray-950"
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/my-rooms"
//             className={({ isActive }) =>
//               `text-sm font-semibold transition py-2 ${
//                 isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-gray-950"
//               }`
//             }
//           >
//             My Rooms
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               `text-sm font-semibold transition py-2 ${
//                 isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-600 hover:text-gray-950"
//               }`
//             }
//           >
//             Profile
//           </NavLink>
//         </nav>

//         {/* Profile + Actions */}
//         <div className="flex items-center gap-4">
//           <div className="hidden sm:flex flex-col text-right">
//             <span className="text-sm font-bold text-gray-800">
//               {user?.username || "Collaborator"}
//             </span>
//             <span className="text-[10px] text-gray-500 font-mono">
//               {user?.email || ""}
//             </span>
//           </div>

//           <button
//             onClick={onLogout}
//             className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
//           >
//             Log Out
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth.js";
import { useTheme } from "./UseTheme.js";
import Loader from "./Loader.jsx";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, handleLogout, loading } = useAuth();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const onLogout = async () => {
    await handleLogout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition py-2 ${
      isActive
        ? "text-accent-600 dark:text-accent-400 border-b-2 border-accent-600 dark:border-accent-400"
        : "text-ink-600 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white"
    }`;

  return (
    <header className="bg-white dark:bg-ink-900 border-b border-ink-200 dark:border-ink-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2 group cursor-pointer">
          <img src={logo} alt="Diagramo" className="h-10 w-10 rounded-2xl group-hover:scale-105 transition" />
          <span className="font-extrabold text-xl text-ink-900 dark:text-white tracking-tight">
            Diagramo
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/my-rooms" className={linkClass}>
            My Rooms
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>
        </nav>

        {/* Profile + Actions */}
        <div className="flex items-center gap-3">
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

          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-bold text-ink-800 dark:text-ink-100">
              {user?.username || "Collaborator"}
            </span>
            <span className="text-[10px] text-ink-500 dark:text-ink-500 font-mono">
              {user?.email || ""}
            </span>
          </div>

          <button
            onClick={onLogout}
            disabled={loading}
            className="bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 text-ink-700 dark:text-ink-200 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
          >
            {loading ? (
              <>
                <Loader size={12} color={isDark ? "white" : "black"} />
                <span>Logging out...</span>
              </>
            ) : (
              "Log Out"
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

