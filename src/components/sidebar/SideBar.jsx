import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupIcon from "@mui/icons-material/Group";
import { Link, Routes, Route } from "react-router-dom";
import ConsultationList from "../../pages/consultationList/ConsultationList";
import { PendingList } from "../../pages/pendingList/PendingList";
import { CompletedList } from "../../pages/completedList/CompletedList";
import { PatientList } from "../../pages/patientList/PatientList";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <Link to="/dashboard/consultations" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> Consultations
          </Link>
          <Link to="/dashboard/pending" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> Pending
          </Link>
          <Link to="/dashboard/completed" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> Completed
          </Link>
          <Link to="/dashboard/patients" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> My Patients
          </Link>
          {/* <Link to="/" className="sidebarListItem active">
            <LineStyleIcon className="sidebarIcon" /> Analytics
          </Link> */}
        </div>
        <ul className="sidebarList">
          <Routes>
            <Route
              path="consultations"
              className="sidebarListItem"
              element={<ConsultationList />}
            >
            </Route>
            <Route
              path="pending"
              className="sidebarListItem"
              element={<PendingList />}
            >
            </Route>
            <Route
              path="completed"
              className="sidebarListItem"
              element={<CompletedList />}
            >
            </Route>
            <Route
              path="patients"
              className="sidebarListItem"
              element={<PatientList />}
            >
            </Route>
          </Routes>
        </ul>
      </div>
    </div>
  );
}
