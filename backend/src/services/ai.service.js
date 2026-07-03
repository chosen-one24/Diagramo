import { GoogleGenAI } from "@google/genai";
import crypto from "crypto";
import { fixOverlaps } from "./collisionFixer.js";


export const cleanupDiagram = async (elements) => {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const prompt = `
            You are an expert software architecture diagram and collaborative whiteboard layout assistant.

            You will receive a JSON array representing elements drawn on a collaborative whiteboard.

            Each element is one of the following types:
            - rectangle
            - line
            - circle
            - arrow
            - text
            - pen

            Your task is to CLEAN UP the diagram while preserving its meaning.

            STRICT RULES:

            1. Preserve every element.
            2. Never remove elements.
            3. Never add new elements.
            4. Never change ids.
            5. Never change element types.
            6. Never modify text content.
            7. Never modify strokeColor.
            8. Never modify strokeWidth.
            9. Preserve the order of elements in the array.

            You may ONLY modify:

            - x
            - y
            - points

            Your goals are:

            - Align related rectangles vertically or horizontally.
            - Maintain equal spacing between shapes.
            - Straighten connector lines.
            - Position text close to the shapes they describe.
            - Avoid overlaps.
            - Keep enough whitespace.
            - Preserve logical relationships between connected elements.
            - Make the overall diagram clean and professional.

            Return ONLY a valid JSON array.

            Do NOT wrap the response in markdown.

            Do NOT explain anything.

            Return ONLY the updated JSON array.

            Whiteboard Elements:

            ${JSON.stringify(elements, null, 2)}
        `;

       

        const response = await ai.models.generateContent({
            // model: "gemini-2.0-flash",
            // model: "gemini-1.5-flash",
            model: "gemini-2.5-flash-lite",
            contents: prompt,
            //   contents: "Say only Hello",
            config: {
                responseMimeType: "application/json",
            },
        });

        console.log("========== GEMINI CLEANUP RESPONSE ==========");
        console.log(response.text);

        let cleanText = (response.text || "").trim();
        cleanText = cleanText.replace(/^```(json)?\s*/i, "").replace(/\s*```$/i, "").trim();

        return JSON.parse(cleanText);

    } catch (error) {
        console.error("Gemini Cleanup Error:", error);
        throw error;
    }
};

