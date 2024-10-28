import React, { useRef } from "react";
import styles from "../assets/css/SignUp.module.css";
import request from "axios";
import { base_url } from "./Baseurl";
import { useNavigate } from "react-router-dom";
function SignUp({ setType }) {
  const fullname=useRef();
  const email=useRef();
  const password=useRef();
  const conf_pass=useRef();
  const navigation = useNavigate();

  
  async function registration(fullname,email,password,conf_pass){
    if(fullname.current?.value?.length < 1|| email.current?.value?.length <1 || password.current?.value?.length <1 || conf_pass.current?.value?.length <1 ){
      alert("Kindly, fill the all the data");
    }
    else{
      if(password.current?.value!=conf_pass.current?.value)
        {
        alert("Password and Confirm Password does not match")
      }
      else
      {
        request.post(`${base_url}registration/addregistration`,{name:fullname.current?.value,email:email.current?.value,password:password.current?.value,country:"india"}).then((res)=>{
          navigation("/");
        }).catch((err)=>{
          alert(`Error: ${err?.response?.data?.message}`)
          console.log("Error sign in",err)
        }).finally(()=>{
          console.log("Function Ended")
        })
      }
    }

  }
  return (
    <div className={styles.sectionContainer}>
      <p className={styles.titleText}>Sign Up</p>
      <p>Welcome back! Enter your email and password below to sign in.</p>
      <div className={styles.inputSection}>
        <div className={styles.inputItem}>
          <label>Full Name</label>
          <input ref={fullname} placeholder="Full Name" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Email</label>
          <input ref={email} placeholder="Email" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Password</label>
          <input ref={password} placeholder="Password" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Confirm Password</label>
          <input ref={conf_pass} placeholder="Confirm Password" className={styles.inputbox} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>registration(fullname,email,password,conf_pass)} className={styles.btnSignIn}>Register</button>
        <p>
          Already a member?{" "}
          <span
            onClick={() => {
              setType("login");
            }}
            style={{ color: "#1488CC",cursor:"pointer" }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
