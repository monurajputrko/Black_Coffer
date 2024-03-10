import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ serverData }) => {
  const uniqueFields = {
    country: [],
    region: [],
    source: [],
    topic: [],
    sector: [],
    pestle: [],
    intensity: [],
    likelihood: [],
    relevance: [],
    year: [],
    city: [],
  };

  serverData.forEach((item) => {
    Object.keys(uniqueFields).forEach((field) => {
      if (!uniqueFields[field].includes(item[field]) && item[field] !== "") {
        uniqueFields[field].push(item[field]);
      }
    });
  });

  const data = Object.keys(uniqueFields).map((field) => ({
    label: field,
    data: uniqueFields[field].map(
      (value) => serverData.filter((item) => item[field] === value).length
    ),
  }));

  return (
    <div style={{ height: "50vh" }}>
      <Line
        data={{
          labels: Object.keys(uniqueFields).map((field) => field),
          datasets: data.map((item) => ({
            label: item.label,
            data: item.data,
            borderWidth: 1,
          })),
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
        height={300}
      />
    </div>
  );
};

export default LineChart;
