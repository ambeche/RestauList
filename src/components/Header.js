import React, { useContext } from "react";
import { RestauContext } from "../contexts/RestauContext";

const Header = () => {
  const [restau, setRestau] = useContext(RestauContext);
  const status = restau.sortedStatus;
  
  const setSortedStatus = () => {
    //Event handler updates the states when the sort button is clicked
    if (status.importance === "unsorted") {
      setRestau({
        ...restau, 
        value: status.value = "Reverse Order",
        class: status.class = "sorted",
        importance: status.importance = "sort",
        
       }); 
    } else if (status.importance === "sort") {
      setRestau({
        ...restau,
        value: status.value = "Reset or Shuffle",
        class: status.class = "sorted",
        importance: status.importance = "reverse",
      }); 
    } else
    setRestau({
      ...restau,
      value: status.value = "Sort Alphabetically",
      class: status.class = "unsorted",
      importance: status.importance = "unsorted",
    });
  };
  
  return (
    <div className="header">
      <h1>Choose a Restaurant and have your food delivered!</h1>
      <button onClick={() => setSortedStatus()} className={status.class}>{status.value}</button>
    </div>
  );
};

export default Header;
