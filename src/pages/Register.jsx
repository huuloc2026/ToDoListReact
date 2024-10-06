import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const result = await apiService.RegisterUserAPI(
      values.fullName,
      values.password,
      values.email,
      values.phone
    );
    if (result.data) {
      notification.success({
        message: "Resigter",
        description: "Success Resigter New User!!",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Error Register !!",
        description: JSON.stringify(result.message),
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center w-screen items-center mt-[200px]">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 100,
        }}
        style={{
          maxWidth: 1600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number: "
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 12,
          }}
        >
          <div className="flex justify-between">
            <Button type="primary" onClick={() => form.submit()}>
              Regiser
            </Button>
            <Button type="dashed">
              <Link to="/login">Already Account!</Link>
            </Button>
            <Button type="primary">
              <Link to="/">Go to homepage</Link>
            </Button>
          </div>
        </Form.Item>
      </Form>{" "}
    </div>
  );
};

export default Register;
