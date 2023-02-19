import React from "react";
import "./rightbar.css";

import Profile from "../../assets/man.png";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="friends">
          <h3>Friends</h3>
          <div className="user">
            <img src={Profile} alt="" />
            <div className="online" />
            <span>John Doe</span>
          </div>
          <div className="user">
            <img src={Profile} alt="" />
            <div className="online" />
            <span>John Doe</span>
          </div>
          <div className="user">
            <img src={Profile} alt="" />
            <div className="online" />
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
