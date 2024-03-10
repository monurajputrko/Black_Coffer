import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ serverData }) => {
  let uniqueSectors = [];
  serverData.forEach((i) => {
    if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
      uniqueSectors.push(i.sector);
    }
  });

  let uniqueTopics = [];
  serverData.forEach((i) => {
    if (!uniqueTopics.includes(i.topic) && i.topic !== "") {
      uniqueTopics.push(i.topic);
    }
  });

  let uniqueRegion = [];
  serverData.forEach((i) => {
    if (!uniqueRegion.includes(i.region) && i.region !== "") {
      uniqueRegion.push(i.region);
    }
  });

  let uniqueCountry = [];
  serverData.forEach((i) => {
    if (!uniqueCountry.includes(i.country) && i.country !== "") {
      uniqueCountry.push(i.country);
    }
  });

  let uniqueSource = [];
  serverData.forEach((i) => {
    if (!uniqueSource.includes(i.source) && i.source !== "") {
      uniqueSource.push(i.source);
    }
  });

  let uniquePestle = [];
  serverData.forEach((i) => {
    if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
      uniquePestle.push(i.pestle);
    }
  });

  const label = [
    "Country",
    "Region",
    "Source",
    "Topic",
    "Sector",
    "Pestle",
    "Intensity",
    "Likelihood",
    "Relevance",
    "Year",
    "City",
  ];

  const data = [
    uniqueCountry.length,
    uniqueRegion.length,
    uniqueSource.length,
    uniqueTopics.length,
    uniqueSectors.length,
    uniquePestle.length,
    serverData.reduce((acc, cur) => acc + (cur.intensity || 0), 0),
    serverData.reduce((acc, cur) => acc + (cur.likelihood || 0), 0),
    serverData.reduce((acc, cur) => acc + (cur.relevance || 0), 0),
    serverData.reduce(
      (acc, cur) =>
        acc +
        (cur.start_year && cur.end_year ? cur.end_year - cur.start_year : 0),
      0
    ),
    serverData.reduce((acc, cur) => acc + (cur.city ? cur.city.length : 0), 0),
  ];

  return (
    <div style={{ height: "50vh", width: "45vw" }}>
      <Doughnut
        data={{
          labels: label,
          datasets: [
            {
              label: "Total: ",
              data: data,
              borderWidth: 1,
              hoverOffset: 5,
            },
          ],
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

export default DoughnutChart;
