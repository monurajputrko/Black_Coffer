import React from "react";
import { PolarArea } from "react-chartjs-2";

const PolarChart = ({ serverData }) => {
  let uniqueCountries = new Set();
  let uniqueRegions = new Set();
  let uniqueSources = new Set();
  let uniqueTopics = new Set();
  let uniqueSectors = new Set();
  let uniquePestles = new Set();
  let uniqueCities = new Set();

  let intensityValues = new Set();
  let likelihoodValues = new Set();
  let relevanceValues = new Set();
  let yearValues = new Set();
  let cityValues = new Set();

  serverData.forEach((data) => {
    uniqueCountries.add(data.country);
    uniqueRegions.add(data.region);
    uniqueSources.add(data.source);
    uniqueTopics.add(data.topic);
    uniqueSectors.add(data.sector);
    uniquePestles.add(data.pestle);
    uniqueCities.add(data.city);

    intensityValues.add(data.intensity);
    likelihoodValues.add(data.likelihood);
    relevanceValues.add(data.relevance);
    yearValues.add(data.year);
  });

  const data = [
    uniqueCountries.size,
    uniqueRegions.size,
    uniqueSources.size,
    uniqueTopics.size,
    uniqueSectors.size,
    uniquePestles.size,
    uniqueCities.size,
    intensityValues.size,
    likelihoodValues.size,
    relevanceValues.size,
    yearValues.size,
  ];

  const labels = [
    "Countries",
    "Regions",
    "Sources",
    "Topics",
    "Sectors",
    "Pestles",
    "Cities",
    "Intensity",
    "Likelihood",
    "Relevance",
    "Year",
  ];

  return (
    <div style={{ height: "50vh", width: "45vw" }}>
      <PolarArea
        data={{
          labels: labels,
          datasets: [
            {
              label: "Count",
              data: data,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
        height={300}
      />
    </div>
  );
};

export default PolarChart;
