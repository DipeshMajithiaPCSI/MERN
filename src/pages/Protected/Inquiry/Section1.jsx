import React from "react";
import styles from "../../../assets/css/inquiry.module.css"

function Section1() {
  return (
    <div>
      <div className={styles.section1}>
        <div>
          <img
            className={styles.section1img}
            src={require(`../../../assets/images/inquiry.png`)}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
