import "./RightComponent.css";
import React, { Component } from "react";
import SignUp from "../Images/rightpic.PNG";

class RightComponent extends Component {
  render() {
    return (
      <div className="right">
        <div className="right-top">
          <img src={SignUp} alt="" />
        </div>
        <div className="right-bottom" />
      </div>
    );
  }
}
export default RightComponent;
