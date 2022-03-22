import React from "react";
import "./topbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src="./logo.png" alt="app_logo" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <AccountCircleIcon className="material-icon" />
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon className="material-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
