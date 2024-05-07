"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Créer le contexte
const WindowSizeContext = createContext();

// Fournir le contexte
export const WindowSizeProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";
  const [windowNotMobile, setWindowNotMobile] = useState(
    isBrowser ? window.innerWidth > 768 : false
  );

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => {
        setWindowNotMobile(window.innerWidth > 768);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <WindowSizeContext.Provider value={windowNotMobile}>
      {children}
    </WindowSizeContext.Provider>
  );
};

// Utiliser le contexte
export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);
  if (context === undefined) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
