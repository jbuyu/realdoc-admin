import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Sidebar from "../../components/sidebar/SideBar";
import Consultation from "../consultationList/Consultation";
import ConsultationList from "../consultationList/ConsultationList";
import "./home.css";


export default function Home() {
  const history = useHistory()
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/consultations" component={ConsultationList} />
        <Route path="/consultation/:id" component={Consultation} />
        <Route path="/" component={FeaturedInfo} />
      </Switch>
    </Router>
  );
}

{
  /* <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Consultation Analytics" grid dataKey="Active User"/>

    </div> */
}
