import React from "react";

import { Header } from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="max-h-screen">
        <Header />
        <main className="my-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
