import React from "react";
import { HeroBanner, ImageGrid } from "./index";

const Home = ({ pictures, fetchSinglePhoto }) => {
  return (
    <>
      {/* HeroBanner */}
      <HeroBanner />
      {/* ImageGrid  */}
      <ImageGrid fetchSinglePhoto={fetchSinglePhoto} pictures={pictures} />
    </>
  );
};

export default Home;
