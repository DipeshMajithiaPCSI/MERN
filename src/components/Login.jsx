import React, { useEffect, useRef } from "react";
import styles from "../assets/css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Login({ setType, login }) {
  const email = useRef();
  const password = useRef();
  const navigation = useNavigate();
  let userDetails = useSelector((state) => state?.allData?.user_details);
  useEffect(() => {
    if (userDetails) {
      navigation("/");
    }
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <p className={styles.titleText}>Sign In</p>
      <p>Welcome back! Enter your email and password below to sign in.</p>
      <div className={styles.inputSection}>
        <div className={styles.inputItem}>
          <label>Email</label>
          <input ref={email} placeholder="Email" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Password</label>
          <input
            ref={password}
            placeholder="Password"
            className={styles.inputbox}
          />
        </div>
      </div>
      <div className={styles.rmbme}>
        <div className={styles.rmbmeleft}>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <div className={styles.rmbmeleft}>
          <p
            className={styles.fgtpwdtext}
            onClick={() => {
              setType("forgotpassword");
            }}
          >
            Forgot Password?
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.btnSignIn}
          onClick={() => {
            login(email, password);
          }}
        >
          Sign In
        </button>
        <p>
          Not a member yet?{" "}
          <span
            onClick={() => {
              setType("signup");
            }}
            style={{ color: "#1488CC", cursor: "pointer" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
