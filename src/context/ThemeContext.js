import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const lightTheme = {
    id: 0,
    color: "#111214",
    colorSecondary: "#7c7c7c",
    bgColor: "#fafafa",
    bgColor2: "#ffffff",
  };

  const darkTheme = {
    id: 1,
    color: "white",
    colorSecondary: "white",
    bgColor: "#202d36",
    bgColor2: "#2b3743",
  };

  const [theme, setTheme] = useState(lightTheme);
  const { id } = theme;

  const switchTheme = () => {
    if (id === 0) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
