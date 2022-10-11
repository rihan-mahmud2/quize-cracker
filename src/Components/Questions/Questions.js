import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const quarries = useLoaderData();
  const { data } = quarries;
  const { questions } = data;
  let SerialNo = 1;

  return (
    <div className="container mx-auto border border-slate-800">
      <h1>This is the {data.name} quiz questions</h1>

      <div className="grid grid-cols-1 gap-10">
        {questions.map((question) => (
          <Question question={question} SerialNo={SerialNo++}></Question>
        ))}
      </div>
    </div>
  );
};

export default Questions;
