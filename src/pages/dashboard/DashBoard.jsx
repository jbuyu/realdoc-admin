import React from "react";
import Sidebar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topbar/TopBar";
import "./dashboard.css";

export default function DashBoard() {
  return (
    <div className="home">
      <TopBar />
      <Sidebar />
    </div>
  );
}
