import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import first from "../img/right.jpg";
import second from "../img/right2.jpg";
import thrid from "../img/right3.jpg";
function Slider() {
  return (
    <>
      <Carousel className="img_slider" data-aos="fade-left">
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thrid} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
