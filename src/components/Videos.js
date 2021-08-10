import React, { useState } from "react";
import Singlevideo from "./Singlevideo";
import { videosList } from "../videolist";

const Videos = () => {
  const [Videos, setVideos] = useState(videosList);

  return (
    <>
      <section className="section videos-section">
        {Videos.map((video, index) => {
          return <Singlevideo key={index} {...video} />;
        })}
      </section>
    </>
  );
};

export default Videos;
