import React from "react";
import styles from "../../../assets/css/Home.module.css";

function Section3() {
  return (
    <div>
      <div className={styles.section3}>
        <div className={styles.section3left}>
          <p className={styles.section3text1}>
            If you are a certified teacher then
          </p>
          <p className={styles.section3text2}>Become An Instructor</p>
          <p className={styles.section3text3}>
            Unlock the opportunity to inspire and educate by joining our team of
            instructors. If you’re a certified teacher, elevate your impact and
            share your knowledge with learners.
          </p>
          <button className={styles.section3button}>
            Become an Instructor
          </button>
        </div>
        <div className={styles.section3right}>
          <img
            className={styles.section3img}
            src={require(`../../../assets/images/section3model.png`)}
            alt="Sorry an error encounter"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
