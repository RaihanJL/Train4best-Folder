import Carousel from "react-bootstrap/Carousel";
// import React from "react";
import image1 from "/public/assets/course1.png";
import image2 from "/public/assets/course2.png";
import image3 from "/public/assets/course3.png";

function CarouselC() {
  return (
    <div className="carousel-container2">
      <Carousel>
        <Carousel.Item>
          <img className="carousel-image2" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image2" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image2" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselC;
