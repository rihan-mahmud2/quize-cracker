import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const quarries = useLoaderData();
  const { data } = quarries;
  const { questions } = data;

  return (
    <div className="m-10">
      <h1>This is the questions page</h1>
      <div className="grid grid-cols-2 gap-10">
        {questions.map((question) => (
          <Question question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Questions;
