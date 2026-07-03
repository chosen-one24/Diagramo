// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../auth/hooks/useAuth.js";
// import Footer from "../../../components/layout/Footer.jsx";
// import { DiagramoLogo } from "../../../components/layout/DiagramoLogo.jsx";

// const LandingPage = () => {
//   const { user } = useAuth();

//   return (
//     <div className="bg-slate-900 text-white min-h-screen flex flex-col font-sans">
//       {/* Navbar overlay */}
//       <nav className="max-w-7xl w-full mx-auto px-6 py-5 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-xl bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
//             B
//           </div>
//           <span className="font-extrabold text-2xl tracking-tight bg-linear-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
//             BlackBoard
//           </span>
//         </div>
//         <div className="flex gap-4">
//           {user ? (
//             <Link
//               to="/dashboard"
//               className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition duration-200 cursor-pointer"
//             >
//               Go to Dashboard
//             </Link>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="hover:text-indigo-400 px-3 py-2 font-medium transition cursor-pointer"
//               >
//                 Log In
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition duration-200 cursor-pointer"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex-1 max-w-7xl w-full mx-auto px-6 py-20 flex flex-col items-center text-center justify-center relative overflow-hidden">
//         {/* Glow Effects */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
//         <div className="absolute top-1/3 left-1/3 w-75 h-75 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

//         <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
//           ✨ Redefining Collaboration with AI
//         </span>

//         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-8">
//           The Collaborative AI Whiteboard for{" "}
//           <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Modern Teams
//           </span>
//         </h1>

