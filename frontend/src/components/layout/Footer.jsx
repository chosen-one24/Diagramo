// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-xs mt-auto">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//         <p>&copy; {new Date().getFullYear()} BlackBoard. All rights reserved.</p>
//         <div className="flex gap-4">
//           <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
//           <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
//           <a href="#" className="hover:text-slate-300 transition">Contact Support</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Diagramo. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

