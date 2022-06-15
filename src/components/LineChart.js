import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const data = {
  labels,
  datasets: [
    {
      label: "Kadın",
      data: [
        72.6, 75.1, 78.9, 79.9, 80.2, 80.8, 81.2, 81.9, 82.3, 83.4, 84.5, 85.7,
        87.7,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Erkek",
      data: [
        89.8, 90.2, 91, 91.3, 92.1, 94, 94.3, 94.7, 95.1, 95.3, 95.6, 96.6,
        98.1,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function LineChart() {
  return (
    <Line
      style={{ maxHeight: 400, maxWidth: 300 }}
      options={options}
      data={data}
      height={240}
      width={200}
    />
  );
}
