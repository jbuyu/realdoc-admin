import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/Spinner";
import {
  getConsultations,
  reset
} from "../../features/consultations/consultationSlice";
import "./consultation.css";

export default function ConsultationList() {
  const dispatch = useDispatch();
  const history = useHistory();

  //selectors
  const { user } = useSelector((state) => state.auth);

  const { consultations, isLoading, isError, message } = useSelector(
    (state) => state.consultations
  );

  //table data

  const columns = [
    // { field: "_id", headerName: "ID", width: 130 },
    { field: "createdAt", headerName: "Date Created", width: 130 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "dateOfBirth", headerName: "DOB", width: 130 },
    { field: "consultationType", headerName: "Type", width: 70 },
    { field: "phoneNo", headerName: "Phone Number", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "symptoms", headerName: "Symptoms", width: 130 },
  ];
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      history.push("/login");
    }
    dispatch(getConsultations());
    return () => {
      dispatch(reset());
    };
  }, [dispatch, history, message, isError]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={consultations}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
