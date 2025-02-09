import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import GalleryDescription from "./GalleryDescription";
import orientation from "/images/orientation.JPG";
import raya from "/images/raya.jpg";
import iftarawih from "/images/iftarawih.JPG";
import sports from "/images/sportsDay.JPG";

const Gallery = () => {
  const images = [
    {
      original: orientation,
      thumbnail: orientation,
      title: "Orientation",
      description: "The MCMS Orientation Event welcomed new members with engaging sessions on Malay culture and Islamic values. Attendees connected with fellow members and learned about the club’s activities, setting the stage for an exciting year ahead."
    },
    {
      original: raya,
      thumbnail: raya,
      title: "Raya",
      description: "The MCMS Raya event brought together members for a celebration of the Malay culture with traditional performances and festive activities."
    },
    {
      original: iftarawih,
      thumbnail: iftarawih,
      title: "Iftarawih",
      description: "The Iftarawih gathering was a time for our members to come together for communal prayers and a shared meal, fostering a spirit of unity and reflection."
    },
    {
      original: sports,
      thumbnail: sports,
      title: "Sports Day",
      description: "MCMS Sports Day provided a fun and competitive atmosphere, where members participated in various sports activities to build teamwork and friendship."
    },
  ];

  // State to track the currently selected image title and description
  const [currentTitle, setCurrentTitle] = useState(images[0].title);
  const [currentDescription, setCurrentDescription] = useState(images[0].description);

  const handleSlideChange = (index) => {
    setCurrentTitle(images[index].title);
    setCurrentDescription(images[index].description);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Image Gallery */}
      <div className="flex flex-col md:flex-row md:gap-8 md:items-center">
        <div className="flex-1">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showThumbnails={true}
            onSlide={handleSlideChange} // Update description on slide change
          />
        </div>
         {/* Independent Description */}
        <div className="mt-4 md:mt-0 md:flex-1 mb-28">
          <GalleryDescription title={currentTitle} description={currentDescription} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
