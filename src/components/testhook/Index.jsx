import React, { createContext, useState } from "react";
import { Content } from "./Content";
import { Button } from "antd";
import "./index.css";

export const ThemeContext = createContext();

export const Index = () => {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex m-2 flex-row">
        <Button type="primary" onClick={() => handleClick()}>
          Toggle
        </Button>
        <Content></Content>
      </div>
    </ThemeContext.Provider>
  );
};
