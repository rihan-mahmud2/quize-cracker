import React from "react";
import Option from "../Option/Option";

const Question = ({ question }) => {
  console.log(question);
  let id = 0;
  return (
    <div>
      {question.question}
      <div className="grid grid-cols-4">
        {question.options.map((option) => (
          <Option option={option} key={id++}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
