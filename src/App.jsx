import React from "react";

import { Header } from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header></Header>
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
