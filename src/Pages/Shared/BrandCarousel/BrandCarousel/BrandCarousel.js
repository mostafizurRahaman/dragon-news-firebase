import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../../../../Assets/Img/carousel1.jpg'; 
import img2 from '../../../../Assets/Img/carousel2.jpg'; 
const BrandCarousel = () => {
   return (
      <div className="my-3">
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={img2}
                  alt="First slide"
               />
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default BrandCarousel;
