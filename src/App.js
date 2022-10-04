import React, { useEffect, useState } from "react";
import { Navbar, Footer, Home, ImageDetail } from "./components";
import "./App.css";
import { getPhotos } from "./services/imageApi";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [pictures, setPictures] = useState([]);
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
        <Route path="/" element={<Home pictures={pictures} />}/>

        {/* ImageDetail  */}
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default App;
