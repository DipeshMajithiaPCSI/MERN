import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function PrivateRoutes({ auth, setAuth }) {
  return auth ? (
    <>
      <Header setAuth={setAuth} />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoutes;
