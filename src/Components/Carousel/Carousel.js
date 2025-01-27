import React, { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[438px] overflow-hidden flex items-center justify-center">
      <button
        className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <img
        src={`${process.env.PUBLIC_URL}${images[currentIndex]}`}
        alt="carousel-item"
        className="w-full h-full object-cover rounded-[28px]"
      />
      <button
        className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={handleNext}
      >
        &#8594;
      </button>
    </div>
  );
}