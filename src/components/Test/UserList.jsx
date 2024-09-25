import React from "react";

const UserList = () => {
  const navbarItems = [
    { title: "Market", classProps: "text-red-600" },
    { title: "Exchange", classProps: "text-blue-600" },
    { title: "Tutorials", classProps: "text-green-600" },
    { title: "Wallets", classProps: "text-yellow-600" },
  ];
  const NavbarItem = ({ title, classProps }) => {
    return (
      <li className={`mx-5 uppercase cursor-pointer ${classProps}`}>{title}</li>
    );
  };
  return (
    <div>
      {navbarItems.map((item, index) => (
        <NavbarItem
          key={item + index}
          title={item.title}
          classProps={item.classProps}
        />
      ))}
    </div>
  );
};

export default UserList;
