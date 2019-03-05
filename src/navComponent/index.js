import "./navComponent.css";
import React, { Component } from "react";
import Header from "../Images/headerNav.PNG";

class navComponent extends Component {
  render() {
    return (
      <div className="nav">
        <img src={Header} alt="" />
      </div>
    );
  }
}
export default navComponent;
