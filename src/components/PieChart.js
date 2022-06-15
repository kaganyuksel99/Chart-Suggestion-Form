import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { options } from "./StackedBarChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Dağıtım",
    "Ulaştırma",
    "İnşaat",
    "İşletmecilik Hizmetleri",
    "Diğer",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [31, 15, 14, 17, 23],
      backgroundColor: [
        "rgba(241, 196, 15,1.0)",
        "rgba(127, 140, 141,1.0)",
        "rgba(230, 126, 34,1.0)",
        "rgba(52, 152, 219,1.0)",
        "rgba(236, 240, 241,1.0)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <Pie
      style={{ maxHeight: 300, maxWidth: 300 }}
      options={options}
      data={data}
      height={200}
      width={200}
    />
  );
}
