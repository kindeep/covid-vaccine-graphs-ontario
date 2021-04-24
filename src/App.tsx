import React from "react";
import "./App.css";
import useVaccineData, { ResVaccineDataRecord } from "./data/useVaccineData";
import { ChartData, Line } from "react-chartjs-2";
import { ChartData as OrigChartData } from "chart.js";

const one_day_ms = 86400000;

const line = (x1: number, y1: number, x2: number, y2: number) => (
  x: number
) => {
  return ((y2 - y1) / (x2 - x1)) * (x - x1) + y1;
};

function App() {
  const { data } = useVaccineData();

  const allDates: Date[] = [];
  let byDate = new Date("June 20, 2021");

  if (data && data.length > 0) {
    const last = data[data.length - 1];
    if (last.report_date > byDate) {
      byDate = last.report_date;
    }
  }

  let currDate = new Date("December 24, 2020");

  while (currDate <= byDate) {
    allDates.push(currDate);
    currDate = new Date(currDate.getTime() + one_day_ms);
  }

  const dataMap: { [key: string]: ResVaccineDataRecord } = {};
  const extrMap: { [key: string]: number } = {};

  if (data && data.length > 0) {
    const last = data[data.length - 1];

    const lastIndex = allDates.findIndex(
      (r) => r.toDateString() === last.report_date.toDateString()
    );
    const f = line(lastIndex, last.at_least_1_ratio, allDates.length - 1, 0.75);

    allDates.forEach((date, index) => {
      if (date >= last.report_date) {
        extrMap[date.toDateString()] = f(index);
      }
    });
  }

  data.forEach((val) => {
    dataMap[val.report_date.toDateString()] = val;
  });

  const ratios = allDates.map((date) => {
    return dataMap[date.toDateString()]?.at_least_1_ratio;
  });

  const extr = allDates.map((date) => {
    return extrMap[date.toDateString()];
  });

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
        data: ratios,
      },
      {
        type: "line",
        label: "Required trajectory for 75% by June 20",
        fill: false,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(75, 75, 75, 1)",
        data: extr,
        borderDash: [20, 20],
        borderWidth: 0,
        pointBorderColor: "rgba(0,0,0,0)",
      },
    ],
  };

  return (
    <div style={{ height: "100vh" }}>
      <Line data={chartData}></Line>
    </div>
  );
}

export default App;
