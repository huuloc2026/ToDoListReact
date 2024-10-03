import React, { useState } from "react";
import { Button, Form, Input } from "antd";
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickbtn = () => {
    console.log({ fullName, email, password, phone });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" space-y-4">
        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Input
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <div>
          <Button type="primary" onClick={handleClickbtn} htmlType="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
