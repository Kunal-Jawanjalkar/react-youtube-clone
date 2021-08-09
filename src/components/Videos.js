import React, { useState } from "react";
import videosList from "../videolist";
import data from "../videolist";
import Singlevideo from "./Singlevideo";

const Videos = () => {
  const [videosList, setvideoList] = useState(data);

  return (
    <>
      <section className="section videos-section">
        {videosList.map((video, index) => {
          return <Singlevideo key={index} {...video} />;
        })}
      </section>
    </>
  );
};

export default Videos;
