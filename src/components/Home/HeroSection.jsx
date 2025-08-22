import React, { useState, useEffect } from "react";
import cover01 from '../../assets/images/cover/COVER-PHOTO.png';
import cover1 from '../../assets/images/cover/cover1.jpg';
import cover2 from '../../assets/images/cover/cover2.jpg';
import cover3 from '../../assets/images/cover/cover3.jpg';

const Home = () => {
  const slides = [
    {
      id: 1,
      image: cover01,
    },
    {
      id: 2,
      image: cover2,
    },
    {
      id: 3,
      image: cover3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full mt-20 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: 'flex',
          width: '100%',
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-full relative"
            style={{
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover rounded-lg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the image covers the area
                maxWidth: "100%", // Avoids image overflow
                maxHeight: "100%", // Ensures the image scales within the container

              }}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-green-500" : "bg-gray-400"
              }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>
    </div>
  );
};

export default Home;
