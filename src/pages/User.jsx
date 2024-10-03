import React from "react";
import UserTable from "../components/User/UserTable";
import UserForm from "../components/User/UserForm";

const User = () => {
  return (
    <div>
      <UserForm></UserForm>
      <UserTable></UserTable>
    </div>
  );
};

export default User;
