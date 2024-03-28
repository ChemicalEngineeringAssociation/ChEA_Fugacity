import React from "react";
import "./SpeakerCard.css"; // Import CSS file for styling

const SpeakerCard = ({ speaker }) => {
  const { name, image, description } = speaker; // Destructure speaker object

  return (
    <div className="relative bg-white rounded-lg p-6 mb-8 flex-1 mx-2 overflow-hidden SpeakerCard">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform scale-100 hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white z-10 p-2 rounded-b-lg transition-transform duration-300 opacity-0 pointer-events-none hover:opacity-100 transform translate-y-full">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white z-0 p-2 rounded-b-lg">
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default SpeakerCard;
