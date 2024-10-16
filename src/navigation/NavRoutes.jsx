import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Protected/Home";
import Courses from "../pages/Protected/Courses";
import AboutUs from "../pages/Protected/AboutUs";
import ContactUs from "../pages/Protected/ContactUs";
import Inquiry from "../pages/Protected/Inquiry";
import PrivateRoutes from "./ProtectedRoute";
import PublicScreens from "../pages/Public/PublicScreens";
import Header from "../components/Header";
import Footer from "../components/Footer";
function NavRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
          <Route path="/login" element={<PublicScreens />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavRoutes;
