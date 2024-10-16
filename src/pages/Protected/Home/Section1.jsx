import React from "react";
import styles from "../../../assets/css/Home.module.css";

function Section1() {
  return (
    <div className={styles.mainposter}>
      <div className={styles.mainposterleft}>
        <p className={styles.mainword1}>FLEXIBLE LEARNING</p>
        <p className={styles.mainword2}>
          Self paced online & offline Classrooms
        </p>

        <button className={styles.mainbutton}>Register Now</button>
      </div>
      <div className={styles.mainposterright}>
        <img
          className={styles.heroimage}
          alt="img"
          src={require(`../../../assets/images/heroimage.png`)}
        />
      </div>
    </div>
  );
}

export default Section1;
