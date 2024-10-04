import logo from "../assets/logo copy.png";
import { HomeOutlined, ProductOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const items = [
    {
      label: <Link to={"/"}>Logo</Link>,
      key: "logo",
    },
    {
      label: <Link to={"/"}>Home</Link>,
      key: "homepage",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/user"}>Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={"/Books"}>Books</Link>,
      key: "books",
      icon: <ProductOutlined />,
    },
  ];
  const [current, setCurrent] = useState("homepage");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      ;
    </div>
  );
};
