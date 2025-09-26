import React, { createContext, useState, useContext } from "react";
import { themes } from "../themes";

const ThemesContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  const value = {
    theme: themes[themeIndex],
    themeIndex,
    setThemeIndex,
    themes,
  };

  return (
    <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
  );
};

// Custom hook for easy access
export const useThemes = () => useContext(ThemesContext);
