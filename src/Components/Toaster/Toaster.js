import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      {notify()}
      <ToastContainer />
    </div>
  );
};

export default Toaster;