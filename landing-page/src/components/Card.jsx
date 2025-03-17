// components/Card.jsx
import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-blue-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <div className="text-center">
        <h5 className="text-xl text-white font-semibold mb-2">{title}</h5>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;