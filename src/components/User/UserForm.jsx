import React, { useState } from "react";
import { Button, Modal, Input, notification } from "antd";
import apiService from "/src/services/apiService.js";

const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmitbtn = async () => {
    const res = await apiService.createUserAPI(
      fullName,
      email,
      password,
      phone
    );
    if (res.data) {
      notification.success({
        message: "Create User",
        description: "Success create new user!",
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
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="flex mx-4 max-w-full ">
      <div className="flex justify-between w-full">
        <span>Tables User </span>
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          htmlType="submit"
        >
          Create User
        </Button>
      </div>

      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={() => handleSubmitbtn()}
        onCancel={() => handleClearModal()}
        maskClosable={false}
        okText="Submit"
      >
        <div className="gap-y-10">
          <span>Full Name:</span>
          <Input
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <span>Email:</span>
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Password:</span>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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

export default UserForm;
