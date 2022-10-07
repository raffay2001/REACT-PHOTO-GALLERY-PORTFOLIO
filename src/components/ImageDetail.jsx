import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTags, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faEye, faRectangleList, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export const TagPill = ({ tageName }) => {
  return <span className="tag-pill-conatainer">{tageName}</span>;
};

export const TagContainer = ({ tags }) => {
  const tagsArray = tags?.split(",");
  return (
    <>
      {tagsArray?.map((item) => (
        <TagPill tageName={item} />
      ))}
    </>
  );
};

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
          <div className="details-container">
            <span className="picture-detail">
              <FontAwesomeIcon icon={faTags} /> tags:
            </span>{" "}
            <TagContainer tags={singlePicture?.tags} />
          </div>

          <div className="details-container">
            <span className="picture-detail">
              <FontAwesomeIcon icon={faRectangleList} /> collections: 
            </span>{" "}
            <span className="img-content">{singlePicture?.collections}</span>
          </div>

          <div className="details-container">
            <span className="picture-detail">
              <FontAwesomeIcon icon={faThumbsUp} /> likes:
            </span>{" "}
            <span className="img-content">{singlePicture?.likes}</span>
          </div>

          <div className="details-container">
            <span className="picture-detail">
              <FontAwesomeIcon icon={faEye} /> views:
            </span>{" "}
            <span className="img-content">{singlePicture?.views}</span>
          </div>

          <div className="details-container">
            <span className="picture-detail">
              <FontAwesomeIcon icon={faDownload} /> downloads :
            </span>{" "}
            <span className="img-content">{singlePicture?.downloads}</span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ImageDetail;
