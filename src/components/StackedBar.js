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
      stacked: true,
    },
  },
};

const labels = ["AKP", "CHP", "MHP", "HDP", "İYİ PARTİ", "SP", "DİĞER"];

export const data = {
  labels,
  datasets: [
    {
      label: "Katılıyorum",
      data: [10, 5, 9, 2, 10, 20, 10],
      backgroundColor: "rgb(46, 204, 113)",
    },
    {
      label: "Katılmıyorum",
      data: [75, 90, 89, 83, 84, 74, 60],
      backgroundColor: "rgb(231, 76, 60)",
    },
    {
      label: "Ne katılıyorum ne katılmıyorum",
      data: [15, 5, 2, 15, 6, 6, 30],
      backgroundColor: "rgb(99, 110, 114)",
    },
  ],
};

export function StackedBar() {
  return <Bar options={options} data={data} />;
}
