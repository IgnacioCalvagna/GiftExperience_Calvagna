import React from "react";
import { Carousel } from "react-bootstrap";
import './carouselDetails.css';
const carouselDetails = ({ product, i }) => {
  const lasFotos = product.img.map((img, i) => {
    return (
      <Carousel.Item key={i}>
        <div >
          <img className=" w-70" src={img} alt="First slide" />
        </div>
      </Carousel.Item>
    );
  });

  return (
    <>
      <Carousel fade className="imgCarru">
        {lasFotos}
      </Carousel>
    </>
  );
};

export default carouselDetails;
