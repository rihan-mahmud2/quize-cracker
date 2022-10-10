import React from "react";
import { Link } from "react-router-dom";

const Card = ({ topic }) => {
  const { name, logo, id } = topic;
  return (
    <div>
      <div className="card bg-slate-300 shadow-xl duration-200 hover:translate-y-5">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-lg text-sky-700">{name}</p>
          <Link to={`/questions/${id}`}>
            <button className="btn hover:text-blue-400">Start Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
