import React from "react";
import "./featuredinfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Consultations</span>
        <div className="featuredConsultationContainer">
          <img
            className="featured-icon"
            src="./consultations.png"
            alt="consult_icon"
          />
          <span className="featuredConsultation"> 20</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Completed</span>
        <div className="featuredConsultationContainer">
          <img
            className="featured-icon"
            src="./completed.png"
            alt="completed_consult"
          />
          <span className="featuredConsultation"> 18</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Pending</span>
        <div className="featuredConsultationContainer">
          <img
            className="featured-icon"
            src="./pending.png"
            alt="pending_consult"
          />
          <span className="featuredConsultation"> 2</span>
        </div>
      </div>
    </div>
  );
}
