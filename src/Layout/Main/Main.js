import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../../Components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header>
        <Outlet></Outlet>
        <ToastContainer />;
      </Header>
    </div>
  );
};

export default Main;