//         <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
//           Draw in real time, generate database structures & diagram elements instantly with Gemini, and summarize board progress into structured markdown summaries automatically.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           {user ? (
//             <Link
//               to="/dashboard"
//               className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/40 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
//             >
//               Go to Dashboard
//             </Link>
//           ) : (
//             <>
//               <Link
//                 to="/register"
//                 className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/40 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
//               >
//                 Get Started for Free
//               </Link>
//               <Link
//                 to="/login"
//                 className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition cursor-pointer"
//               >
//                 Sign In
//               </Link>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="bg-slate-950/60 border-t border-slate-800 py-24">
//         <div className="max-w-7xl w-full mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Everything you need to map ideas
//             </h2>
//             <p className="text-slate-400 max-w-xl mx-auto">
//               Realtime tools and AI layers crafted to help design components, API flows, and architecture layouts.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition duration-300">
//               <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 font-bold text-xl">
//                 🎨
//               </div>
//               <h3 className="text-xl font-bold mb-3">Realtime Whiteboard</h3>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 Draw with pen, lines, rectangles, circles, arrows, and text. Watch changes sync instantly with socket events across all participants.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
//               <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 font-bold text-xl">
//                 🔮
//               </div>
//               <h3 className="text-xl font-bold mb-3">AI Diagram Generator</h3>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 Describe your diagram, service API flows, or database schemas, and let Gemini render complete whiteboard shapes instantly.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5 transition duration-300">
//               <div className="h-12 w-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6 font-bold text-xl">
//                 📝
//               </div>
//               <h3 className="text-xl font-bold mb-3">AI Summaries</h3>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 Generate professional summaries in markdown format detailing components, relationships, logical structures, and suggestions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AI Summary Section */}
//       <section className="py-24 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
//             💡 Document board context
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Generate clean documentation from board layouts instantly
//           </h2>
//           <p className="text-slate-400 mb-6 leading-relaxed">
//             Forget manual documentation. Clicking the "Summarize Board" button translates visual schemas and elements into detailed markdown specifications listing components, inputs, outputs, and suggestions.
//           </p>
//           <ul className="space-y-3 text-slate-300 text-sm">
//             <li className="flex items-center gap-3">
//               <span className="text-indigo-400">✔</span> Comprehensive architecture walkthroughs
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="text-indigo-400">✔</span> Clean lists, tables, and headings structure
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="text-indigo-400">✔</span> Snaps preserved in room history logs
//             </li>
//           </ul>
//         </div>
//         <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-md mx-auto w-full relative">
//           <div className="absolute -top-3 left-6 bg-slate-900 border border-slate-700 text-xs text-slate-300 px-3 py-1 rounded-md font-mono">
//             summary.md
//           </div>
//           <div className="space-y-4 mt-2">
//             <div className="h-4 bg-indigo-500/20 rounded w-1/3" />
//             <div className="h-3 bg-slate-800 rounded w-full" />
//             <div className="h-3 bg-slate-800 rounded w-5/6" />
//             <div className="h-3 bg-slate-800 rounded w-4/5" />
//             <div className="border-t border-slate-800 pt-3 mt-4 space-y-2">
//               <div className="h-4 bg-purple-500/20 rounded w-1/4" />
//               <div className="h-3 bg-slate-800 rounded w-full" />
//               <div className="h-3 bg-slate-800 rounded w-2/3" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AI Generate Section */}
//       <section className="py-24 bg-slate-950/40 border-t border-slate-900">
//         <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="order-2 lg:order-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-md mx-auto w-full">
//             <div className="flex gap-2 mb-4 border-b border-slate-800 pb-3">
//               <div className="h-3 w-3 rounded-full bg-red-500" />
//               <div className="h-3 w-3 rounded-full bg-yellow-500" />
//               <div className="h-3 w-3 rounded-full bg-green-500" />
//             </div>
//             <p className="text-xs text-slate-500 font-mono mb-2">Prompt Input:</p>
//             <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-slate-300 text-xs font-mono mb-4 leading-relaxed">
//               "Draw a minimal database schema showing User, Order, and Payment schemas connected by request flow arrows"
//             </div>
//             <div className="flex justify-end">
//               <div className="h-8 bg-indigo-600 rounded-lg w-28 flex items-center justify-center font-bold text-xs">
//                 ✨ Generating...
//               </div>
//             </div>
//           </div>
//           <div className="order-1 lg:order-2">
//             <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
//               ⚡ Build instantly
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Describe and generate complex shapes dynamically
//             </h2>
//             <p className="text-slate-400 mb-6 leading-relaxed">
//               Skip drawing database nodes or flowchart steps manually. Simply tell Gemini what diagram you want, and watch it structure circles, rectangles, lines, and directional arrows instantly.
//             </p>
//             <div className="flex gap-4">
//               <Link
//                 to="/register"
//                 className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer"
//               >
//                 Try AI Generate
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-linear-to-r from-indigo-900 via-purple-900 to-slate-900 py-24 border-t border-slate-800">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-extrabold mb-6">
//             Ready to design without limits?
//           </h2>
//           <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
//             Join rooms instantly, brainstorm on a shared whiteboard canvas, and document everything using AI.
//           </p>
//           <Link
//             to={user ? "/dashboard" : "/register"}
//             className="bg-white text-indigo-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold text-lg transition duration-200 shadow-xl cursor-pointer"
//           >
//             Create Your Board Now
//           </Link>
//         </div>
//       </section>

//       <Footer />

//           <DiagramoLogo/>

//     </div>
//   );
// };

// export default LandingPage;



