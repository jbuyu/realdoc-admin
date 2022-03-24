import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { format } from "date-fns";

import { Link } from "react-router-dom";
import "./consultation.css";

import {
  getConsultations,
  reset,
} from "../../features/consultations/consultationSlice";
import "./consultation.css";

export default function ConsultationList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //selectors
  const { user } = useSelector((state) => state.auth);

  const { consultations, isLoading, isError, message } = useSelector(
    (state) => state.consultations
  );

  //table data

  const columns = [
    // { field: "_id", headerName: "ID", width: 130 },
    {
      field: "createdAt",
      headerName: "Date Created",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="">
              {format(new Date(params.row.createdAt), "MM/dd/yyyy")}
            </div>
          </div>
        );
      },
    },
    { field: "consultationType", headerName: "Type", width: 120 },
    { field: "gender", headerName: "Gender", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="">
              {params.row.firstName + " " + params.row.lastName}
            </div>
          </div>
        );
      },
    },
    { field: "phoneNo", headerName: "Phone Number", width: 120 },
    {
      field: "dateOfBirth",
      headerName: "DOB",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="">
              {format(new Date(params.row.dateOfBirth), "MM/dd/yyyy")}
            </div>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "symptoms", headerName: "Symptoms", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {params.row.status === "pending" ? (
              <div className="viewButton">PENDING</div>
            ) : (
              <div className="viewButton">COMPLETED</div>
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/dashboard/consultations/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">view</div>
            </Link>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getConsultations());
    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, message, isError]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="consultationsList">
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={consultations}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
