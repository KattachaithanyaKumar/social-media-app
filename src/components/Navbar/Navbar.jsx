import React from "react";
import "./navbar.css";

import logo from "../../assets/logo (1).png";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <WidgetsOutlinedIcon />
        <div className="searchBar">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="nav-right">
        <PersonOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
