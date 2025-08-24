import React from "react";
import FormatDate from "./format-date";

const PrivateRoute = () => {
  return (
    <div>
      <h2>This page is not visible to browser</h2>
      <FormatDate></FormatDate>
    </div>
  );
};

export default PrivateRoute;
