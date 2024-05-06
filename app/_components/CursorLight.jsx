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
    position: "absolute",
    background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.10), transparent 80%)`,
    zIndex: 40,
  };

  return <div style={spotlightStyle}>{children}</div>;
}
