import React, { useEffect, useState } from "react";
import { Modal, Input, notification } from "antd";
import apiService from "/src/services/apiService.js";

const UserUpdate = (props) => {
  const {
    userDataUpdate,
    setUserDataUpdate,
    IsModalUpdate,
    setIsModalUpdate,
    loadUser,
  } = props;
  const [userID, setUserID] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (userDataUpdate) {
      setUserID(userDataUpdate._id);
      setFullName(userDataUpdate.fullName);
      setPhone(userDataUpdate.phone);
      setUserDataUpdate(null);
    }
  }, [userDataUpdate]);
  const handleUpdateBtn = async () => {
    const res = await apiService.updateUserAPI(userID, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update User",
        description: "Success update new user!",
      });
      handleClearModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error User",
        description: JSON.stringify(res.message),
      });
    }
  };

  const handleClearModal = () => {
    setIsModalUpdate(false);
    setUserID("");
    setFullName("");
    setPhone("");
  };

  return (
    <div className="flex mx-4 max-w-full ">
      <Modal
        title="Update Modal"
        open={IsModalUpdate}
        onOk={() => handleUpdateBtn()}
        onCancel={() => handleClearModal()}
        maskClosable={false}
        okText="Update User"
      >
        <div className="gap-y-10">
          <span>ID:</span>
          <Input value={userID} disabled />
          <span>Full Name:</span>
          <Input
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <span>Phone Number:</span>
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default UserUpdate;
