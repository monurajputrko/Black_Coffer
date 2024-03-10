
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import { useData } from '../Context/DataContext';

export default function AllCharts() {

  const { mainData, ChangeChart } = useData();

  const chartStyle = {
    border: "2px solid black",
    padding: "10px",
    margin: "5px",
  };

  return (
    <div>
      {mainData !== "" ? (
        <div>
          {ChangeChart === "PolarChart" && (
            <div
              style={
                (chartStyle, { display: "flex", justifyContent: "center" })
              }
            >
              <PolarChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "DoughnutChart" && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DoughnutChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "BarChart" && (
            <div style={chartStyle}>
              <BarChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "LineChart" && (
            <div style={chartStyle}>
              <LineChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "RadarChart" && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RadarChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "PieChart" && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PieChart serverData={mainData} style={chartStyle} />
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <h1>Loading....</h1>
        </div>
      )}
    </div>
  );
}
