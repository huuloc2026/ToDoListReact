import React, { useContext, useEffect } from "react";
import { Flex, Spin } from "antd";
import { Header } from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";
import apiService from "./services/apiService";
import { AuthContext } from "./components/context/Auth";

// const ParrentComponent = (props) => {
//   console.log("check props:", props);
//   return (
//     <>
//       <div>Parent Component</div>
//       <div>{props.children}</div>
//     </>
//   );
// };
// const ChildrenComponent = () => {
//   return <div>This is: Children Component</div>;
// };
const App = () => {
  const { setUser, isLoading, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    const res = await apiService.getAccountAPI();
    if (res.data) {
      setUser(res.data.user);
      console.log(res.data);
    }
    setIsLoading(false);
  };
  const contentStyle = {
    padding: 50,
    borderRadius: 4,
    top: "50%",
    left: "50%",
  };

  return (
    <>
      {/* <ParrentComponent>
        <ChildrenComponent />
        <div>Hello</div>
        </ParrentComponent> */}
      {isLoading ? (
        <div style={contentStyle}>
          <Flex gap="middle" vertical>
            <Spin tip="Loading" size="large" />
          </Flex>
        </div>
      ) : (
        <>
          {" "}
          <div className="max-h-screen">
            <Header />
            <main className="my-10">
              <Outlet />
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
