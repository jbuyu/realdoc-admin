import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupIcon from "@mui/icons-material/Group";
import { Link, Routes, Route } from "react-router-dom";
import ConsultationList from "../../pages/consultationList/ConsultationList";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <Link to="/dashboard/consultations" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> Consultations
          </Link>
          <Link to="#" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> My Patients
          </Link>
          <Link to="/" className="sidebarListItem active">
            <LineStyleIcon className="sidebarIcon" /> Analytics
          </Link>
        </div>
        <ul className="sidebarList">
          <Routes>
            <Route
              path="consultations"
              className="sidebarListItem"
              element={<ConsultationList />}
            ></Route>
          </Routes>
        </ul>
      </div>
    </div>
  );
}
