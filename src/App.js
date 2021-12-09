import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sing-up-page";
import DashboardContainer from "./parts/dashboard-container";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div>
          <Routes>
            <Route exact path="/" element={<DashboardContainer />} />
            <Route path="/dashboard" element={<DashboardContainer />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}


export default App;
