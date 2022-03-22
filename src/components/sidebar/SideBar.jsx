import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" /> Home
            </li>
            <Link to="/consultations" className="sidebarListItem">
              <GroupIcon className="sidebarIcon" /> Consultations
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" /> Analytics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
