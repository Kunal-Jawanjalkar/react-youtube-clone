import React from "react";
import Singlevideo from "../components/Singlevideo";
import { subscriptionsData } from "../videolist";

const Subscriptions = () => {
  const [subscribedVideos, setSubscribedVideos] =
    React.useState(subscriptionsData);
  return (
    <section className="videos-section">
      {subscriptionsData.map((item) => {
        return <Singlevideo {...item} />;
      })}
    </section>
  );
};

export default Subscriptions;
