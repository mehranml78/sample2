import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./modules/navbar";
class Contact extends Component {
  state = {};
  render() {
    return (<>
      <div id="contact">
        <img    src="./img/page2/logo.svg" alt=""/>
        <a id="home-btn" href="#left">
          {" "}
          Main page <FontAwesomeIcon className="font" icon={faHome} />{" "}
        </a>

        
       
      </div>
          <NavBar/></>
    );
  }
}

export default Contact;
