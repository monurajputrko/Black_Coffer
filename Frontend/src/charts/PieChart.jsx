import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ serverData }) => {
  const data = {
    labels: [
      "Intensity",
      "Likelihood",
      "Relevance",
      "Year",
      "Country",
      "Topics",
      "Region",
      "City",
    ],
    datasets: [
      {
        data: [
          serverData.reduce((acc, curr) => acc + curr.intensity, 0),
          serverData.reduce((acc, curr) => acc + curr.likelihood, 0),
          serverData.reduce((acc, curr) => acc + curr.relevance, 0),
          serverData.filter((item) => item.year !== null).length,
          serverData.filter((item) => item.country !== "").length,
          serverData.filter((item) => item.topics !== "").length,
          serverData.filter((item) => item.region !== "").length,
          serverData.filter((item) => item.city !== "").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
      },
    ],
  };

  return (
    <div style={{ height: "50vh", width: "45vw" }}>
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
