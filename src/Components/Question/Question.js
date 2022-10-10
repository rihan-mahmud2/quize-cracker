import React from "react";
import Option from "../Option/Option";

const Question = ({ question }) => {
  console.log(question);
  let id = 0;
  return (
    <div className="border border-lime-300 p-8">
      {question.question}
      <div className="grid grid-cols-2 justify-center items-center">
        {question.options.map((option) => (
          <Option option={option} key={id++}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
