import { createContext, useState, useRef } from "react";

export const whiteBoardContext = createContext(null);

export const WhiteBoardProvider = ({ children }) => {
    const [tool, setTool] = useState("pen");
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [History,setHistory]=useState([]);

    const [editingText, setEditingText] =
    useState(null);
    const canvasRef = useRef(null);


    const [textValue, setTextValue] = useState("");

    return (
        <whiteBoardContext.Provider
            value={{
                tool,
                setTool,
                elements,
                setElements,
                selectedElement,
                setSelectedElement,
                strokeColor,
                setStrokeColor,
                strokeWidth,
                setStrokeWidth,
                History,
                setHistory,
                canvasRef,
                editingText,
                setEditingText,
                textValue,
                setTextValue
            }}
        >
            {children}
        </whiteBoardContext.Provider>
    );
};

export default whiteBoardContext;