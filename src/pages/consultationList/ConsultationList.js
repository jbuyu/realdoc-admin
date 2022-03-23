import React, { useEffect } from "react";
import "./consultation.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { getConsultations } from "../../components/features/consultations/consultationSlice";

export default function ConsultationList() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getConsultations());
    console.log("milan");
  }, [dispatch]);
  return <div className="userList"></div>;
}
