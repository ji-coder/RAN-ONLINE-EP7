import React from "react";

const ServicesHeroSection = ({ cover, altimg }) => {
  return (
    <div className="relative w-full mt-20 overflow-hidden">
      {/* Wrapper for the image */}
      <div className="h-full px-5"> {/* Add padding on left and right */}
        <img
          src={cover}
          alt={altimg}
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
    </div>
  );
};

export default ServicesHeroSection;
