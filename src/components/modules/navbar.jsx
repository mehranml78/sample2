import React, { Component } from "react";
import {Link} from "react-router-dom"
import arrow from "../../img/page2/arrow.svg"
class NavBar extends Component {
  state = {
    toggelstatus: false,
  };

  navHandler = () => {
    let toggelstatus = this.state.toggelstatus;
    this.setState({ toggelstatus: !toggelstatus });
    const navrotate = document.getElementById("btn");
    this.state.toggelstatus === false
      ? (navrotate.style.transform = "rotate(0deg)")
      : (navrotate.style.transform = "rotate(180deg)");
  };

  render() {
    const classes = this.state.toggelstatus === false ? "nav" : "nav active";
    return (
      <div className="navgroup">
        <div className="nav_btn" onClick={this.navHandler}>
          {" "}
          <div className="imgarea">
          <img src={arrow} id="btn" alt="" />{" "}

          </div>
        </div>
        <div className={classes} id="nav">
          <nav>
            <ul className="navItems">
              <a className="navItem"  href="#left">Home</a>
                {/* <Link style={{ textDecoration: 'none' }}  className="navItem" to="/">Home</Link> */}
                <Link style={{ textDecoration: 'none' }}  className="navItem" to="/">Gallary</Link>
                <Link style={{ textDecoration: 'none' }}  className="navItem" to="/">studio</Link>
                <Link style={{ textDecoration: 'none' }}  className="navItem" to="/">Equipment</Link>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
