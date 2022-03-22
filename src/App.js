import { Counter } from "./features/counter/Counter";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultationList from "./pages/consultationList/ConsultationList";
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/consultations" element={<ConsultationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

