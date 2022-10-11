import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const quarries = useLoaderData();
  const { data } = quarries;
  const { questions } = data;

  return (
    <div className="m-10">
      <h1>This is the {data.name} quiz questions</h1>

      <div className="grid grid-cols-1 gap-10">
        {questions.map((question) => (
          <Question question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Questions;
