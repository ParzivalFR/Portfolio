// ThemeContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      setChecked(localTheme === "dark");
      document.body.classList.toggle("dark", localTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme = systemPrefersDark ? "dark" : "light";
      setTheme(systemTheme);
      setChecked(systemTheme === "dark");
      document.body.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark");
    setChecked((prevChecked) => !prevChecked); // Utilisation de la forme de fonction pour mettre à jour l'état checked
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, checked }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
