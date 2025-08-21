// components/BubbleBackground.jsx
import React from "react";

const BubbleBackground = () => {
  return (
    <div className=" absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="bubble absolute bottom-[-150px] rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 40 + 10}px`,
            height: `${Math.random() * 40 + 10}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default BubbleBackground;