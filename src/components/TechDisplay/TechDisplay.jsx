import React, { useState } from "react";
import "./TechDisplay.css";
import { tech } from "../../assets/assets";

const TechDisplay = ({ category }) => {

    const [counter,setCounter] = useState(0);

  return (
    <div className="tech-display">
      <h1>Our Top Rated Tech</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nam amet,
        nobis quam aliquam rem numquam repellat, qui labore corporis modi natus
        atque tempore aspernatur? Voluptate, unde. Veritatis, repellendus nulla!
      </p>
      <div className="tech-list">
        {tech.map((item,index) => {
          if (category === "All" || category === item.category) {
            return (
              <div key={index} className="tech-list-item">
                <p>{item.topics_name}</p>
                {!counter
                  ? <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
                  :<div>
                      <button onClick={()=>setCounter(prev=>prev-1)}>-</button>
                      <p>{counter}</p>
                      <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
                  </div>
                }        
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TechDisplay;
