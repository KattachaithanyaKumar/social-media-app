import React from "react";
import "./leftbar.css";

import Profile from "../../assets/man.png";
import Home from "../../assets/house.png";
import Friends from "../../assets/laugh.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Profile} alt="" />
            <span>Profile</span>
          </div>
          <div className="item">
            <img src={Home} alt="" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
