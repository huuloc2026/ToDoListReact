import React, { useState } from "react";
import { Table, message, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UserUpdate from "./UserUpdate";
import UserViewDetail from "./UserViewDetail";

import apiService from "../../services/apiService";

const UserTable = (props) => {
  const { dataUser, loadUser } = props;
  const [IsModalUpdate, setIsModalUpdate] = useState(false);
  const [userDataUpdate, setUserDataUpdate] = useState(null);

  const [openView, setOpenView] = useState(false);
  const [dataViewDetail, setDataViewDetail] = useState(null);

  const [idDelete, setIdDelete] = useState(null);

  const cancel = (e) => {
    message.error("Click on No");
  };
  const handleDelete = async (ID) => {
    await apiService.DeleteUserAPI(ID);
    message.success("Successful delelete user");
    await loadUser();
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => (
        <a
          onClick={() => {
            setDataViewDetail(record);
            setOpenView(true);
          }}
        >
          {record._id}
        </a>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "Phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Email",
    },
    {
      title: "Action",

      key: "action",
      render: (_, record) => (
        <div className="flex gap-5 ">
          <EditOutlined
            onClick={() => {
              setUserDataUpdate(record);
              return setIsModalUpdate(true);
            }}
            className="text-xl cursor-pointer text-yellow-400 hover:text-yellow-500"
          />
          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record._id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined className="text-xl cursor-pointer text-red-400 hover:text-red-500" />{" "}
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="container m-4 max-w-full">
      <Table rowKey={"_id"} columns={columns} dataSource={dataUser} />
      <UserUpdate
        userDataUpdate={userDataUpdate}
        setUserDataUpdate={setUserDataUpdate}
        IsModalUpdate={IsModalUpdate}
        setIsModalUpdate={setIsModalUpdate}
      />
      <UserViewDetail
        dataViewDetail={dataViewDetail}
        setDataViewDetail={setDataViewDetail}
        openView={openView}
        setOpenView={setOpenView}
      />
    </div>
  );
};

export default UserTable;
