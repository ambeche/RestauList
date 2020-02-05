import React from "react";
import { RestauProvider } from "../contexts/RestauContext";
import Restau from "./Restau";
import "../RestauList.css";

const RestauList = () => {
  return (
    <RestauProvider>
      <div className="restauList">
        <Restau />
      </div>
    </RestauProvider>
  );
};
export default RestauList;
