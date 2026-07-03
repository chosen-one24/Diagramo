import { useContext } from "react";
import whiteBoardContext from "../whiteboardContext.jsx";
import {saveWhiteboard,getWhiteboard} from "../services/whiteboard.api.js";

export const useWhiteboard = () => {
    const context = useContext(whiteBoardContext);

    if (!context) {
        throw new Error(
            "useWhiteboard must be used within WhiteBoardProvider"
        );
    }

    const { elements,setElements} = context;

    const handleSaveWhiteboard = async (roomId) => {
        console.log("Saving roomId:", roomId);
        try { 
            await saveWhiteboard(roomId,elements);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const handleGetWhiteboard = async (roomId) => {
        try {
            const data = await getWhiteboard(roomId);
            setElements(data.whiteboard.elements);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    };

    return { handleSaveWhiteboard,handleGetWhiteboard};

};

export default useWhiteboard;