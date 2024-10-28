import React from 'react';
import styles from "../../../assets/css/CourseContent.module.css";
import right from "../../../assets/images/right.png";
import sec2right1 from "../../../assets/images/sec2right1.png";
import sec2right2 from "../../../assets/images/sec2right2.png";
import sec2right3 from "../../../assets/images/sec2right3.png";
import sec2right4 from "../../../assets/images/sec2right4.png";
import sec2right5 from "../../../assets/images/sec2right5.png";
import sec2right6 from "../../../assets/images/sec2right6.png";
import sec2right7 from "../../../assets/images/sec2right7.png";
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

function Section2({data}) {
    const navigate= useNavigate();
  return (
    <div>
      <div className={styles.section2}>
           <div className={styles.sec2left}>
            <p className={styles.secction1containerText}>Course Overview</p>
            <p className={styles.sectionsmalltext}>{data?.overview}                 
            </p>
                <p className={styles.secction1containerText}>What you'll learn in this course</p>
                <p className={styles.section2smalltext}><span><img className={styles.rightImg} src={right}/></span>{data?.whatlearn} </p>
                {/* <p className={styles.section2smalltext}><span><img src={right}/></span>Basic Python Programming </p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Learn to use libraries like numpy, pandas and scikit-learn.
                </p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Learn to predict outcomes using regression.</p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Learn about the concept of under-fitting and over-fitting.</p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Learn to split the dataset into training and testing set.</p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Learn about correlation analysis.</p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Learn to diagnose the model.</p>
                <p className={styles.section2smalltext}><span><img src={right}/></span>Implement a multiple-regression project by the end of the course.</p> */}
            </div>
           <div className={styles.sec2right}>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right1}/></span>Course Level</p>
                <p className={styles.sec2rightdatatext}>{data?.level}</p>
            </div><hr/>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right2}/></span>Course Duration</p>
                <p className={styles.sec2rightdatatext}>{data?.duration}</p>
            </div><hr/>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right3}/></span>Lectures</p>
                <p className={styles.sec2rightdatatext}>{data?.lectures}</p>
            </div><hr/>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right4}/></span>Quizzes</p>
                <p className={styles.sec2rightdatatext}>{data?.quizzes}</p>
            </div><hr/>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right5}/></span>Language</p>
                <p className={styles.sec2rightdatatext}>{data?.language}</p>
            </div><hr/>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right6}/></span>Assessments</p>
                <p className={styles.sec2rightdatatext}>{data?.assesment}</p>
            </div><hr/>
            <div className={styles.sec2rightdata}>
                <p className={styles.sec2rightdatatext}><span><img src={sec2right7}/></span>Certificate</p>
                <p className={styles.sec2rightdatatext}>{data?.certificates}</p>
            </div>
            <div className={styles.sec2rightbtn}><button onClick={()=>{navigate("/inquiry")}}  className={styles.headercontact}>Inquiry Now</button></div>
           </div>
    </div>
    </div>
  )
}

export default Section2