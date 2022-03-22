import React from "react";
// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";

import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart data={userData} title="Consultation Analytics" grid dataKey="Active User"/> */}

    </div>
  );
}
