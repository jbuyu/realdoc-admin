import GroupIcon from "@mui/icons-material/Group";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CompletedList from "../../pages/completedList/CompletedList";
import Consultation from "../../pages/consultationList/Consultation";
import ConsultationList from "../../pages/consultationList/ConsultationList";
import { PatientList } from "../../pages/patientList/PatientList";
import PendingList from "../../pages/pendingList/PendingList";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AddTaskIcon from '@mui/icons-material/AddTask';
import "./sidebar.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <Link to="/dashboard" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" /> Consultations
          </Link>
          <Link to="/dashboard/pending" className="sidebarListItem">
            <PendingActionsIcon className="sidebarIcon" /> Pending
          </Link>
          <Link to="/dashboard/completed" className="sidebarListItem">
            <AddTaskIcon className="sidebarIcon" /> Completed
          </Link>
          <Link to="/dashboard/patients" className="sidebarListItem">
            <GroupAddIcon className="sidebarIcon" /> My Patients
          </Link>
        </div>
        <ul className="sidebarList">
          <Routes>
            <Route
              path=""
              className="sidebarListItem"
              element={<ConsultationList />}
            >
            </Route>
            <Route
              path="consultations/:id"
              className="sidebarListItem"
              element={<Consultation />}
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
