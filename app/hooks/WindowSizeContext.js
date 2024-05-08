"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Créer le contexte
const WindowSizeContext = createContext();

// Fournir le contexte
export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // Appeler handleResize immédiatement pour obtenir la taille initiale de la fenêtre

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
};

// Utiliser le contexte
export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);
  if (context === "undefined") {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
