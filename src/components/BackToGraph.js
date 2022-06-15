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
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = [
  "Endişe dinleme oranı",
  "Personele iyi davranma",
  "İşlerde sorumluluk oranı",
  "Tavsiye verme (öğrenci)",
  "Okulda olumlu davranma",
  "Kararları destekleme",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Öğretmenler",
      data: [77, 97, 80, 79, 62, 75],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Müdür",
      data: [-98, -97, -94, -91, -88, -87, -42],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function BackToGraph() {
  return <Bar options={options} data={data} />;
}
