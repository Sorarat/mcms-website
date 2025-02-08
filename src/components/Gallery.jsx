import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import GalleryDescription from "./GalleryDescription";
import img3 from "../images/img3.JPG";

const Gallery = () => {
  const images = [
    {
      original: img3,
      thumbnail: img3,
      title: "Orientation",
      description: "The MCMS Orientation Event welcomed new members with engaging sessions on Malay culture and Islamic values. Attendees connected with fellow members and learned about the club’s activities, setting the stage for an exciting year ahead."
    },
    {
      original: img3,
      thumbnail: img3,
      title: "Raya",
      description: "The MCMS Orientation Event welcomed new members with engaging sessions on Malay culture and Islamic values. Attendees connected with fellow members and learned about the club’s activities, setting the stage for an exciting year ahead."
    },
    {
      original: img3,
      thumbnail: img3,
      title: "Iftarawih",
      description: "The MCMS Orientation Event welcomed new members with engaging sessions on Malay culture and Islamic values. Attendees connected with fellow members and learned about the club’s activities, setting the stage for an exciting year ahead."
    },
    {
      original: img3,
      thumbnail: img3,
      title: "Sports Day",
      description: "The MCMS Orientation Event welcomed new members with engaging sessions on Malay culture and Islamic values. Attendees connected with fellow members and learned about the club’s activities, setting the stage for an exciting year ahead."
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
            showDes
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
