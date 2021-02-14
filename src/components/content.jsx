import React, { Component } from "react";
import Slider from "./slider";

class Content extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="content">
          <img src="./img/middelPic2.jpg " alt="face"></img>
          <div className="opacity"></div>
          
        </div>
        <Slider />
      </>
    );
  }
}

export default Content;
