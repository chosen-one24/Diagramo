import React from 'react';

export const DiagramoLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon */}
      <svg
        className="w-8 h-8 text-blue-600 dark:text-blue-500"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Canvas Glow / AI Aura */}
        <circle cx="16" cy="16" r="14" className="fill-blue-50/50 dark:fill-blue-950/30" />
        
        {/* Whiteboard / Summary Lines (Background layer) */}
        <path 
          d="M12 21H20M12 25H17" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          className="opacity-40"
        />

        {/* Diagram Nodes & Connections */}
        <path
          d="M9 11L15 7L21 11M9 11V17L15 21M9 11L15 15M21 11V17L15 21M21 11L15 15M15 7V15M15 15V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="text-slate-400 dark:text-slate-500"
        />
        
        {/* Active Diagram Nodes */}
        <circle cx="15" cy="7" r="1.5" className="fill-blue-600 dark:fill-blue-400" />
        <circle cx="9" cy="11" r="1.5" className="fill-slate-600 dark:fill-slate-400" />
        <circle cx="21" cy="11" r="1.5" className="fill-slate-600 dark:fill-slate-400" />
        
        {/* The AI Spark Core Node (Bottom Center) */}
        <g className="text-purple-600 dark:text-purple-400">
          <circle cx="15" cy="15" r="2" fill="currentColor" />
          {/* Sparkle flares */}
          <path d="M15 11V19M11 15H19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </g>
      </svg>

      {/* Brand Text */}
      <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-950 to-purple-900 bg-clip-text text-transparent dark:from-white dark:via-blue-100 dark:to-purple-200">
        diagramo
      </span>
    </div>
  );
};