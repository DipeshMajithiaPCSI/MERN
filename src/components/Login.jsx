import React, { useRef } from "react";
import styles from "../assets/css/Login.module.css";
import { useNavigate } from "react-router-dom";
function Login({ setPageType, login }) {
  const email = useRef();
  const password = useRef();
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
              setPageType("forgotpassword");
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
              setPageType("signup");
            }}
            style={{ color: "#1488CC" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
