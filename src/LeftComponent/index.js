import "./LeftComponent.css";
import React, { Component } from "react";
import SideBar from "../Images/leftPic.PNG";
import Messages from "../Images/leftpicBottom.png";

class LeftComponent extends Component {
  render() {
    return (
      <div className="left">
        <div className="left-top">
          <img src={SideBar} alt="" />
        </div>
        <div className="left-bottom">
          <img src={Messages} alt="" />
        </div>
      </div>
    );
  }
}
export default LeftComponent;
