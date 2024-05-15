// CursorLight.js
"use client";

import { useEffect, useState } from "react";

export default function CursorLight({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.10), transparent 80%)`,
    zIndex: 40,
    minWidth: "100svw",
    minHeight: "100svh",
  };

  return <div style={spotlightStyle}>{children}</div>;
}
