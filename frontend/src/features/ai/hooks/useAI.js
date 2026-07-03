import { useState, useContext } from "react";
import whiteBoardContext from "../../whiteboard/whiteboardContext.jsx";
import { RoomContext } from "../../room/room.context.js";
import aiContext from "../aiContext.jsx";

import {
    cleanupDiagram,
    generateSummary,
    getSummaryHistory,
    generateDiagram,
    getGenerationHistory,
} from "../services/ai.api.js";

export const useAi = () => {

    const [isLoading, setIsLoading] = useState(false);

    const wbContext = useContext(whiteBoardContext);
    const roomCtx = useContext(RoomContext);
    const aiCtx = useContext(aiContext);

    if (!wbContext) {
        throw new Error(
            "useAi must be used within WhiteBoardProvider"
        );
    }

    if (!roomCtx) {
        throw new Error(
            "useAi must be used within RoomProvider"
        );
    }

    const {
        elements,
        setElements,
        canvasRef,
    } = wbContext;

    const { room } = roomCtx;

    const roomId = room?._id || room?.roomId;

    // ==========================
    // AI Context
    // ==========================

    const history = aiCtx?.history || [];
    const setHistory =
        aiCtx?.setHistory || (() => { });

    const selectedSummary =
        aiCtx?.selectedSummary || null;

    const setSelectedSummary =
        aiCtx?.setSelectedSummary || (() => { });

    const isSummaryOpen =
        aiCtx?.isSummaryOpen || false;

    const setIsSummaryOpen =
        aiCtx?.setIsSummaryOpen || (() => { });

    const loading =
        aiCtx?.loading || false;

    const setLoading =
        aiCtx?.setLoading || (() => { });

    // AI Generation states
    const generationHistory = aiCtx?.generationHistory || [];
    const setGenerationHistory = aiCtx?.setGenerationHistory || (() => { });

    const selectedGeneration = aiCtx?.selectedGeneration || null;
    const setSelectedGeneration = aiCtx?.setSelectedGeneration || (() => { });

    const isGenerationOpen = aiCtx?.isGenerationOpen || false;
    const setIsGenerationOpen = aiCtx?.setIsGenerationOpen || (() => { });

    const generating = aiCtx?.generating || false;
    const setGenerating = aiCtx?.setGenerating || (() => { });

    const isPromptOpen = aiCtx?.isPromptOpen || false;
    const setIsPromptOpen = aiCtx?.setIsPromptOpen || (() => { });

    // ===================================================
    // AI CLEANUP
    // ===================================================

    const handleAiCleanup = async () => {

        if (!elements || elements.length === 0) return;

        setIsLoading(true);

        try {

            const data = await cleanupDiagram(elements);

            if (data?.elements) {
                setElements(data.elements);
            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to clean diagram"
            );

        } finally {

            setIsLoading(false);

        }

    };

    // ===================================================
    // GENERATE SUMMARY
    // ===================================================

    const handleGenerateSummary = async () => {

        if (!roomId) {
            alert("Room not found.");
            return false;
        }

        if (!elements || elements.length === 0) {
            alert(
                "No elements on whiteboard to summarize."
            );
            return false;
        }

        if (!canvasRef?.current) {
            alert("Canvas not found.");
            return false;
        }

        setLoading(true);

        try {

            const image =
                canvasRef.current.toDataURL("image/png");

            const data = await generateSummary(
                roomId,
                elements,
                image
            );

            await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5s delay for animation

            if (data.success) {

                setHistory(prev => [
                    data.snapshot,
                    ...prev,
                ]);

                setSelectedSummary(data.snapshot);

                setIsSummaryOpen(true);

                return true;
            }

            return false;

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to generate summary"
            );

            return false;

        } finally {

            setLoading(false);

        }

    };

    // ===================================================
    // GET SUMMARY HISTORY
    // ===================================================

    const handleGetSummaryHistory = async (
        currentRoomId
    ) => {

        if (!currentRoomId) return;

        setLoading(true);

        try {

            const data =
                await getSummaryHistory(currentRoomId);

            const allHistory = [
                ...(data.latestSummary
                    ? [data.latestSummary]
                    : []),
                ...(data.history || []),
            ];

            setHistory(allHistory);

            if (data.latestSummary) {
                setSelectedSummary(
                    data.latestSummary
                );
            }

        } catch (error) {

            console.error(
                "Failed to fetch AI history:",
                error
            );

        } finally {

            setLoading(false);

        }

    };

    // ===================================================
    // AI DIAGRAM GENERATION
    // ===================================================

    const handleGenerateDiagram = async (promptText) => {
        if (!roomId) {
            alert("Room not found.");
            return false;
        }

        if (!promptText || !promptText.trim()) {
            alert("Please enter a prompt.");
            return false;
        }

        if (!canvasRef?.current) {
            alert("Canvas not found.");
            return false;
        }

        setGenerating(true);

        try {
            // Phase 1: Request generated elements from Gemini (without uploading screenshot)
            const data1 = await generateDiagram(roomId, promptText);

            if (data1.success && data1.elements) {
                // Apply generated elements to whiteboard
                setElements(data1.elements);

                // Wait 300ms for React and RoughJS to finish rendering elements onto canvas
                await new Promise((resolve) => setTimeout(resolve, 300));

                // Capture newly rendered canvas image
                const image = canvasRef.current.toDataURL("image/png");

                // Phase 2: Send screenshot back to backend to upload and save generation document
                const data2 = await generateDiagram(roomId, promptText, image);

                if (data2.success) {
                    setGenerationHistory((prev) => [
                        data2.generation,
                        ...prev,
                    ]);
                    return true;
                }
            }

            return false;
        } catch (error) {
            console.error("AI Generation Error:", error);
            alert(
                error.response?.data?.message ||
                "Failed to generate diagram"
            );
            return false;
        } finally {
            setGenerating(false);
        }
    };

    const handleGetGenerationHistory = async (currentRoomId) => {
        if (!currentRoomId) return;

        setLoading(true);

        try {
            const data = await getGenerationHistory(currentRoomId);

            const allHistory = [
                ...(data.latestGeneration ? [data.latestGeneration] : []),
                ...(data.history || []),
            ];

            setGenerationHistory(allHistory);

            if (data.latestGeneration) {
                setSelectedGeneration(data.latestGeneration);
            }
        } catch (error) {
            console.error("Failed to fetch AI generation history:", error);
        } finally {
            setLoading(false);
        }
    };

    return {

        // Cleanup
        handleAiCleanup,
        isLoading,

        // Summary
        history,
        setHistory,

        selectedSummary,
        setSelectedSummary,

        isSummaryOpen,
        setIsSummaryOpen,

        loading,

        handleGenerateSummary,
        handleGetSummaryHistory,

        // Generation
        generationHistory,
        setGenerationHistory,
        selectedGeneration,
        setSelectedGeneration,
        isGenerationOpen,
        setIsGenerationOpen,
        generating,
        setGenerating,
        isPromptOpen,
        setIsPromptOpen,
        handleGenerateDiagram,
        handleGetGenerationHistory,

    };

};

export default useAi;