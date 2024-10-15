import React from "react";
import styles from "../assets/css/SignUp.module.css";
function SignUp({ setPageType }) {
  return (
    <div className={styles.sectionContainer}>
      <p className={styles.titleText}>Sign In</p>
      <p>Welcome back! Enter your email and password below to sign in.</p>
      <div className={styles.inputSection}>
        <div className={styles.inputItem}>
          <label>Full Name</label>
          <input placeholder="Full Name" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Email</label>
          <input placeholder="Email" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Password</label>
          <input placeholder="Password" className={styles.inputbox} />
        </div>
        <div className={styles.inputItem}>
          <label>Confirm Password</label>
          <input placeholder="Confirm Password" className={styles.inputbox} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.btnSignIn}>Sign In</button>
        <p>
          Already a member?{" "}
          <span
            onClick={() => {
              setPageType("login");
            }}
            style={{ color: "#1488CC" }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
