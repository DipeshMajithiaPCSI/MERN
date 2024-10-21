import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useSelector } from "react-redux";
function PrivateRoutes() {
  let auth = useSelector((state) => state?.allData?.user_details);
  return auth ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoutes;
