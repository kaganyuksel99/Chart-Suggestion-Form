import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Evet", "Hayır"],
  datasets: [
    {
      label: "# of Votes",
      data: [51.41, 48.59],
      backgroundColor: ["red", "black"],
      borderColor: ["red", "black"],
      borderWidth: 1,
    },
  ],
};

export function Donut() {
  return (
    <Doughnut
      style={{ maxHeight: 280, maxWidth: 300 }}
      data={data}
      height={200}
      width={200}
    />
  );
}
