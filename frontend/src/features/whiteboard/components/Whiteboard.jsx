// import Canvas from "./Canvas.jsx";

// const Whiteboard = () => {
//   return (
//     <div className="h-full w-full">
//       <Canvas />
//     </div>
//   );
// };

// export default Whiteboard;


import Canvas from "./Canvas.jsx";

const Whiteboard = () => {
  return (
    <div className="h-full w-full dot-grid bg-canvas dark:bg-canvas-dark overflow-auto flex items-center justify-center p-8">
      <Canvas />
    </div>
  );
};

export default Whiteboard;

