import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import "react-tabs/style/react-tabs.css";
import { useHistory } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  getConsultation,
  reset,
} from "../../features/consultations/consultationSlice";
import { bgcolor } from "@mui/system";

export default function Consultation({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  let consultationId = match.params.id;

  const { user } = useSelector((state) => state.auth);
  const { consultation, isLoading, isError, message } = useSelector(
    (state) => state.consultations
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      history.push("/login");
    }
    dispatch(getConsultation(consultationId));
    console.log("cons", consultation.gender);
    return () => {
      dispatch(reset());
    };
  }, [dispatch, history, message, isError]);
  return (
    <div className="consultation">
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "4rem",
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
                <div>{consultation && consultation.dateOfBirth}</div>
              </div>
              <div className="details-row">
                <div className="details-label">Type:</div>
                <div>{consultation && consultation.consultationType}</div>
              </div>
              <div className="details-row">
                <div className="details-label">Symptoms:</div>
                <div>{consultation && consultation.symptoms}</div>
              </div>
              <div className="details-row">
                <div className="details-label">Created on:</div>
                <div>{consultation && consultation.createdAt}</div>
              </div>
            </Typography>
          </CardContent>
        </Box>
        {consultation && consultation.gender === "Male" ? (
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image="/male.png"
            alt="male"
          />
        ) : (
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image="/female.png"
            alt="female"
          />
        )}
      </Card>
    </div>
  );
}
