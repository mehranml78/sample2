import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

class Left extends Component {
    state = {  }
    render() { 
        return (
            <div id="left">
            <div className="logo"></div>
            <div className="text">
              <h1>Video & Sound</h1>
              <canvas id="myCanvas"   width="800" height="180"  ></canvas>
              {/* <canvas id="myCanvas" width="200" height="100"  style={{border:"1px solid #000000"}} > </canvas>  */}
            </div>
            <div >
              <a id="button" href="#contact">  Next   <FontAwesomeIcon className='font' icon={faArrowCircleRight} /> </a>
            </div>
          </div>


          );
    }
}
 
export default Left;