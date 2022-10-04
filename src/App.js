import React, { useEffect, useState } from "react";
import { Navbar, HeroBanner, ImageGrid, Footer } from "./components";
import "./App.css";
import { getPhotos } from "./services/imageApi";

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
        console.log(pictures);     
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
      {/* HeroBanner */}
      <HeroBanner />
      {/* ImageGrid  */}
      <ImageGrid pictures={pictures}/>
      {/* Footer  */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
