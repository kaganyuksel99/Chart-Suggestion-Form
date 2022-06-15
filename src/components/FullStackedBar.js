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
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: false,
    },
  },
};

const labels = ["Takımlar"];

export const data = {
  labels,
  datasets: [
    {
      label: "Galatasaray",
      data: [32.5],
      backgroundColor: "rgb(231, 76, 60)",
      stack: "Stack 0",
    },
    {
      label: "Fenerbahçe",
      data: [30.4],
      backgroundColor: "rgb(0, 9, 44)",
      stack: "Stack 0",
    },
    {
      label: "Beşiktaş",
      data: [16.7],
      backgroundColor: "rgb(236, 240, 241)",
      stack: "Stack 0",
    },
    {
      label: "Trabzonspor",
      data: [5],
      backgroundColor: "rgb(196, 69, 105)",
      stack: "Stack 0",
    },
    {
      label: "Bursaspor",
      data: [2.4],
      backgroundColor: "rgb(32, 191, 107)",
      stack: "Stack 0",
    },
    {
      label: "Eskişehirspor",
      data: [2],
      backgroundColor: "rgb(255, 56, 56)",
      stack: "Stack 0",
    },
    {
      label: "Diğer Şehir Takımları",
      data: [8.5],
      backgroundColor: "rgb(126, 255, 245)",
      stack: "Stack 0",
    },
    {
      label: "Takım Tutmuyorum",
      data: [2.5],
      backgroundColor: "rgb(61, 61, 61)",
      stack: "Stack 0",
    },
  ],
};

export function FullStackedBar() {
  return <Bar options={options} data={data} />;
}
