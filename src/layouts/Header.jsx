import React from "react";
import logo from "../assets/logo copy.png";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header>
        <div className="flex items-center justify-center gap-10 w-full">
          <NavLink to="./">
            <img src={logo} className="w-[50px] h-[50px]" alt="logo" />
          </NavLink>
          <NavLink
            to="./"
            className="focus:outline-1 focus:bg-green-500 p-1   "
          >
            Homepage
          </NavLink>
          <NavLink
            to="./User"
            className="focus:outline-1 focus:bg-green-500 p-1   "
          >
            User
          </NavLink>
          <NavLink
            to="./Books"
            className="focus:outline-1 focus:bg-green-500 p-1  "
          >
            Books
          </NavLink>
          <button className="border">
            <NavLink to="./Login">Login</NavLink>
          </button>
          <button className="border">
            <NavLink to="./register">Register</NavLink>
          </button>
        </div>
      </header>
    </div>
  );
};
