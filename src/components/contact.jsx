import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./modules/navbar";
import logo from "../img/page2/logo.svg";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="contact">
          <img src={logo} alt="" />
          <a id="home-btn" href="#left">
            {" "}
            Main page <FontAwesomeIcon className="font" icon={faHome} />{" "}
          </a>
        </div>
        <NavBar />
      </>
    );
  }
}

export default Contact;
