import React, { useState } from "react";
import PublicBase from "../../components/PublicBase";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import ForgotPassword from "../../components/ForgotPassword";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function PublicScreens() {
  const dispatch = useDispatch();
  const [type, setType] = useState("login");
  const navigation = useNavigate();
  let data = [
    { email: "mitkumar", password: "12345" },
    {
      email: "dipesh",
      password: "12345",
    },
  ];

  async function login(email, password) {
    if (
      email.current?.value?.length < 1 ||
      password.current?.value?.length < 1
    ) {
      alert("Please enter all fields");
    } else {
      if (
        // email.current?.value === "dipesh" &&
        // password.current?.value === "12345"
        data.map((val) => {
          return (
            email.current?.value === val.email &&
            password.current?.value === val.password
          );
        })
      ) {
        dispatch({
          type: "USER_DETAILS",
          payload: { email: "mitkumar", password: "12345" },
        });

        await navigation("/");
      } else {
        alert("Incorrect email or password!");
      }
    }
  }

  return (
    <div>
      <PublicBase>
        {type === "login" ? (
          <Login setType={setType} login={login} />
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
