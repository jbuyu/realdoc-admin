import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultationList from "./pages/consultationList/ConsultationList";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/consultations" element={<ConsultationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
