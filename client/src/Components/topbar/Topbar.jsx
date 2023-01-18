import React from "react";
import "./topbar.css";
import { Email, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Welcome Talia,</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Email fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
