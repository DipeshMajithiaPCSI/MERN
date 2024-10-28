import React from 'react';
import styles from "../../../assets/css/CourseContent.module.css";
import dotImg from "../../../assets/images/dot.png";
import profileNull from "../../../assets/images/profilenull.png";
import cardimg1 from "../../../assets/images/cardimg1.png";

function Section1({data}) {
  return (
    <div>
      <div className={styles.section1}>
        <div className={styles.section1row1}>
            <p className={styles.section1smalltxt}>Home</p>
            <p className={styles.section1smalltxt}><span className={styles.dotspan} ><img src={dotImg}/></span>Courses</p>
            <p className={styles.section1smalltxt}><span className={styles.dotspan}><img src={dotImg}/></span>{data?.title}</p>
        </div>
        <div className={styles.section1row2}>            
            <div className={styles.section1left}>
                <p className={styles.section1containertitle}>{data?.category}</p>
                <p className={styles.secction1containerText}>{data?.title}</p>
                <p className={styles.sectionsmalltext}>{data?.details}</p>
                <p className={styles.sec1profilename}><span><img src={profileNull}/></span>{data?.instructor}</p>
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