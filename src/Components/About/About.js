import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToolTips } from "rechart";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const About = () => {
  const data = useLoaderData().data;

  return (
    <div className="mt-20 mx-auto max-w-200">
      <BarChart width={630} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ToolTips />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default About;
