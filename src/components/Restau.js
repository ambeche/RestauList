import React, { useContext } from "react";
import { RestauContext } from "../contexts/RestauContext";
import '../Restau.css';

const Restau = () => {
  const [restau] = useContext(RestauContext);
  const style = {
    fontSize: 20,
    fontWeight: 900,
    color: '#ffffff',
  }
  console.log("field", restau);

  return (
    <>
      {restau.restaurants.map(
        ({ image, name, description, tags, }) =>(
          console.log('Restau fields', image, name, description, tags),
          <figure key={name} className="restauFig">
            <img src={image} alt={description} className="restauImg"/>
            <p style={style}>{name}</p>
            <p> Food Types: {tags[0]}, {tags[1]}</p>
          </figure>
        )
        
      )}
    </>
  );
};

export default Restau;