import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth.js";
import Footer from "../../../components/layout/Footer.jsx";
import logo from "../../../assets/logo.png";

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col font-sans">
      {/* Navbar overlay */}
      <nav className="max-w-7xl w-full mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Diagramo" className="h-10 w-10 rounded-2xl group-hover:scale-105 transition" />
          <span className="font-extrabold text-2xl tracking-tight bg-linear-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Diagramo
          </span>
        </div>
        <div className="flex gap-4">
          {user ? (
            <Link
              to="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition duration-200 cursor-pointer"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-indigo-400 px-3 py-2 font-medium transition cursor-pointer"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition duration-200 cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 max-w-7xl w-full mx-auto px-6 py-20 flex flex-col items-center text-center justify-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-75 h-75 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          ✨ Redefining Collaboration with AI
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-8">
          The Collaborative AI Whiteboard for{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Modern Teams
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
          Draw in real time, generate database structures & diagram elements instantly with Gemini, and summarize board progress into structured markdown summaries automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {user ? (
            <Link
              to="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/40 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/40 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
              >
                Get Started for Free
              </Link>
              <Link
                to="/login"
                className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition cursor-pointer"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-950/60 border-t border-slate-800 py-24">
        <div className="max-w-7xl w-full mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to map ideas
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Realtime tools and AI layers crafted to help design components, API flows, and architecture layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 font-bold text-xl">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-3">Realtime Whiteboard</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Draw with pen, lines, rectangles, circles, arrows, and text. Watch changes sync instantly with socket events across all participants.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 font-bold text-xl">
                🔮
              </div>
              <h3 className="text-xl font-bold mb-3">AI Diagram Generator</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Describe your diagram, service API flows, or database schemas, and let Gemini render complete whiteboard shapes instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5 transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6 font-bold text-xl">
                📝
              </div>
              <h3 className="text-xl font-bold mb-3">AI Summaries</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Generate professional summaries in markdown format detailing components, relationships, logical structures, and suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Summary Section */}
      <section className="py-24 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
            💡 Document board context
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Generate clean documentation from board layouts instantly
          </h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Forget manual documentation. Clicking the "Summarize Board" button translates visual schemas and elements into detailed markdown specifications listing components, inputs, outputs, and suggestions.
          </p>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-indigo-400">✔</span> Comprehensive architecture walkthroughs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400">✔</span> Clean lists, tables, and headings structure
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400">✔</span> Snaps preserved in room history logs
            </li>
          </ul>
        </div>
        <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-md mx-auto w-full relative">
          <div className="absolute -top-3 left-6 bg-slate-900 border border-slate-700 text-xs text-slate-300 px-3 py-1 rounded-md font-mono">
            summary.md
          </div>
          <div className="space-y-4 mt-2">
            <div className="h-4 bg-indigo-500/20 rounded w-1/3" />
            <div className="h-3 bg-slate-800 rounded w-full" />
            <div className="h-3 bg-slate-800 rounded w-5/6" />
            <div className="h-3 bg-slate-800 rounded w-4/5" />
            <div className="border-t border-slate-800 pt-3 mt-4 space-y-2">
              <div className="h-4 bg-purple-500/20 rounded w-1/4" />
              <div className="h-3 bg-slate-800 rounded w-full" />
              <div className="h-3 bg-slate-800 rounded w-2/3" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Generate Section */}
      <section className="py-24 bg-slate-950/40 border-t border-slate-900">
        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-md mx-auto w-full">
            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <p className="text-xs text-slate-500 font-mono mb-2">Prompt Input:</p>
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-slate-300 text-xs font-mono mb-4 leading-relaxed">
              "Draw a minimal database schema showing User, Order, and Payment schemas connected by request flow arrows"
            </div>
            <div className="flex justify-end">
              <div className="h-8 bg-indigo-600 rounded-lg w-28 flex items-center justify-center font-bold text-xs">
                ✨ Generating...
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
              ⚡ Build instantly
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Describe and generate complex shapes dynamically
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Skip drawing database nodes or flowchart steps manually. Simply tell Gemini what diagram you want, and watch it structure circles, rectangles, lines, and directional arrows instantly.
            </p>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer"
              >
                Try AI Generate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-indigo-900 via-purple-900 to-slate-900 py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to design without limits?
          </h2>
          <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
            Join rooms instantly, brainstorm on a shared whiteboard canvas, and document everything using AI.
          </p>
          <Link
            to={user ? "/dashboard" : "/register"}
            className="bg-white text-indigo-900 hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold text-lg transition duration-200 shadow-xl cursor-pointer"
          >
            Create Your Board Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

