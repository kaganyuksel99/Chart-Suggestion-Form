import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ["Ocak", "Şubat", "Mart", "Nisan"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [1132, 1149, 1851, 1568],
    },
    {
      type: "bar",
      label: "Bmw",
      backgroundColor: "rgb(75, 192, 192)",
      data: [613, 1149, 1166, 1094],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Mercedes-Benz",
      backgroundColor: "rgb(53, 162, 235)",
      data: [1132, 936, 1851, 1568],
    },
  ],
};

export function SmallMultiples() {
  return <Chart type="bar" data={data} />;
}
