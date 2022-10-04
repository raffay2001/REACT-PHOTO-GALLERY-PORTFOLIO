import React from "react";

const Image = ({ picture }) => {
  return (
    <div className="image-container">
      <img src={picture?.largeImageURL} alt={picture?.tags.split(",")[0]} />
    </div>
  );
};

export default Image;
