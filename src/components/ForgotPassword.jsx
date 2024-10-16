import React from "react";
import styles from "../assets/css/SignUp.module.css";
function ForgotPassword({ setPageType }) {
  return (
    <div className={styles.sectionContainer}>
      <p className={styles.titleText}>Forgot Password?</p>
      <p>Enter the email address associated with your account.</p>
      <div className={styles.inputSection}>
        <div className={styles.inputItem}>
          <label>Email</label>
          <input placeholder="Email" className={styles.inputbox} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.btnSignIn}>Send</button>
          <p>
            Back to{" "}
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
    </div>
  );
}

export default ForgotPassword;
