import React, { Component } from "react";
import "./App.css";
import LeftComponent from "./LeftComponent/index";
import MiddleComponent from "./MiddleComponent/index";
import RightComponent from "./RightComponent/index";
import NavComponent from "./navComponent/index";

function App() {
  return (
    <div className="app">
      <NavComponent className="nav" />
      <LeftComponent className="left" />
      <MiddleComponent className="middle" />
      <RightComponent className="right" />
    </div>
  );
}
export default App;
