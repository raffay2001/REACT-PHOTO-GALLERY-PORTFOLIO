import React from "react";
import Image from "./Image";

const ImageGrid = ({ pictures }) => {
  return (
    <div className="image-grid-parent">
      <span className="my-work-heading">Gallery.</span>
      <div className="image-grid">
        {pictures?.map((picture) => (
          <Image key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
