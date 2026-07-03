import { createContext, useState } from "react";

const aiContext = createContext();

export const AIProvider = ({ children }) => {
    const [history, setHistory] = useState([]);
    const [selectedSummary, setSelectedSummary] = useState(null);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Generation states
    const [generationHistory, setGenerationHistory] = useState([]);
    const [selectedGeneration, setSelectedGeneration] = useState(null);
    const [isGenerationOpen, setIsGenerationOpen] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [isPromptOpen, setIsPromptOpen] = useState(false);

    return (
        <aiContext.Provider
            value={{
                history,
                setHistory,
                selectedSummary,
                setSelectedSummary,
                isSummaryOpen,
                setIsSummaryOpen,
                loading,
                setLoading,

                // Generation exports
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
            }}
        >
            {children}
        </aiContext.Provider>
    );
};

export default aiContext;
