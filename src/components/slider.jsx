import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
function Slider() {


    return (
        < >
            <Carousel className="img_slider"
                data-aos="fade-left">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/right.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/right2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/right3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>




        </>
    );

}

export default Slider;