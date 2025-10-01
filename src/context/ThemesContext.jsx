import { createContext, useState, useContext, useEffect } from "react";
import { themes } from "../themes";

const ThemesContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedThemeIndex = parseInt(localStorage.getItem("themeIndex"), 10);
  const [themeIndex, setThemeIndex] = useState(
    Number.isNaN(storedThemeIndex) ? 0 : storedThemeIndex
  );

  useEffect(() => {
    localStorage.setItem("themeIndex", themeIndex);
  }, [themeIndex]);
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
