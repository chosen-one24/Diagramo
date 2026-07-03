// import { useContext, useEffect, useLayoutEffect, useRef } from "react";
// import rough from "roughjs";
// import whiteBoardContext from "../whiteboardContext.jsx";
// import { socket } from "../../../socket.js"

// import {useRoom} from "../../room/hooks/useRoom.js" 
// import useWhiteboard from "../hooks/useWhiteboard.js";

// const Canvas = () => {

//     const isDrawing = useRef(false);

//     const context = useContext(whiteBoardContext);

//     if (!context) {
//         throw new Error("Canvas must be used within a WhiteBoardProvider");
//     }

//     const { tool, elements = [], setElements, strokeColor, strokeWidth, canvasRef, editingText, setEditingText, textValue, setTextValue } = context;

//     const { room } = useRoom();
//     const { handleSaveWhiteboard } = useWhiteboard();
//     const roomId = room?._id || room?.roomId;
//     // useLayoutEffect runs synchronously after DOM mutations, making it ideal for canvas drawing

//     useEffect(() => {
//         if (!roomId) return;
//         const timer = setTimeout(() => {
//             handleSaveWhiteboard(roomId);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, [elements, roomId]);





//     useLayoutEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         // Clear the entire canvas before redrawing to ensure we don't paint duplicate frames
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Initialize RoughJS canvas on our canvas reference
//         const roughCanvas = rough.canvas(canvas);

//         // Redraw all  elements
//         (elements || []).forEach((element) => {

//             if (element.type === "pen" && element.points && element.points.length > 0) {
//                 // RoughJS linearPath requires points as an array of [x, y] coordinates
//                 const pointsArray = element.points.map((p) => [p.x, p.y]);

//                 const options = {
//                     stroke: element.strokeColor,
//                     strokeWidth: Number(element.strokeWidth),
//                     roughness: 0, // Keeps the pen drawing smooth and natural
//                 };

//                 if (pointsArray.length === 1) {
//                     // For a single point, draw a minute offset line to make the dot visible
//                     roughCanvas.linearPath(
//                         [pointsArray[0], [pointsArray[0][0] + 0.1, pointsArray[0][1] + 0.1]],
//                         options
//                     );
//                 } else {
//                     roughCanvas.linearPath(pointsArray, options);
//                 }
//             }

//             //line
//             if (element.type === "line") {
//                 if (element.points.length === 2) {
//                     const [start, end] = element.points;
//                     roughCanvas.line(start.x, start.y, end.x, end.y, {
//                         stroke: element.strokeColor,
//                         strokeWidth: Number(element.strokeWidth),
//                         roughness: 0,
//                     });
//                 }
//             }

//             if (element.type === "rectangle") {
//                 if (element.points.length === 2) {
//                     const [start, end] = element.points;
//                     const x = Math.min(start.x, end.x);
//                     const y = Math.min(start.y, end.y);
//                     const width = Math.abs(end.x - start.x);
//                     const height = Math.abs(end.y - start.y);
//                     roughCanvas.rectangle(x, y, width, height, {
//                         stroke: element.strokeColor,
//                         strokeWidth: Number(element.strokeWidth),
//                         roughness: 0,
//                     });
//                 }
//             }
//             if (element.type === "circle") {
//                 if (element.points.length === 2) {
//                     const [start, end] = element.points;
//                     const radius = Math.sqrt(
//                         Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
//                     );
//                     roughCanvas.circle(start.x, start.y, radius * 2, {
//                         stroke: element.strokeColor,
//                         strokeWidth: Number(element.strokeWidth),
//                         roughness: 0,
//                     });
//                 }
//             }

//             if (element.type === "arrow") {
//                 if (element.points.length === 2) {
//                     const [start, end] = element.points;

//                     // Draw main shaft line
//                     roughCanvas.line(start.x, start.y, end.x, end.y, {
//                         stroke: element.strokeColor,
//                         strokeWidth: Number(element.strokeWidth),
//                         roughness: 0,
//                     });

//                     // Draw arrowhead
//                     const angle = Math.atan2(end.y - start.y, end.x - start.x);
//                     const arrowLength = 15;
//                     const arrowAngle = Math.PI / 6;

//                     const x3 = end.x - arrowLength * Math.cos(angle - arrowAngle);
//                     const y3 = end.y - arrowLength * Math.sin(angle - arrowAngle);

