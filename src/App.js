import React, { useEffect, useState } from "react";
import { Navbar, Footer, Home, ImageDetail } from "./components";
import "./App.css";
import { getPhotos } from "./services/imageApi";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [singlePicture, setSinglePicture] = useState({});

  const fetchSinglePhoto = async (id) => {
    const response = await getPhotos(
      `https://pixabay.com/api/?key=21114388-4a21c4c995e14e9ba7090ae35&image_type=photo&id=${id}`
    );
    if (response?.hits?.length > 0) {
      setSinglePicture(response?.hits[0]);
      console.log(response?.hits[0]);
    } else {
      setSinglePicture({});
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await getPhotos(
        `https://pixabay.com/api/?key=21114388-4a21c4c995e14e9ba7090ae35&q="aesthetic"&image_type=photo`
      );
      // console.log(response);
      if (response?.hits?.length > 0) {
        setPictures(response?.hits);
        console.log(response?.hits);
      } else {
        setPictures([]);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="parent-container">
      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Home  */}
        <Route path="/" element={<Home fetchSinglePhoto={fetchSinglePhoto} pictures={pictures} />} />

        {/* ImageDetail  */}
        <Route path="/image/:id" element={<ImageDetail singlePicture={singlePicture} />} />
      </Routes>
    </div>
  );
};

export default App;
