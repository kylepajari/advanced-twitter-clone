import "./MiddleComponent.css";
import React, { Component } from "react";
import Welcome from "../Images/middlepicTop.PNG";
import Featured from "../Images/middlepicBottom.PNG";

class MiddleComponent extends Component {
  render() {
    return (
      <div className="middle">
        <div className="middle-top">
          <img src={Welcome} alt="" />
        </div>
        <div className="middle-bottom">
          <img src={Featured} alt="" />
        </div>
      </div>
    );
  }
}
export default MiddleComponent;
