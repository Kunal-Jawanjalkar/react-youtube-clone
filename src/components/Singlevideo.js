import React from "react";

const Singlevideo = (props) => {
  const { thumb, profile, title, channelName, views, uploadDate } = props;

  return (
    <article className="singlevideo">
      <div className="singlevideo-thumbnail">
        <img src={thumb} alt="" />
      </div>

      <div className="singlevideo-profileimage">
        <img src={profile} />
      </div>
      <div className="singlevideo-uploaddetails">
        <h4>{title}</h4>
        <p>{channelName}</p>
        <p>
          {views} views {uploadDate}
        </p>
      </div>
    </article>
  );
};

export default Singlevideo;
