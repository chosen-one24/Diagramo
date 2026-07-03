// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar.jsx";
// import Footer from "./Footer.jsx";
// import Protected from "../../features/auth/components/Protected.jsx";

// const DashboardLayout = () => {
//   return (
//     <Protected>
//       <div className="flex flex-col min-h-screen bg-gray-50">
//         <Navbar />
//         <main className="grow max-w-7xl w-full mx-auto px-6 py-8">
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </Protected>
//   );
// };

// export default DashboardLayout;


import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Protected from "../../features/auth/components/Protected.jsx";

const DashboardLayout = () => {
  return (
    <Protected>
      <div className="flex flex-col min-h-screen bg-ink-50 dark:bg-ink-950">
        <Navbar />
        <main className="grow max-w-7xl w-full mx-auto px-6 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Protected>
  );
};

export default DashboardLayout;