//                     const x4 = end.x - arrowLength * Math.cos(angle + arrowAngle);
//                     const y4 = end.y - arrowLength * Math.sin(angle + arrowAngle);

//                     roughCanvas.line(end.x, end.y, x3, y3, {
//                         stroke: element.strokeColor,
//                         strokeWidth: Number(element.strokeWidth),
//                         roughness: 0,
//                     });

//                     roughCanvas.line(end.x, end.y, x4, y4, {
//                         stroke: element.strokeColor,
//                         strokeWidth: Number(element.strokeWidth),
//                         roughness: 0,
//                     });
//                 }
//             }

//             if (element.type === "text") {

//                 ctx.fillStyle =
//                     element.strokeColor;

//                 ctx.font =
//                     `${element.strokeWidth * 10}px Arial`;

//                 ctx.fillText(
//                     element.text,
//                     element.x,
//                     element.y
//                 );
//             }


//         });
//     }, [elements]);

//     useEffect(() => {

//         const handleReceiveElement = (element) => {
//             console.log("received element");

//             setElements((prev) => [
//                 ...(prev || []),
//                 element
//             ]);
//         };

//         socket.on(
//             "receive-element",
//             handleReceiveElement
//         );

//         return () => {
//             socket.off(
//                 "receive-element",
//                 handleReceiveElement
//             );
//         };

//     }, []);

//     const handleMouseDown = (e) => {


//         const { offsetX, offsetY } = e.nativeEvent;
//         isDrawing.current = true;


//         if (tool === "pen") {
//             // Initialize a new pen element in state
//             setElements((prev) => [
//                 ...(prev || []),
//                 {
//                     id: crypto.randomUUID(),
//                     type: "pen",
//                     points: [
//                         {
//                             x: offsetX,
//                             y: offsetY,
//                         },
//                     ],
//                     strokeColor,
//                     strokeWidth: Number(strokeWidth),
//                 },
//             ]);
//         }
//         //Line
//         else if (tool === "line") {
//             setElements((prev) => [
//                 ...(prev || []),
//                 {
//                     id: crypto.randomUUID(),
//                     type: "line",
//                     points: [
//                         {
//                             x: offsetX,
//                             y: offsetY,
//                         },
//                     ],
//                     strokeColor,
//                     strokeWidth: Number(strokeWidth),
//                 },
//             ]);
//         }
//         else if (tool === "rectangle") {
//             setElements((prev) => [
//                 ...(prev || []),
//                 {
//                     id: crypto.randomUUID(),
//                     type: "rectangle",
//                     points: [
//                         {
//                             x: offsetX,
//                             y: offsetY,
//                         },
//                     ],
//                     strokeColor,
//                     strokeWidth: Number(strokeWidth),
//                 },
//             ]);
//         }
//         else if (tool === "circle") {
//             setElements((prev) => [
//                 ...(prev || []),
//                 {
//                     id: crypto.randomUUID(),
//                     type: "circle",
//                     points: [
//                         {
//                             x: offsetX,
//                             y: offsetY,
//                         },
//                     ],
//                     strokeColor,
//                     strokeWidth: Number(strokeWidth),
//                 },
//             ]);
//         }
//         else if (tool === "arrow") {
//             setElements((prev) => [
//                 ...(prev || []),
//                 {
//                     id: crypto.randomUUID(),
//                     type: "arrow",
//                     points: [
//                         {
//                             x: offsetX,
//                             y: offsetY,
//                         },
//                     ],
//                     strokeColor,
//                     strokeWidth: Number(strokeWidth),
//                 },
//             ]);
//         }


//         if (tool === "text") {
//             const id = crypto.randomUUID();
//             setElements((prev) => [
//                 ...(prev || []),
//                 {
//                     id,
//                     type: "text",
//                     x: offsetX,
//                     y: offsetY,
//                     text: "",
//                     strokeColor,
//                     strokeWidth: Number(strokeWidth),
//                 },
//             ]);
//             setEditingText({
//                 x: offsetX,
//                 y: offsetY,
//                 id
//             });
//         }


//     };

//     const handleMouseMove = (e) => {
//         if (!isDrawing.current) return;

//         const { offsetX, offsetY } = e.nativeEvent;

