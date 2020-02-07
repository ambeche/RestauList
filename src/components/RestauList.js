import React from "react";
import Restau from "./Restau";
import "../RestauList.css";

// provides a grid to be populated restaurant objects by Restau component
const RestauList = () => {
  return (
    <div className="restauList">
      <Restau />
    </div>
  );
};
export default RestauList;
