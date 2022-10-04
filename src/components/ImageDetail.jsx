import React from "react";
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  return (
    <>
      <h1>
        Image Details of Image no. {useParams()["id"]}
      </h1>
    </>
  );
};

export default ImageDetail;
