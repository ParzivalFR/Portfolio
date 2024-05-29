// ThemeContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialisez le thème à partir de localStorage ou utilisez le thème système par défaut
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });
  const [checked, setChecked] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Synchronisez l'état du thème avec le localStorage et appliquez la classe au body
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      setChecked(newTheme === "dark");
      document.body.classList.toggle("dark", newTheme === "dark");
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setChecked(newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, checked }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
