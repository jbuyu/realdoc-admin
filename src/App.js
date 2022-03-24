import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/home/Home";



function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
