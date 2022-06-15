import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = [
  "Aralık 2019",
  "Aralık 2018",
  "Aralık 2017",
  "Aralık 2016",
  "Aralık 2015",
];

const labels2 = [
  "Aralık 2019",
  "Aralık 2018",
  "Aralık 2017",
  "Aralık 2016",
  "Aralık 2015",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Kuru Soğan Fiyatı(kg)",
      data: [2.07, 4.18, 1.47, 1.15, 1.71],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function ColumnGraph() {
  return <Bar options={options} data={data} />;
}
