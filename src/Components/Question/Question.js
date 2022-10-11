import React from "react";
import Option from "../Option/Option";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question }) => {
  console.log(question);
  const handleClick = (option) => {
    if (option === question.correctAnswer) {
      console.log("congrats");
      toast("Wow so easy!");
    }
  };
  let id = 0;
  let SlNo = 1;
  SlNo++;
  return (
    <div className=" p-8 min-w-[400px] shadow-xl w-1/2">
      <h1>
        Questions No {SlNo} {question.question}
      </h1>
      <div className="grid grid-cols-2 justify-center items-center border border-pink-200 mt-3 p-5 shadow-lg">
        {question.options.map((option) => (
          <Option option={option} handleClick={handleClick} key={id++}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
