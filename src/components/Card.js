import React from "react";

import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" alt="card" />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star" />
        <span>{props.rating}</span>
        <span className="grey">(6) . .</span>
        <span className="grey">USA</span>
      </div>
      <p>Life Lessons with Katia Zaferes</p>
      <p>
        {" "}
        <span className="bold">From $136</span> / Person
      </p>
    </div>
  );
}
