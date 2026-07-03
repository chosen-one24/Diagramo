import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const ProfilePage = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await handleLogout();
    navigate("/login");
  };

  const initial = (user?.username || "C").charAt(0).toUpperCase();

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center animate-in fade-in duration-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>

      {/* Avatar Placeholder */}
      <div className="mx-auto h-24 w-24 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-indigo-500/20 mb-6">
        {initial}
      </div>

      {/* Details */}
      <div className="space-y-4 text-left border-t border-b border-gray-100 py-6 mb-6">
        <div>
          <span className="text-xs text-gray-400 font-semibold block uppercase">Username</span>
          <span className="text-gray-800 font-bold text-lg">{user?.username || "N/A"}</span>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-semibold block uppercase">Email Address</span>
          <span className="text-gray-800 font-medium font-mono">{user?.email || "N/A"}</span>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm transition cursor-pointer shadow-lg shadow-red-600/10"
      >
        Log Out of Session
      </button>
    </div>
  );
};

export default ProfilePage;
