import React, { useState } from "react";
import PublicBase from "../../components/PublicBase";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import ForgotPassword from "../../components/ForgotPassword";
function PublicScreens() {
  const [type, setType] = useState("login");
  return (
    <div>
      <PublicBase>
        {type === "login" ? (
          <Login setType={setType} />
        ) : type === "signup" ? (
          <SignUp setType={setType} />
        ) : (
          <ForgotPassword setType={setType} />
        )}
      </PublicBase>
    </div>
  );
}

export default PublicScreens;
