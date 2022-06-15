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
const options = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["0-14", "15-29", "30-44", "45-59", "60-74", "75-89", "90+"];

const data = {
  labels,
  datasets: [
    {
      label: "Kadın",
      data: [48.7, 48.9, 49.5, 49.9, 52.3, 59.1, 73.2],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Erkek",
      data: [51.3, 51.1, 50.5, 50.1, 47.7, 40.9, 26.8],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function BarChart() {
  return (
    <Bar
      style={{ maxHeight: 280, maxWidth: 300 }}
      options={options}
      data={data}
      height={150}
      width={200}
    />
  );
}
