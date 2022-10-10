import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const quarries = useLoaderData();
  const { data } = quarries;
  const { questions } = data;

  return (
    <div>
      <h1>This is the questions page</h1>
      {questions.map((question) => (
        <Question question={question}></Question>
      ))}
    </div>
  );
};

export default Questions;
