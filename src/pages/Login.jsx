import React, { useContext, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  message,
  notification,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../services/apiService";
import { AuthContext } from "../components/context/Auth";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const result = await apiService.LoginUserAPI(
      values.username,
      values.password
    );

    setLoading(false);
    if (result.data) {
      message.success("Success");
      localStorage.setItem("access_token", result.data.access_token);
      setUser(result.data.user);
      navigate("/");
    } else {
      notification.error({
        message: "Error login !!",
        description: JSON.stringify(result.message),
      });
    }
  };
  return (
    <div className="flex justify-center mt-[200px]">
      {" "}
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            onKeyDown={(event) => {
              if (event.key === "Enter") Form.submit();
            }}
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/"> -------Go to homepage</Link>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">
            Log in
          </Button>
          or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
