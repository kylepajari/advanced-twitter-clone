import "./LeftComponent.css";
import React, { Component } from "react";
import Pic from "../Images/leftPic.PNG";

class LeftComponent extends Component {
  render() {
    return (
      <div className="left">
        <div className="left-top">
          <img src={Pic} alt="" />
        </div>
        <div className="left-bottom" />
      </div>
    );
  }
}
export default LeftComponent;
