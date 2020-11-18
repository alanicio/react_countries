import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const lightTheme = {
    id: 0,
    color: "#111214",
    colorSecondary: "#7c7c7c",
    bgColor: "#fafafa",
    bgColorSecondary: "#ffffff",
    shadowBox: "0px 0px 5px 3px rgba(239, 239, 239, 1)",
  };

  const darkTheme = {
    id: 1,
    color: "white",
    colorSecondary: "white",
    bgColor: "#202d36",
    bgColorSecondary: "#2b3743",
    shadowBox: "0px 0px 5px 10px rgba(31,44,53,1)",
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