//         // Immutably append the new point to the current active drawing element in state
//         setElements((prevElements) => {
//             const safeElements = prevElements || [];
//             if (tool === "pen") {
//                 if (safeElements.length === 0) return safeElements;

//                 const copy = [...safeElements];
//                 const lastElement = copy[copy.length - 1];

//                 // Create a new object for the last element with a new points array (avoid mutating state directly)
//                 const updatedLastElement = {
//                     ...lastElement,
//                     points: [...(lastElement.points || []), { x: offsetX, y: offsetY }],
//                 };

//                 copy[copy.length - 1] = updatedLastElement;
//                 return copy;
//             }
//             else if (tool === "line") {
//                 if (safeElements.length === 0) return safeElements;

//                 const copy = [...safeElements];
//                 const lastElement = copy[copy.length - 1];

//                 // Create a new object for the last element with a new points array (avoid mutating state directly)
//                 const updatedLastElement = {
//                     ...lastElement,
//                     points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
//                 };

//                 copy[copy.length - 1] = updatedLastElement;
//                 return copy;
//             }
//             else if (tool === "rectangle") {
//                 if (safeElements.length === 0) return safeElements;

//                 const copy = [...safeElements];
//                 const lastElement = copy[copy.length - 1];
//                 const updatedLastElement = {
//                     ...lastElement,
//                     points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
//                 };

//                 copy[copy.length - 1] = updatedLastElement;
//                 return copy;
//             }
//             else if (tool === "circle") {
//                 if (safeElements.length === 0) return safeElements;

//                 const copy = [...safeElements];
//                 const lastElement = copy[copy.length - 1];
//                 const updatedLastElement = {
//                     ...lastElement,
//                     points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
//                 };

//                 copy[copy.length - 1] = updatedLastElement;
//                 return copy;
//             }
//             else if (tool === "arrow") {
//                 if (safeElements.length === 0) return safeElements;

//                 const copy = [...safeElements];
//                 const lastElement = copy[copy.length - 1];
//                 const updatedLastElement = {
//                     ...lastElement,
//                     points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
//                 };

//                 copy[copy.length - 1] = updatedLastElement;
//                 return copy;
//             }
//             return safeElements;
//         });
//     };

//     const handleMouseUp = () => {
//         isDrawing.current = false;

//         if (tool !== "text") {
//             const lastElement = elements[elements.length - 1];

//             socket.emit(
//                 "draw-element",
//                 {
//                     roomId,
//                     element: lastElement
//                 }
//             );

//             console.log("roomId", roomId);
//             console.log("lastElement", lastElement);
//         }
//     };


//     const handleTextSubmit = (e) => {
//         if (e.key !== "Enter") return;

//         setElements((prev) =>
//             (prev || []).map((element) => {
//                 if (element.id === editingText.id) {
//                     return {
//                         ...element,
//                         text: textValue,
//                     };
//                 }
//                 return element;
//             })
//         );

//         const updatedElement = {
//             id: editingText.id,
//             type: "text",
//             x: editingText.x,
//             y: editingText.y,
//             text: textValue,
//             strokeColor,
//             strokeWidth: Number(strokeWidth)
//         };

//         socket.emit("draw-element", {
//             roomId,
//             element: updatedElement
//         });

//         setEditingText(null);
//         setTextValue("");
//         console.log(elements);
//     };

//     return (

//         <div className="relative">
//             <canvas
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 ref={canvasRef}
//                 width={1200}
//                 height={700}
//                 className="border rounded-xl bg-white shadow-sm"
//             />

//             {editingText && (
//                 <input
//                     autoFocus
//                     type="text"
//                     value={textValue}
//                     onChange={(e) => setTextValue(e.target.value)}
//                     onKeyDown={handleTextSubmit}
//                     className="absolute border px-2 py-1 bg-white"
//                     style={{
//                         left: editingText.x,
//                         top: editingText.y,
//                     }}
//                 />
//             )}

//         </div>




//     );
// };

// export default Canvas;

import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import rough from "roughjs";
import whiteBoardContext from "../whiteboardContext.jsx";
import { socket } from "../../../socket.js"

import { useRoom } from "../../room/hooks/useRoom.js"
import useWhiteboard from "../hooks/useWhiteboard.js";
import { useTheme } from "../../../components/layout/UseTheme.js";

