import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "2017",
    uv: 3.65,
    pv: 4.12,
    amt: 20,
    cnt: 20,
  },
  {
    name: "2018",
    uv: 4.81,
    pv: 5.66,
    amt: 20,
    cnt: 20,
  },
  {
    name: "2019",
    uv: 5.67,
    pv: 6.35,
    amt: 20,
    cnt: 20,
  },
  {
    name: "2020",
    uv: 7.01,
    pv: 8.03,
    amt: 20,
    cnt: 20,
  },
  {
    name: "2021",
    uv: 7.39,
    pv: 9.01,
    amt: 20,
    cnt: 20,
  },
  {
    name: "2022",
    uv: 15.45,
    pv: 16.04,
    amt: 20,
    cnt: 20,
  },
];

const BenchmarkLine = () => {
  return (
    <ComposedChart
      width={500}
      height={280}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
};
export default BenchmarkLine;
