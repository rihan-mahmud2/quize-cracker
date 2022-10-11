import React from "react";
import Option from "../Option/Option";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question, SerialNo }) => {
  console.log(question);
  const handleClick = (option) => {
    if (option === question.correctAnswer) {
      toast("That's Correct Answer!!");
    } else {
      toast("Icorrect Answer");
    }
  };
  let id = 0;

  return (
    <div className="p-8 shadow-xl w-1/2">
      <EyeIcon className="h-6 w-6 text-blue-500" />
      <h1>
        Questions No: {SerialNo} {question.question}
      </h1>
      <div className="grid grid-cols-2 mt-3 p-5 shadow-lg">
        {question.options.map((option) => (
          <Option option={option} handleClick={handleClick} key={id++}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
