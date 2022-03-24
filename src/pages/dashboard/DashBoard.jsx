import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topbar/TopBar";
import "./dashboard.css";

export default function DashBoard() {
  const navigate = useNavigate()
  //redux
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {

    if (!user) {
      navigate("/");
    }

  }, [user]);

  return (
    <div className="dashboard">
      <TopBar />
      <Sidebar />
    </div>
  );
}
