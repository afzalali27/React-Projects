import React from "react";
import "./SeasonDisplay.css";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    if (lat > 0) {
      return "summer";
    } else {
      return "winter";
    }
  } else {
    if (lat > 0) return "winter";
    else return "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // what text to display
  const text =
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
  // which icon to display using ternary operator
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`${icon} icon massive icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon massive icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
