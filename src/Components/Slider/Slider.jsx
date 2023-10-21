import React, { useState } from "react";

const Slider = ({ filter }) => {
  const [images, setImages] = useState([]);

  filter.map((photo) => images.push(photo.photo));
  console.log(images);
  return (
    <div className="w-full flex h-max">
      <div className="carousel mt-24 md:w-8/12 md:h-[500px] mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={images[0]}
            className="w-full mx-auto md:h-[500px] md:w-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={images[1]}
            className="w-full mx-auto md:h-[500px] md:w-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={images[2]}
            className="w-full mx-auto md:h-[500px] md:w-[500px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
