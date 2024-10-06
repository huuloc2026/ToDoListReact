import logo from "../assets/logo copy.png";
import {
  AliwangwangOutlined,
  HomeOutlined,
  LoginOutlined,
  ProductOutlined,
  ScanOutlined,
  SmileTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/context/Auth";

export const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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

    ...(!user.id
      ? [
          {
            label: <Link to={"/Register"}>Register</Link>,
            key: "register",
            icon: <ScanOutlined />,
          },
          {
            label: <Link to={"/Login"}>Login</Link>,
            key: "login",
            icon: <AliwangwangOutlined />,
          },
        ]
      : []),
    ,
    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "welcome",
            icon: <SmileTwoTone />,
            children: [
              {
                label: "Log out",
                key: "logout",
                icon: <LoginOutlined />,
              },
            ],
          },
        ]
      : []),
  ];
  const [current, setCurrent] = useState("homepage");
  const onClick = (e) => {
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
