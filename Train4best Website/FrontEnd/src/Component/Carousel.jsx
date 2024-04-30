import Carousel from "react-bootstrap/Carousel";
// import React from "react";
import image1 from "../../public/assets/product-1.png";
import image2 from "../../public/assets/product-2.png";
import image3 from "../../public/assets/product-3.png";

function CarouselA() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img className="carousel-image" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselA;
