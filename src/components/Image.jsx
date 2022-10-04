import React from "react";
import { Link } from "react-router-dom";

const Image = ({ picture, fetchSinglePhoto }) => {
  // const id = picture.id; 
  const fetchPhoto = () => {
    fetchSinglePhoto(picture.id);
  };
  return (
    <div className="image-container">
      <Link to={`/image/${picture.id}`}>
        <img
          onClick={() => fetchPhoto()}
          src={picture?.largeImageURL}
          alt={picture?.tags.split(",")[0]}
        />
      </Link>
    </div>
  );
};

export default Image;
