import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PrivateRoute from "../_lib/page";

const Charts = () => {
  return (
    <div>
      <h2>This is Dashboard Charts: </h2>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <PrivateRoute></PrivateRoute>
    </div>
  );
};

export default Charts;
