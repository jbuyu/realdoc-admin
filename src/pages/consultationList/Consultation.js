import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "react-tabs/style/react-tabs.css";
import {
  getConsultation,
  reset,
  updateConsultation,
} from "../../features/consultations/consultationSlice";

export default function Consultation() {
  const { id } = useParams();
  const Style = {
    height: 200,
    width: 200,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { consultation, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.consultations
  );

  //state

  const [consultationValue, setConsultationValue] = useState("");

  //fn
  const markComplete = (e) => {
    e.preventDefault();
    let consultationData = {
      consultationId: id,
      status: "Completed",
      user: user._id,
    };
    dispatch(updateConsultation(consultationData));
  };
  const handleDiagnosis = (e) => {
    e.preventDefault();
    let consultationData = {
      consultationId: id,
      diagnosis: consultationValue,
      user: user._id,
    };
    dispatch(updateConsultation(consultationData));
  };
  const handleChange = (e) => {
    setConsultationValue(e.target.value);
  };

  useEffect(() => {
    if (isError) {
      console.log("error", message);
    }

    if (!user) {
      navigate("/");
    }
    dispatch(getConsultation(id));
    if (consultation && consultation.diagnosis) {
      console.log("setting...", consultation.diagnosis);
      setConsultationValue(consultation.diagnosis);
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, message, isError]);
  return (
    <div className="consultation">
      <div className="consultation-container">
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "4rem",
            width: "80%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "50%",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
                justifyContent: "flex-start",
                // width: "80%",
              }}
            >
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <div className="details-row">
                  <div className="details-label">Name:</div>
                  <div>
                    {consultation &&
                      consultation.firstName + "   " + consultation.lastName}
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-label">Phone:</div>
                  <div>{consultation && consultation.phoneNo}</div>
                </div>
                <div className="details-row">
                  <div className="details-label">Email:</div>
                  <div>{consultation && consultation.email}</div>
                </div>
                <div className="details-row">
                  <div className="details-label">DOB:</div>
                  <div>
                    {consultation &&
                      format(new Date(consultation.dateOfBirth), "MM/dd/yyyy")}
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-label">Type:</div>
                  <div>{consultation && consultation.consultationType}</div>
                </div>
                <div className="details-row">
                  <div className="details-label">Date Created:</div>
                  <div>
                    {consultation &&
                      format(new Date(consultation.createdAt), "MM/dd/yyyy")}
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Box>
          {consultation && consultation.gender === "Male" ? (
            <CardMedia
              component="img"
              style={Style}
              image="/male.png"
              alt="male"
            />
          ) : (
            <CardMedia
              component="img"
              style={Style}
              image="/female.png"
              alt="female"
            />
          )}
        </Card>
        <h4 className="symptoms-header">symptoms</h4>
        <div className="symptoms-container">
          <div className="symptoms">
            {consultation && consultation.symptoms}
          </div>
        </div>
        <h4 className="dignosis-header">Diagnosis</h4>
        <form onSubmit={handleDiagnosis} className="diagnosis-form">
          <textarea
            onChange={handleChange}
            value={consultationValue || consultation.diagnosis}
          ></textarea>
          <div className="diagnosis-btn-container">
            <button type="submit" className="update-btn">
              Update
            </button>
            {consultation && consultation.status === "Pending" && (
              <button onClick={markComplete} className="mark-btn">
                Mark Complete
              </button>
            )}
          </div>
        </form>
        {isLoading && <img src="/loader.gif" alt="" />}
        {/* {isError && <p>{message}</p>} */}
        {/* {isSuccess && toast.success("Consultation Completed!")} */}
      </div>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
    </div>
  );
}
