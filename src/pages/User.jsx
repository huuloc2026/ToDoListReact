import React, { useEffect, useState } from "react";
import UserTable from "../components/User/UserTable";
import UserForm from "../components/User/UserForm";
import apiService from "../services/apiService";

const User = () => {
  const [dataUser, setDataUser] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    loadUser();
  }, [current, pageSize]);
  const loadUser = async () => {
    const res = await apiService.GetAllUserAPI(current, pageSize);
    if (res.data) {
      setDataUser(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  return (
    <div>
      <UserForm loadUser={loadUser}></UserForm>
      <UserTable
        current={current}
        setCurrent={setCurrent}
        pageSize={pageSize}
        setPageSize={setPageSize}
        total={total}
        dataUser={dataUser}
        loadUser={loadUser}
      ></UserTable>
    </div>
  );
};

export default User;
