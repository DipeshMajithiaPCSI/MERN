import React, { useState } from "react";
import PublicBase from "../../components/PublicBase";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import ForgotPassword from "../../components/ForgotPassword";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Request from 'axios'
import { base_url } from "../../components/Baseurl";

function PublicScreens() {
  const dispatch = useDispatch();
  const [type, setType] = useState("login");
  const navigation = useNavigate();
 

  async function login(email, password) {
    if (
      email.current?.value?.length < 1 ||
      password.current?.value?.length < 1
    ) {
      alert("Please enter all fields");
    } else {
      // console.log("Here")
      Request.post(`${base_url}registration/login`,{
        email:email.current?.value,
        password:password.current?.value
      }).then((res)=>{  
        // console.log(res.data.results[0])
        dispatch({
          type: "USER_DETAILS",
          payload: res?.data?.results[0],
        });

         navigation("/");
      }).catch((err)=>{
        alert(`Error: ${err?.response?.data?.message}`)
        console.log("Error logging in",err)
      }).finally(()=>{
        console.log("Function Ended")
      })
        
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
