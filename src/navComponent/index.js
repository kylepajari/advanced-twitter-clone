import "./navComponent.css";
import React, { Component } from "react";
import Pic from "../Images/headerNav.PNG";

class navComponent extends Component {
  render() {
    return (
      <div className="nav">
        <img src={Pic} alt="" />
      </div>
    );
  }
}
export default navComponent;
