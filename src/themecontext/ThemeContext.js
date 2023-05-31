import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    // Store the current theme mode in local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  function getInitialTheme() {
    // Check if theme mode is stored in local storage
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeConfig = {
    light: {
      backgroundColor: "white",
    },
    dark: {
      backgroundColor: "rgba(0, 0, 21, 1)",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};
