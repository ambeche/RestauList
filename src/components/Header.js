import React, { useState, useEffect, useContext } from "react";
import { RestauContext } from "../contexts/RestauContext";

const Header = () => {
  return (
    <div className="header">
      <h1>Choose a Restaurant and have your food delivered!</h1>
      <button className="sort reverse">Sort Alphabetically</button>
    </div>
  );
};

export default Header;
