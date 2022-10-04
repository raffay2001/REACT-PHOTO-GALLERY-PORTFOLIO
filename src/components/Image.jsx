import React from "react";
import { Link } from "react-router-dom";

const Image = ({ picture }) => {
  return (
    <div className="image-container">
      <Link to={`/image/${picture.id}`}>
        <img src={picture?.largeImageURL} alt={picture?.tags.split(",")[0]} />
      </Link>
    </div>
  );
};

export default Image;
