// CursorLight.js
"use client";

import { useEffect, useState } from "react";

export default function CursorLight({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spotlightStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 90%)`,
    zIndex: 1000,
  };

  return <div style={spotlightStyle}>{children}</div>;
}
