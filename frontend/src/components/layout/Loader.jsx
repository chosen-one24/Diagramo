import React from "react";

/**
 * Diagramo brand loader — traces the logo's own path:
 * arrow → top curve → arrow → bottom curve → arrow, looping.
 *
 * Usage:
 *   <Loader size={18} color="white" />          // inside a colored button
 *   <Loader size={20} />                        // inline, uses gradient
 *   <Loader size={64} />                        // full-page / large state
 */
const Loader = ({ size = 20, color, className = "" }) => {
  const strokeId = React.useId();
  const stroke = color ? color : `url(#${strokeId})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      className={className}
      role="status"
      aria-label="Loading"
    >
      {!color && (
        <defs>
          <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>
        </defs>
      )}

      {/* spine */}
      <line
        x1="95" y1="40" x2="95" y2="220"
        stroke={stroke} strokeWidth="16" strokeLinecap="round" opacity="0.35"
      />

      {/* top node */}
      <circle cx="95" cy="40" r="16" fill="none" stroke={stroke} strokeWidth="16" />
      {/* bottom node */}
      <circle cx="95" cy="220" r="16" fill="none" stroke={stroke} strokeWidth="16" />

      {/* top curve: node -> arrow */}
      <path
        className="diagramo-loader-top"
        d="M95 40 C 175 40 210 90 210 130"
        fill="none" stroke={stroke} strokeWidth="16" strokeLinecap="round"
      />
      <path
        className="diagramo-loader-top"
        d="M95 90 L145 90 C 175 90 195 108 205 128"
        fill="none" stroke={stroke} strokeWidth="16" strokeLinecap="round"
      />

      {/* bottom curve: node -> arrow */}
      <path
        className="diagramo-loader-bottom"
        d="M95 220 C 175 220 210 170 210 130"
        fill="none" stroke={stroke} strokeWidth="16" strokeLinecap="round"
      />
      <path
        className="diagramo-loader-bottom"
        d="M95 170 L145 170 C 175 170 195 152 205 132"
        fill="none" stroke={stroke} strokeWidth="16" strokeLinecap="round"
      />

      {/* shared arrowhead */}
      <path
        className="diagramo-loader-arrow"
        d="M195 105 L235 130 L195 155"
        fill="none" stroke={stroke} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

export default Loader;