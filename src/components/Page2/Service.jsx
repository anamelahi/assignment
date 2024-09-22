import React from "react";
import "./Service.css";

const Service = (props) => {
  return (
    <div className="service">
      <img
        src={props.image}
        alt=""
      />
      <h2>{props.heading}</h2>
      <p>
       {props.text}
      </p>
    </div>
  );
};

export default Service;
