import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-blue-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
      <div className="flex justify-center">
        <img
          src={imgSrc}
          alt={title}
          className="w-32 h-32 object-contain mb-4 rounded-lg"
        />
      </div>
      <div className="text-center">
        <h5 className="text-xl text-white font-semibold mb-2">{title}</h5>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;