import React from "react";
import Singlevideo from "../components/Singlevideo";
import { trendingVideosData } from "../videolist";

const Trending = () => {
  const [trendingVideos, setTrendingVideos] =
    React.useState(trendingVideosData);
  return (
    <>
      <section className="videos-section">
        {trendingVideos.map((video) => {
          return <Singlevideo {...video} />;
        })}
      </section>
    </>
  );
};

export default Trending;
