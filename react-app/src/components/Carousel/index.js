import React, { useState } from 'react';

const Carousel = ({ games }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const itemWidth = 300;

  const prevSlide = () => {
    const newPosition = currentPosition + itemWidth;
    if (newPosition >= 0) {
      setCurrentPosition(0);
    } else {
      setCurrentPosition(newPosition);
    }
  };

  const nextSlide = () => {
    const maxPosition = -(itemWidth * (games.length - 1));
    const newPosition = currentPosition - itemWidth;
    if (newPosition <= maxPosition) {
      setCurrentPosition(maxPosition);
    } else {
      setCurrentPosition(newPosition);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentPosition}px)` }}
      >
        {games.map((game, index) => (
          <div className="item" key={index}>{game}</div>
        ))}
      </div>
      <button className="carousel-prev" onClick={prevSlide}>Previous</button>
      <button className="carousel-next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
