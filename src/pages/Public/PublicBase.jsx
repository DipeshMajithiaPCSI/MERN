import React from "react";
import styles from "../../assets/css/PublicBase.module.css";
import img1 from "../../assets/images/publicbaseinnerimg.png";
function PublicBase({ children }) {
  return (
    <div className={styles.sectionCotainer}>
      <div className={styles.innerdiv}>
        <div className={styles.sectionLeft}>
          <h1>Elevate your learning to the next level </h1>
          <img src={img1} className={styles.img} />
        </div>
        <div className={styles.sectionRight}>{children}</div>
      </div>
    </div>
  );
}

export default PublicBase;
