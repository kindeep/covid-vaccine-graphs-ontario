import React from "react";
import "./App.css";
import useVaccineData from "./data/useVaccineData";
import { ChartData, Line } from "react-chartjs-2";
import { ChartData as OrigChartData } from "chart.js";

const one_day_ms = 24 * 60 * 60 * 100;

const line = (x1: number, y1: number, x2: number, y2: number) => (
  x: number
) => {
  return ((y2 - y1) / (x2 - x1)) * (x - x1) + y1;
};

function App() {
  const { data, derived } = useVaccineData();
  let allDates: Date[] = [];
  let ratiosExtrp: (number | null)[] = [];
  if (data && data.length > 2) {
    const extDates: Date[] = [];
    const lastInd = data.length - 1;
    const lastDate = data[lastInd].report_date;
    const lastRatio = derived.at_least_1_ratio[lastInd];
    const byDate = new Date("June 5, 2021");
    let currDate = lastDate;

    while (currDate <= byDate) {
      extDates.push(currDate);
      currDate = new Date(currDate.getTime() + one_day_ms);
    }

    // y = ((y2 - y1) / (x2 - x1)) * (x - x1) + y1

    const f = line(0, lastRatio, extDates.length - 1, 0.75);

    const knownDates = data.map((d) => d.report_date);
    allDates = [...knownDates];
    allDates.splice(-1, 1);
    allDates = [...allDates, ...extDates];

    ratiosExtrp = allDates.map((_, index) => {
      const x = index - lastInd;
      if (x >= 0) {
        return f(x);
      } else {
        return null;
      }
    });
  }

  const chartData: ChartData<OrigChartData> = {
    labels: allDates.map((d) => d.toDateString()),
    datasets: [
      {
        label: "Ratio of Ontario population with at least one dose",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: derived.at_least_1_ratio,
      },
      {
        type: "line",
        label: "Required trajectory for 75% by June 5",
        fill: false,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(75, 75, 75, 1)",
        data: ratiosExtrp, 
        borderDash: [20, 20],
        borderWidth: 0,
        pointBorderColor: "rgba(0,0,0,0)",
      },
    ],
  };

  return (
    <div style={{height: "100vh"}}>
      <Line data={chartData}></Line>
    </div>
  );
}

export default App;
