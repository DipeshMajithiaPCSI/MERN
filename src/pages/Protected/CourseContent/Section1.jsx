import React from 'react';
import styles from "../../../assets/css/CourseContent.module.css";
import dotImg from "../../../assets/images/dot.png";
import profileNull from "../../../assets/images/profilenull.png";
import cardimg1 from "../../../assets/images/cardimg1.png";

function Section1() {
  return (
    <div>
      <div className={styles.section1}>
        <div className={styles.section1row1}>
            <p className={styles.section1smalltxt}>Home</p>
            <p className={styles.section1smalltxt}><span className={styles.dotspan} ><img src={dotImg}/></span>Courses</p>
            <p className={styles.section1smalltxt}><span className={styles.dotspan}><img src={dotImg}/></span>Introduction to Machine Learning using Python (Linear Regression)</p>
        </div>
        <div className={styles.section1row2}>            
            <div className={styles.section1left}>
                <p className={styles.section1containertitle}>Artificial Intelligence</p>
                <p className={styles.secction1containerText}>Introduction to Machine Learning using Python (Linear Regression)</p>
                <p className={styles.sectionsmalltext}>Machine Learning in Python offers a wide range of tools and libraries for various tasks, including Regression. One popular approach is Linear Regression, a fundamental technique for predicting numerical values based on input data.</p>
                <p className={styles.sec1profilename}><span><img src={profileNull}/></span>Kadin Passaquindici Arcand</p>
                <p className={styles.sectionsmalltext}>0 enrolled Students</p>
            </div>
            <div className={styles.section1right}>
                <img className={styles.section1img} src={cardimg1}/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Section1