import React, { useContext } from "react";
import { RestauContext } from "../contexts/RestauContext";
import "../Restau.css";

// Restau component populates a grid with restaurant objects from an array
const Restau = () => {
  const [restau] = useContext(RestauContext);
  const importance = restau.sortedStatus.importance;

  // sorts restaurants by name based on the importance state
  const toggleSortByName = () => {
    const sortedArray = []
      .concat(restau.restauData.restaurants)
      .sort((a, b) => a.name.localeCompare(b.name)); // sorts a copy of the state, restaurants

    console.log("status-Restau", restau.sortedStatus);
    return importance === "unsorted"
      ? restau.restauData.restaurants
      : importance === "sort"
      ? sortedArray
      : sortedArray.reverse();
  };

  const style = {
    fontSize: 20,
    fontWeight: 900,
    color: "#ffffff"
  };
  console.log("field", restau);

  return (
    <>
      {toggleSortByName().map(({ image, name, description, tags }) => (
        <figure key={name} className="restauFig">
          <img src={image} alt={description} className="restauImg" />
          <p style={style}>{name}</p>
          <p>
            Food Types: {tags[0]}, {tags[1]}
          </p>
        </figure>
      ))}
    </>
  );
};

export default Restau;
