import React from "react";

const ImageDetail = ({ singlePicture }) => {
  return (
    <>
      <div className="image-detail-container">
        <div className="image-detail-parent">
          <img
            src={singlePicture?.largeImageURL}
            alt={singlePicture?.tags?.split(",")[0]}
          />
        </div>

        <div className="image-details">
          <p>Tags: {singlePicture?.tags}</p>
          <p>Collections: {singlePicture?.collections}</p>
          <p>Likes: {singlePicture?.likes}</p>
          <p>Views: {singlePicture?.views}</p>
          <p>Downloads: {singlePicture?.downloads}</p>
        </div>
      </div>
    </>
  );
};

export default ImageDetail;
