import React from "react";
import Image from "./Image";

const ImageGrid = ({ pictures, fetchSinglePhoto }) => {
  return (
    <div className="image-grid-parent">
      <span className="my-work-heading">Gallery.</span>
      <div className="image-grid">
        {pictures?.map((picture) => (
          <Image fetchSinglePhoto={fetchSinglePhoto} key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
