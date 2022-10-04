import React from "react";
import { HeroBanner, ImageGrid } from "./index";

const Home = ({ pictures }) => {
  return (
    <>
      {/* HeroBanner */}
      <HeroBanner />
      {/* ImageGrid  */}
      <ImageGrid pictures={pictures} />
    </>
  );
};

export default Home;
