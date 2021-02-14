import React, { Component } from "react";
import Slider from "./slider";
import pic from "../img/middelPic2.jpg";
class Content extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="content">
          <img src={pic} alt="face"></img>
          <div className="opacity"></div>
        </div>
        <Slider />
      </>
    );
  }
}

export default Content;
