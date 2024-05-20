"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Créez un Contexte pour le token et l'userId
const TokenContext = createContext({ token: null, userId: null });

// Utilisez un Hook pour accéder au Contexte facilement
export function useToken() {
  return useContext(TokenContext);
}

// Créez un Provider pour le Contexte qui gère le token et l'userId
export function TokenProvider({ children }) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  // Charger le token et l'userId du localStorage lors du montage du composant
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUserId(storedUserId);
    }
  }, []);

  // Fonction pour se connecter et définir le token et l'userId
  const login = (newToken, newUserId) => {
    setToken(newToken);
    setUserId(newUserId);
    localStorage.setItem("token", newToken); // Stockez le token dans localStorage
    localStorage.setItem("userId", newUserId); // Stockez l'userId dans localStorage
  };

  // Fonction pour se déconnecter et supprimer le token et l'userId
  const logout = () => {
    setToken("");
    setUserId("");
    localStorage.removeItem("token"); // Supprimez le token de localStorage
    localStorage.removeItem("userId"); // Supprimez l'userId de localStorage
  };

  return (
    <TokenContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </TokenContext.Provider>
  );
}
