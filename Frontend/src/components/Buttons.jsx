import React from 'react'
import { Button } from 'react-bootstrap';
import { useData } from '../Context/DataContext';

export default function Buttons() {

     const { handleReset, setChangeChart } = useData();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("LineChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Line Chart
        </Button>
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("RadarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Radar chart
        </Button>
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("BarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Bar Chart
        </Button>
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("DoughnutChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Doughnut
        </Button>
        <Button
          variant="info"
           onClick={()=>{setChangeChart("PolarChart")}}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Polar Chart
        </Button>
        <Button
          variant="info"
           onClick={()=>{setChangeChart("PieChart")}}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Pie Chart
        </Button>
      </div>
    </div>
  );
}
