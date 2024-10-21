import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Protected/Home";
import Courses from "../pages/Protected/Courses";
import AboutUs from "../pages/Protected/AboutUs";
import ContactUs from "../pages/Protected/ContactUs";
import Inquiry from "../pages/Protected/Inquiry";
import PrivateRoutes from "./ProtectedRoute";
import PublicScreens from "../pages/Public/PublicScreens";
import CoursesList from "../pages/Protected/CoursesList";
import CourseContent from "../pages/Protected/CourseContent";
function NavRoutes() {
  const [auth, setAuth] = useState(false);  
  const [userName,SetUserName]=useState(" ");
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes auth={auth} setAuth={setAuth} userName={userName} />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/courseslist" element={<CoursesList/>}/>
          <Route path="/coursecontent" element={<CourseContent/>}/>
          </Route>
          <Route path="/login" element={<PublicScreens setAuth={setAuth} SetUserName={SetUserName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavRoutes;
