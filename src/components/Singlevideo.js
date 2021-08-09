import React from "react";

const Singlevideo = (props) => {
  const { thumb } = props;

  return (
    <article className="singlevideo">
      <div className="singlevideo-thumbnail">
        <img src={thumb} alt="" />
      </div>

      <div className="singlevideo-profileimage">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLRCFpu_biul8hGuPLuvU8l63Qmz4JLa0u8Pq_HarC0=s68-c-k-c0x00ffffff-no-rj"
          alt="profile"
        />
      </div>
      <div className="singlevideo-uploaddetails">
        <h4>Video title comes here whatever it is</h4>
        <p>channel name</p>
        <p>50M views 2years ago</p>
      </div>
    </article>
  );
};

export default Singlevideo;
