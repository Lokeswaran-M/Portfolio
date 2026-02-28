import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isPointer, setIsPointer] = useState(false);




  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Invisible hitbox for accurate clicking */}
      <div
        className="fixed top-0 left-0 z-50"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          pointerEvents: "auto",
          background: "transparent",
        }}
      />

      {/* Trail elements */}
      {trail.map((pos, index) => (
        <div
          key={pos.id}
          className="fixed pointer-events-none z-40 transition-all duration-100"
          style={{
            left: `${pos.x - 3}px`,
            top: `${pos.y - 3}px`,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${isPointer ? '#3b82f6' : '#00ffff'} 0%, ${isPointer ? '#3b82f660' : '#ff00ff60'} 70%)`,
            opacity: index / trail.length,
            transform: `scale(${0.3 + (index / trail.length) * 0.7})`,
          }}
        />
      ))}

      {/* Main cursor with flying animation */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-6 h-6 transition-all duration-300 ${isPointer ? 'scale-150' : 'scale-100'}`}
          style={{
            filter: 'drop-shadow(0 0 6px #ff00ff)',
          }}
        >
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#00ffff" />
            </linearGradient>
          </defs>
          <path
            d="M2 2l10 10h-4v4L2 2z"
            stroke="url(#arrowGradient)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#arrowGradient)"
          />
        </svg>
      </div>

      {/* Sparkle effect when hovering clickable elements */}
      {isPointer && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="animate-ping absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 opacity-20"></div>
          </div>
          <div className="flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-500 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCursor;