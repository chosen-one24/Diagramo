
// import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth.js";
// import Loader from "../../../components/layout/Loader.jsx";


// const Register = () => {
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
  

//   const navigate = useNavigate();
//   const { loading, handleRegister } = useAuth();

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     setError('')
//     console.log('register', { username, email, password })
    
//     const success = await handleRegister({ username, email, password });
//     if (success) {
//       navigate('/');
//     } else {
//       setError('Registration failed. Username or email might already be in use.');
//     }
//   }


//   return (
//     <div className="min-h-screen bg-[#000000ef] px-4 py-12 text-white sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-[#111] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
//         <h1 className="text-4xl font-semibold">Register</h1>
//         {error && <p className="mt-4 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>}

//         <form onSubmit={handleSubmit} className="mt-10 space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-slate-300">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter username"
//               className="mt-3 w-full rounded-3xl border border-white/10 bg-white/95 px-4 py-4 text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email address"
//               className="mt-3 w-full rounded-3xl border border-white/10 bg-white/95 px-4 py-4 text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               className="mt-3 w-full rounded-3xl border border-white/10 bg-white/95 px-4 py-4 text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-full bg-rose-500  px-6 py-4 text-base font-semibold text-white transition hover:bg-indigo-400 flex items-center justify-center gap-2"
//           >
//             {loading ? (
//               <>
//                 <Loader size={18} color="white" />
//                 <span>Registering...</span>
//               </>
//             ) : (
//               "Register"
//             )}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-slate-400">
//           Already have an account?{' '}
//           <a href="/login" className="font-semibold text-rose-300 hover:text-indigo-200">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Register


import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import Loader from "../../../components/layout/Loader.jsx";
import { useTheme } from "../../../components/layout/UseTheme.js";
import logo from "../../../assets/logo.png";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const success = await handleRegister({ username, email, password });
    if (success) {
      navigate('/');
    } else {
      setError('Registration failed. Username or email might already be in use.');
    }
  };

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark dot-grid flex items-center justify-center px-4 py-12 relative">
      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        title="Toggle theme"
        className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-700 transition cursor-pointer shadow-sm"
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="flex flex-col items-center text-center mb-8">
          <img src={logo} alt="Diagramo" className="h-10 w-10 rounded-2xl group-hover:scale-105 transition" />
          <span className="font-extrabold text-2xl text-ink-900 dark:text-white tracking-tight">
            Diagramo
          </span>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-ink-900 dark:text-white mb-1">
            Create your account ✨
          </h1>
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Start your journey with Diagramo
          </p>
        </div>

        <div className="rounded-3xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 p-8 shadow-card">
          {error && (
            <p className="mb-5 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200 mb-2">
                Username
              </label>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800 pl-10 pr-4 py-3 text-sm text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-100 dark:focus:ring-accent-900/40 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200 mb-2">
                Email
              </label>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800 pl-10 pr-4 py-3 text-sm text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-100 dark:focus:ring-accent-900/40 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200 mb-2">
                Password
              </label>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-800 pl-10 pr-11 py-3 text-sm text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-100 dark:focus:ring-accent-900/40 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600 dark:hover:text-ink-200 cursor-pointer"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent-600 hover:bg-accent-700 py-3.5 text-sm font-bold text-white shadow-accent-glow transition disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader size={16} color="white" />
                  <span>Registering...</span>
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


