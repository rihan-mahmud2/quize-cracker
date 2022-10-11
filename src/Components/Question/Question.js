import React from "react";
import Option from "../Option/Option";
import Toaster from "../Toaster/Toaster";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question }) => {
  console.log(question);
  const handleClick = (option) => {
    if (option === question.correctAnswer) {
      const notify = () => toast("Wow so easy!");

      <div>
        {notify()}
        <ToastContainer />
      </div>;
    }
  };
  let id = 0;
  return (
    <div className="border border-lime-300 p-8 min-w-[400px]">
      {question.question}
      <div className="grid grid-cols-2 justify-center items-center">
        {question.options.map((option) => (
          <Option option={option} handleClick={handleClick} key={id++}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
