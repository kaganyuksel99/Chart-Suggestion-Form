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
  indexAxis: "x",
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

const labels = ["AKP", "CHP", "MHP", "İYİ PARTİ", "HDP"];

export const data = {
  labels,
  datasets: [
    {
      label: "Yerel Seçim Sonuçları 2019",
      data: [44.06, 29.1, 5.18, 9.52, 4.15],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function HorizontalBarChart() {
  return (
    <Bar
      style={{ maxHeight: 300, maxWidth: 300 }}
      options={options}
      data={data}
      height={200}
      width={200}
    />
  );
}
