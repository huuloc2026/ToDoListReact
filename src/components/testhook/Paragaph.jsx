import React from "react";
import { ThemeContext } from "./Index";
import { useContext } from "react";
export const Paragaph = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`"border" ${theme}`}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, ipsa
      consectetur quisquam officiis numquam saepe eos quasi. Aliquid veniam
      voluptate non! Aliquid, repudiandae! Fugiat, consequuntur. Quis, optio!
      Repellat, veritatis aperiam!
    </div>
  );
};