export const generateSummary = async (elements) => {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const simplifiedElements = elements.map((element) => ({
            type: element.type,
            text: element.text || "",
            x: element.x,
            y: element.y,
            points: element.points || [],
        }));

        const prompt = `
                You are an expert software architect and technical documentation assistant.

                You are given the drawing elements from a collaborative whiteboard.

                The board may contain
                * rectangles
                * circles
                * arrows
                * text
                * lines
                * pen strokes

                The coordinates are only for positioning.

                Focus on understanding the meaning of the board.

                Ignore decorative pen strokes whenever possible.

                Generate a concise markdown summary.

                The summary should contain

                # Overview
                Explain in 2-3 sentences what the board represents.

                # Components
                List all major components.

                # Relationships
                Explain how the components interact.

                # Possible Purpose
                Guess the purpose of the diagram.

                # Suggestions
                Suggest possible improvements if applicable.

                Return ONLY markdown.

                Whiteboard Elements:
                ${JSON.stringify(simplifiedElements, null, 2)}
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
        });

        
        console.log("****************************************************************************");
        console.log("========== GEMINI SUMMARY RESPONSE ==========");
        console.log(response.text);
        console.log("****************************************************************************");

        return response.text || "";

    } catch (error) {
        console.error("Gemini Summary Error:", error);
        throw error;
    }
};

export const generateDiagram = async (prompt) => {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

//         const systemPrompt = `
//     You are an expert whiteboard architect and software design assistant.
//     The user wants a diagram based on: "${prompt}"

//     Generate whiteboard elements using this STRICT GRID SYSTEM:
//     - The canvas is 1200x800. Divide it into a grid of columns spaced 220px apart (x = 80, 300, 520, 740, 960) and rows spaced 180px apart (y = 80, 260, 440, 620).
//     - Every rectangle/circle MUST be placed centered on one of these grid intersections. Do not use arbitrary coordinates.
//     - Rectangles are always 160px wide x 70px tall, centered on the grid point (so points are [gridX-80,gridY-35] and [gridX+80,gridY+35]).
//     - Circles have a radius of 35px, centered on the grid point.
//     - Arrange nodes top-to-bottom by logical flow: causes/sources in earlier rows, effects/results in later rows.
//     - Never place two nodes on the same grid intersection.

//     TEXT LABEL RULES (this is critical — overlapping text is a failure):
//     - Each node's label is a text element placed at the node's center (same x/y as the shape's grid point), never overlapping another label.
//     - Each arrow's label must be placed at the arrow's midpoint, offset 15px above the line.
//     - If two arrows connect to/from the same node, offset their labels horizontally by at least 60px from each other so they never sit in the same spot.
//     - Never place a text element within 50px of another text element.
//     - Keep every label under 3 words.

//     Each element must be one of:

//     1. Rectangle: { "id": "...", "type": "rectangle", "points": [{"x":x1,"y":y1},{"x":x2,"y":y2}], "strokeColor": "#1e293b", "strokeWidth": 2 }
//     2. Line: { "id": "...", "type": "line", "points": [{"x":x1,"y":y1},{"x":x2,"y":y2}], "strokeColor": "#475569", "strokeWidth": 2 }
//     3. Circle: { "id": "...", "type": "circle", "points": [{"x":centerX,"y":centerY},{"x":edgeX,"y":edgeY}], "strokeColor": "#10b981", "strokeWidth": 2 }
//     4. Arrow: { "id": "...", "type": "arrow", "points": [{"x":x1,"y":y1},{"x":x2,"y":y2}], "strokeColor": "#3b82f6", "strokeWidth": 2 }
//     5. Text: { "id": "...", "type": "text", "x": x, "y": y, "text": "Label", "strokeColor": "#0f172a", "strokeWidth": 2 }

//     STRICT RULES:
//     - Return ONLY a JSON array, no markdown, no explanation.
//     - Generate unique string IDs for each element.
//     - Before finalizing, mentally verify no two elements' bounding areas overlap.
// `;

    
        const systemPrompt = `
You are an expert whiteboard architect and software design assistant.

The user wants a diagram based on:
"${prompt}"

Your task is to generate a clean, readable whiteboard diagram suitable for a collaborative drawing application.

========================
LAYOUT RULES
========================

Canvas size: 1200 x 800.

Use a structured grid layout.

Columns:
80, 300, 520, 740, 960

Rows:
80, 260, 440, 620

Rules:

- Place every major node on a unique grid position.
- Never place two nodes on the same grid intersection.
- Keep at least 140px between neighbouring nodes.
- Arrange the diagram from top to bottom following logical flow.
- Keep the entire diagram centered on the canvas.
- Avoid unnecessary crossing arrows whenever possible.
- Prefer straight horizontal and vertical connections.
- Leave enough whitespace around every node.

========================
NODE RULES
========================

Rectangle
- Width: 160px
- Height: 70px

Circle
- Radius: 35px

Every entity must have its own shape.

========================
TEXT RULES
========================

This is VERY IMPORTANT.

- Every shape has exactly ONE text label.
- Label must be centered inside its shape.
- Maximum 3 words.
- Never overlap another text label.
- Never place text outside its own shape.
- Never place relationship text over another shape.

Relationship labels:

- Place relationship labels near the middle of arrows.
- Offset relationship labels 20px above the arrow.
- If multiple labels are close together, shift them horizontally by at least 70px.
- Maintain at least 50px spacing between every text element.

========================
COLOR RULES
========================

Use ONLY these colors.

Rectangle
strokeColor: "#2563eb"

Arrow
strokeColor: "#2563eb"

Line
strokeColor: "#2563eb"

Circle
strokeColor: "#10b981"

Text
strokeColor: "#000000"

Never generate any other color.

========================
ELEMENT TYPES
========================

Rectangle

{
"id":"...",
"type":"rectangle",
"points":[{"x":x1,"y":y1},{"x":x2,"y":y2}],
"strokeColor":"#2563eb",
"strokeWidth":2
}

Circle

{
"id":"...",
"type":"circle",
"points":[{"x":centerX,"y":centerY},{"x":edgeX,"y":edgeY}],
"strokeColor":"#10b981",
"strokeWidth":2
}

Line

{
"id":"...",
"type":"line",
"points":[{"x":x1,"y":y1},{"x":x2,"y":y2}],
"strokeColor":"#2563eb",
"strokeWidth":2
}

Arrow

{
"id":"...",
"type":"arrow",
"points":[{"x":x1,"y":y1},{"x":x2,"y":y2}],
"strokeColor":"#2563eb",
"strokeWidth":2
}

Text

{
"id":"...",
"type":"text",
"x":x,
"y":y,
"text":"Label",
"strokeColor":"#000000",
"strokeWidth":2
}

========================
STRICT REQUIREMENTS
========================

- Return ONLY a JSON array.
- No markdown.
- No explanations.
- No comments.
- Generate unique IDs for every element.
- Ensure the final diagram is readable.
- Verify no node overlaps another node.
- Verify no text overlaps another text.
- Verify every relationship is visually clear.
- Produce diagrams similar to professional whiteboard tools like Excalidraw or draw.io.
`;


const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: systemPrompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        console.log("========== GEMINI GENERATION RESPONSE ==========");
        console.log(response.text);

        let cleanText = (response.text || "").trim();
        cleanText = cleanText.replace(/^```(json)?\s*/i, "").replace(/\s*```$/i, "").trim();

        let elements = JSON.parse(cleanText);
        if (!Array.isArray(elements)) {
            throw new Error("Invalid response from Gemini: Expected an array of elements");
        }

        // Post-process to guarantee IDs
        elements = elements.map((el) => {
            if (!el.id) {
                el.id = crypto.randomUUID();
            }
            return el;
        });

        elements = fixOverlaps(elements);
        return elements;

    } catch (error) {
        console.error("Gemini Diagram Generation Error:", error);
        throw error;
    }
};

