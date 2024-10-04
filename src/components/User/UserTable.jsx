import React, { useState } from "react";
import { Table, message, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UserUpdate from "./UserUpdate";
import UserViewDetail from "./UserViewDetail";

import apiService from "../../services/apiService";

const UserTable = (props) => {
  const {
    current,
    setCurrent,
    pageSize,
    setPageSize,
    total,
    dataUser,
    loadUser,
  } = props;
  const [IsModalUpdate, setIsModalUpdate] = useState(false);
  const [userDataUpdate, setUserDataUpdate] = useState(null);
  const [openView, setOpenView] = useState(false);
  const [dataViewDetail, setDataViewDetail] = useState(null);

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
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, record, index) => {
        return <>{index + 1}</>;
      },
    },
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
  const handleOnChangeTable = (pagination) => {
    setCurrent(pagination.current);
    console.log(current);
    setPageSize(pagination.pageSize);
    console.log(pageSize);
  };

  return (
    <div className=" m-4 justify-center max-w-full ">
      <Table
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {range[0]}-{range[1]}/ {total} rows
              </div>
            );
          },
        }}
        rowKey={"_id"}
        columns={columns}
        dataSource={dataUser}
        onChange={handleOnChangeTable}
      />
      <UserUpdate
        userDataUpdate={userDataUpdate}
        setUserDataUpdate={setUserDataUpdate}
        IsModalUpdate={IsModalUpdate}
        setIsModalUpdate={setIsModalUpdate}
      />
      <UserViewDetail
        loadUser={loadUser}
        dataViewDetail={dataViewDetail}
        setDataViewDetail={setDataViewDetail}
        openView={openView}
        setOpenView={setOpenView}
      />
    </div>
  );
};

export default UserTable;
