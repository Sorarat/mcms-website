import React from "react";

const GalleryDescription = ({ title, description }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-gray-800">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default GalleryDescription;