const Canvas = () => {

    const isDrawing = useRef(false);

    const context = useContext(whiteBoardContext);

    if (!context) {
        throw new Error("Canvas must be used within a WhiteBoardProvider");
    }

    const { tool, setTool, elements = [], setElements, strokeColor, strokeWidth, canvasRef, editingText, setEditingText, textValue, setTextValue } = context;

    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    const getDisplayColor = (color, isDark) => {
        if (isDark) {
            if (color === "#1e1c18" || color === "#000000") {
                return "#ffffff";
            }
        } else {
            if (color === "#ffffff") {
                return "#1e1c18";
            }
        }
        return color;
    };

    const { room } = useRoom();
    const { handleSaveWhiteboard } = useWhiteboard();
    const roomId = room?._id || room?.roomId;
    // useLayoutEffect runs synchronously after DOM mutations, making it ideal for canvas drawing

    useEffect(() => {
        if (!roomId) return;
        const timer = setTimeout(() => {
            handleSaveWhiteboard(roomId);
        }, 2000);
        return () => clearTimeout(timer);
    }, [elements, roomId]);





    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        // Clear the entire canvas before redrawing to ensure we don't paint duplicate frames
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Initialize RoughJS canvas on our canvas reference
        const roughCanvas = rough.canvas(canvas);

        // Redraw all  elements
        (elements || []).forEach((element) => {
            const displayColor = getDisplayColor(element.strokeColor, isDark);

            if (element.type === "pen" && element.points && element.points.length > 0) {
                // RoughJS linearPath requires points as an array of [x, y] coordinates
                const pointsArray = element.points.map((p) => [p.x, p.y]);

                const options = {
                    stroke: displayColor,
                    strokeWidth: Number(element.strokeWidth),
                    roughness: 0, // Keeps the pen drawing smooth and natural
                };

                if (pointsArray.length === 1) {
                    // For a single point, draw a minute offset line to make the dot visible
                    roughCanvas.linearPath(
                        [pointsArray[0], [pointsArray[0][0] + 0.1, pointsArray[0][1] + 0.1]],
                        options
                    );
                } else {
                    roughCanvas.linearPath(pointsArray, options);
                }
            }

            //line
            if (element.type === "line") {
                if (element.points.length === 2) {
                    const [start, end] = element.points;
                    roughCanvas.line(start.x, start.y, end.x, end.y, {
                        stroke: displayColor,
                        strokeWidth: Number(element.strokeWidth),
                        roughness: 0,
                    });
                }
            }

            if (element.type === "rectangle") {
                if (element.points.length === 2) {
                    const [start, end] = element.points;
                    const x = Math.min(start.x, end.x);
                    const y = Math.min(start.y, end.y);
                    const width = Math.abs(end.x - start.x);
                    const height = Math.abs(end.y - start.y);
                    roughCanvas.rectangle(x, y, width, height, {
                        stroke: displayColor,
                        strokeWidth: Number(element.strokeWidth),
                        roughness: 0,
                    });
                }
            }
            if (element.type === "circle") {
                if (element.points.length === 2) {
                    const [start, end] = element.points;
                    const radius = Math.sqrt(
                        Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
                    );
                    roughCanvas.circle(start.x, start.y, radius * 2, {
                        stroke: displayColor,
                        strokeWidth: Number(element.strokeWidth),
                        roughness: 0,
                    });
                }
            }

            if (element.type === "arrow") {
                if (element.points.length === 2) {
                    const [start, end] = element.points;

                    // Draw main shaft line
                    roughCanvas.line(start.x, start.y, end.x, end.y, {
                        stroke: displayColor,
                        strokeWidth: Number(element.strokeWidth),
                        roughness: 0,
                    });

                    // Draw arrowhead
                    const angle = Math.atan2(end.y - start.y, end.x - start.x);
                    const arrowLength = 15;
                    const arrowAngle = Math.PI / 6;

                    const x3 = end.x - arrowLength * Math.cos(angle - arrowAngle);
                    const y3 = end.y - arrowLength * Math.sin(angle - arrowAngle);

                    const x4 = end.x - arrowLength * Math.cos(angle + arrowAngle);
                    const y4 = end.y - arrowLength * Math.sin(angle + arrowAngle);

                    roughCanvas.line(end.x, end.y, x3, y3, {
                        stroke: displayColor,
                        strokeWidth: Number(element.strokeWidth),
                        roughness: 0,
                    });

                    roughCanvas.line(end.x, end.y, x4, y4, {
                        stroke: displayColor,
                        strokeWidth: Number(element.strokeWidth),
                        roughness: 0,
                    });
                }
            }

            if (element.type === "text") {
                ctx.fillStyle = isDark ? "#ffffff" : "#000000";
                ctx.font = `${element.strokeWidth * 10}px Arial`;
                ctx.fillText(
                    element.text,
                    element.x,
                    element.y
                );
            }
        });
    }, [elements, isDark]);

    useEffect(() => {

        const handleReceiveElement = (element) => {
            console.log("received element");

            setElements((prev) => [
                ...(prev || []),
                element
            ]);
        };

        socket.on(
            "receive-element",
            handleReceiveElement
        );

        return () => {
            socket.off(
                "receive-element",
                handleReceiveElement
            );
        };

    }, []);

    const handleMouseDown = (e) => {
        if (editingText) {
            submitText(textValue);
            return;
        }

        const { offsetX, offsetY } = e.nativeEvent;
        isDrawing.current = true;


        if (tool === "pen") {
            // Initialize a new pen element in state
            setElements((prev) => [
                ...(prev || []),
                {
                    id: crypto.randomUUID(),
                    type: "pen",
                    points: [
                        {
                            x: offsetX,
                            y: offsetY,
                        },
                    ],
                    strokeColor,
                    strokeWidth: Number(strokeWidth),
                },
            ]);
        }
        //Line
        else if (tool === "line") {
            setElements((prev) => [
                ...(prev || []),
                {
                    id: crypto.randomUUID(),
                    type: "line",
                    points: [
                        {
                            x: offsetX,
                            y: offsetY,
                        },
                    ],
                    strokeColor,
                    strokeWidth: Number(strokeWidth),
                },
            ]);
        }
        else if (tool === "rectangle") {
            setElements((prev) => [
                ...(prev || []),
                {
                    id: crypto.randomUUID(),
                    type: "rectangle",
                    points: [
                        {
                            x: offsetX,
                            y: offsetY,
                        },
                    ],
                    strokeColor,
                    strokeWidth: Number(strokeWidth),
                },
            ]);
        }
        else if (tool === "circle") {
            setElements((prev) => [
                ...(prev || []),
                {
                    id: crypto.randomUUID(),
                    type: "circle",
                    points: [
                        {
                            x: offsetX,
                            y: offsetY,
                        },
                    ],
                    strokeColor,
                    strokeWidth: Number(strokeWidth),
                },
            ]);
        }
        else if (tool === "arrow") {
            setElements((prev) => [
                ...(prev || []),
                {
                    id: crypto.randomUUID(),
                    type: "arrow",
                    points: [
                        {
                            x: offsetX,
                            y: offsetY,
                        },
                    ],
                    strokeColor,
                    strokeWidth: Number(strokeWidth),
                },
            ]);
        }


        if (tool === "text") {
            const id = crypto.randomUUID();
            setElements((prev) => [
                ...(prev || []),
                {
                    id,
                    type: "text",
                    x: offsetX,
                    y: offsetY,
                    text: "",
                    strokeColor,
                    strokeWidth: Number(strokeWidth),
                },
            ]);
            setEditingText({
                x: offsetX,
                y: offsetY,
                id
            });
        }


    };

    const handleMouseMove = (e) => {
        if (!isDrawing.current) return;

        const { offsetX, offsetY } = e.nativeEvent;

        // Immutably append the new point to the current active drawing element in state
        setElements((prevElements) => {
            const safeElements = prevElements || [];
            if (tool === "pen") {
                if (safeElements.length === 0) return safeElements;

                const copy = [...safeElements];
                const lastElement = copy[copy.length - 1];

                // Create a new object for the last element with a new points array (avoid mutating state directly)
                const updatedLastElement = {
                    ...lastElement,
                    points: [...(lastElement.points || []), { x: offsetX, y: offsetY }],
                };

                copy[copy.length - 1] = updatedLastElement;
                return copy;
            }
            else if (tool === "line") {
                if (safeElements.length === 0) return safeElements;

                const copy = [...safeElements];
                const lastElement = copy[copy.length - 1];

                // Create a new object for the last element with a new points array (avoid mutating state directly)
                const updatedLastElement = {
                    ...lastElement,
                    points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
                };

                copy[copy.length - 1] = updatedLastElement;
                return copy;
            }
            else if (tool === "rectangle") {
                if (safeElements.length === 0) return safeElements;

                const copy = [...safeElements];
                const lastElement = copy[copy.length - 1];
                const updatedLastElement = {
                    ...lastElement,
                    points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
                };

                copy[copy.length - 1] = updatedLastElement;
                return copy;
            }
            else if (tool === "circle") {
                if (safeElements.length === 0) return safeElements;

                const copy = [...safeElements];
                const lastElement = copy[copy.length - 1];
                const updatedLastElement = {
                    ...lastElement,
                    points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
                };

                copy[copy.length - 1] = updatedLastElement;
                return copy;
            }
            else if (tool === "arrow") {
                if (safeElements.length === 0) return safeElements;

                const copy = [...safeElements];
                const lastElement = copy[copy.length - 1];
                const updatedLastElement = {
                    ...lastElement,
                    points: [(lastElement.points || [])[0], { x: offsetX, y: offsetY }],
                };

                copy[copy.length - 1] = updatedLastElement;
                return copy;
            }
            return safeElements;
        });
    };

    const handleMouseUp = () => {
        isDrawing.current = false;

        if (tool !== "text") {
            const lastElement = elements[elements.length - 1];

            socket.emit(
                "draw-element",
                {
                    roomId,
                    element: lastElement
                }
            );

            console.log("roomId", roomId);
            console.log("lastElement", lastElement);
        }
    };


    const submitText = (valueToSubmit) => {
        if (!editingText) return;

        // If the submitted text is empty, remove the empty element so we don't pollute elements state
        if (!valueToSubmit || !valueToSubmit.trim()) {
            setElements((prev) => (prev || []).filter((el) => el.id !== editingText.id));
            setEditingText(null);
            setTextValue("");
            return;
        }

        setElements((prev) =>
            (prev || []).map((element) => {
                if (element.id === editingText.id) {
                    return {
                        ...element,
                        text: valueToSubmit,
                    };
                }
                return element;
            })
        );

        const updatedElement = {
            id: editingText.id,
            type: "text",
            x: editingText.x,
            y: editingText.y,
            text: valueToSubmit,
            strokeColor,
            strokeWidth: Number(strokeWidth)
        };

        socket.emit("draw-element", {
            roomId,
            element: updatedElement
        });

        setEditingText(null);
        setTextValue("");
    };

    const handleTextSubmit = (e) => {
        if (e.key === "Enter") {
            submitText(textValue);
        } else if (e.key === "Escape") {
            // Cancel and remove the text element
            setElements((prev) => (prev || []).filter((el) => el.id !== editingText.id));
            setEditingText(null);
            setTextValue("");
        }
    };

    const handleDoubleClick = (e) => {
        const { offsetX, offsetY } = e.nativeEvent;

        if (editingText) {
            submitText(textValue);
        }

        setTool("text");

        const id = crypto.randomUUID();
        setElements((prev) => [
            ...(prev || []),
            {
                id,
                type: "text",
                x: offsetX,
                y: offsetY,
                text: "",
                strokeColor,
                strokeWidth: Number(strokeWidth),
            },
        ]);
        setEditingText({
            x: offsetX,
            y: offsetY,
            id
        });
        setTextValue("");
    };

    return (

        <div className="relative flex items-center justify-center w-full h-full">
            <canvas
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onDoubleClick={handleDoubleClick}
                ref={canvasRef}
                width={1200}
                height={700}
                className="rounded-2xl bg-white dark:bg-ink-950 shadow-card border border-ink-200 dark:border-ink-800"
            />

            {editingText && (
                <input
                    autoFocus
                    type="text"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    onKeyDown={handleTextSubmit}
                    onBlur={() => submitText(textValue)}
                    className="absolute bg-transparent text-ink-900 dark:text-white border-none outline-none focus:outline-none p-0 m-0 caret-current select-text focus:ring-0 focus:border-none focus:shadow-none"
                    style={{
                        left: editingText.x,
                        top: editingText.y - 12,
                        font: `${strokeWidth * 10}px Arial`,
                        color: getDisplayColor(strokeColor, isDark),
                        lineHeight: "1",
                        width: `${Math.max(120, textValue.length * strokeWidth * 6)}px`,
                    }}
                />
            )}

        </div>




    );
};

export default Canvas;