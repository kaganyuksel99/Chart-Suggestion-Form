import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Ocak 2021",
    uv: 2.34,
    pv: 2.29,
  },
  {
    name: "Nisan 2021",
    uv: 1.9,
    pv: 1.83,
  },
  {
    name: "Temmuz 2021",
    uv: 2.8,
    pv: 1.75,
  },
  {
    name: "Ekim 2021",
    uv: 5.05,
    pv: 2.07,
  },
];

const AreaGraph = () => {
  return (
    <AreaChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
};

export default AreaGraph;
