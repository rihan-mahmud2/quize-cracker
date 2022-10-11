import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const quizTopic = useLoaderData().data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto m-10 container">
      {quizTopic.map((topic) => (
        <Card key={topic.id} topic={topic}></Card>
      ))}
    </div>
  );
};

export default Home;
