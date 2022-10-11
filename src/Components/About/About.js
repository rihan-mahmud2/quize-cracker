import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToolTips } from "rechart";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const About = () => {
  const data = useLoaderData().data;

  return (
    <div>
      <BarChart width={730} height={250} data={data}>
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
