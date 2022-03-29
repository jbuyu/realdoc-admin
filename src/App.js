import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Forgot from "./pages/Auth/Forgot";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
// import DashBoard from "./pages/dashBoard/DashBoard";

import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route exact path="/dashboard/*" element={<DashBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
