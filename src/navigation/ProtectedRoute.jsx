import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
function PrivateRoutes({ auth, setAuth,userName }) {
  return auth ? (
    <>
      <Header setAuth={setAuth} userName={userName}/>
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoutes;
