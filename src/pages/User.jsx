import React, { useEffect, useState } from "react";
import UserTable from "../components/User/UserTable";
import UserForm from "../components/User/UserForm";
import apiService from "../services/apiService";

const User = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await apiService.GetAllUserAPI();
    setDataUser(res.data);
  };
  return (
    <div>
      <UserForm loadUser={loadUser}></UserForm>
      <UserTable dataUser={dataUser} loadUser={loadUser}></UserTable>
    </div>
  );
};

export default User;
