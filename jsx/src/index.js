import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// function base component
const Heading = function () {
  return <h1 className="label">This is Heading component!!!</h1>;
};
ReactDOM.render(<Heading></Heading>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
