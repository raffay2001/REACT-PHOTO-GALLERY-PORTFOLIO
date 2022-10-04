import React from "react";
import { Navbar, HeroBanner, ImageGrid, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="parent-container">
      {/* Navbar */}
      <Navbar />
      {/* HeroBanner */}
      <HeroBanner />
      {/* ImageGrid  */}
      {/* <ImageGrid /> */}
      {/* Footer  */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
