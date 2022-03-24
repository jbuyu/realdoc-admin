import React from "react";
import { Route, Routes } from "react-router-dom";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Sidebar from "../../components/sidebar/SideBar";
import Consultation from "../consultationList/Consultation";
import ConsultationList from "../consultationList/ConsultationList";
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
