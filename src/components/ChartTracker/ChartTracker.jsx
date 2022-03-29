import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";

const ChartTracker = (props) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let temp = props.entries.map((entry) => {
      return [entry.date, entry.weight];
    });
    setChartData(temp);
  }, [props.entries]);

  return (
    <Chart
      chartType="LineChart"
      data={[["Date", "Weight"], ...chartData]}
      width="100%"
      height="400px"
      options={{ legend: { position: "bottom" } }}
      legendToggle
    />
  );
};

export default ChartTracker;
