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
import { Menu, message } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/Auth";
import apiService from "../services/apiService";

export const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const result = await apiService.LogoutUserAPI();
    if (result.data) {
      //clear data
      localStorage.removeItem("access_token");
      setUser({
        emai: "",
        phone: "",
        password: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      //redirect
      message.success("Log out!!!");
      navigate("/");
    }
  };
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
                label: <span onClick={() => handleLogOut()}>Log out</span>,
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
