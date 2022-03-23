import React, { useEffect } from "react";
import "./consultation.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getConsultations, reset } from "../../features/consultations/consultationSlice";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/Spinner";

export default function ConsultationList() {
  const dispatch = useDispatch();
  const history = useHistory();

  //selectors
  const { user } = useSelector((state) => state.auth);

  const { consultations, isLoading, isError, message } = useSelector(
    (state) => state.consultations
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      history.push("/login");
    }
    dispatch(getConsultations());
    return ()=>{
      dispatch(reset())
    }
  }, [dispatch, history, message, isError]);

  if(isLoading){
    return <Spinner/>
  }
  return <div className="userList"></div>;
}
