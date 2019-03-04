import "./MiddleComponent.css";
import React, { Component } from "react";
import Top from "../Images/middlepicTop.PNG";
import Bottom from "../Images/middlepicBottom.PNG";

class MiddleComponent extends Component {
  render() {
    return (
      <div className="middle">
        <div className="middle-top">
          <img src={Top} alt="" />
        </div>
        <div className="middle-bottom">
          <img src={Bottom} alt="" />
        </div>
      </div>
    );
  }
}
export default MiddleComponent;
