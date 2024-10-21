import React from 'react';

import styles from "../../../assets/css/CourseContent.module.css";
import CardImg1 from "../../../assets/images/cardimg1.png";
import CardImg2 from "../../../assets/images/cardimg2.png";
import CardImg3 from "../../../assets/images/cardimg3.png";
import CardImg4 from "../../../assets/images/cardimg4.png";
import CardImg5 from "../../../assets/images/cardimg5.png";
import CardImg6 from "../../../assets/images/cardimg6.png";

function Section3() {
  let card=[
    {img: CardImg1,
      title:"Artificial Intelegince",
      info:"Introduction to Machine Learning using Python (Linear Regression)",
      duration: "10 Weeks"
    },
    {img: CardImg2,
      title:"Front-End",
      info:"React.js - Building Interactive User Interfaces",
      duration: "10 Weeks"
    },{img: CardImg2,
      title:"Front-End",
      info:"React Native Building Cross-Platform Mobile Apps",
      duration: "10 Weeks"
    },{img: CardImg3,
      title:"Back-End",
      info:"The Complete DBMS Bootcamp",
      duration: "10 Weeks"
    },{img: CardImg4,
      title:"UI/UX Design",
      info:"UI/UX Design Bootcamp",
      duration: "12 Weeks"
    },{img: CardImg5,
      title:"Front-End",
      info:"Front-End Web Development using React",
      duration: "10 Weeks"
    },{img: CardImg6,
      title:"Business Analysis",
      info:"Business Analysis Fundamentals Program (Online)",
      duration: "10 Weeks"
    },{img: CardImg6,
      title:"Business Analysis",
      info:"Business Analysis Fundamentals Program (Offline)",
      duration: "50 Hours"
    },
  ]
  return (
    <div>
       <div className={styles.section3}>
        
        <p className={styles.secction1containerText}>Course Content</p>
        <div className={styles.divcoursecontent}>
            <p className={styles.divcoursecontenttext}>Core Python</p><hr/>
            <p className={styles.divcoursecontenttext}>Advance Python</p><hr/>
            <p className={styles.divcoursecontenttext}>Numpy</p><hr/>
            <p className={styles.divcoursecontenttext}>Pandas</p><hr/>
            <p className={styles.divcoursecontenttext}>Machin Learning(Lenear regression)</p>
        </div>
    </div>
    {/* <!-- --------------------------------------------section4-------------------------------------------------- --> */}
     <div className={styles.section4}>
        <p className={styles.secction1containerText}>More Courses for you</p>
        <div className={styles.divmorecourses}>
            {
              card.map((val,i)=>{
                return(
                  <div key={String(i)} className={styles.cardcontainer}>
                <img className={styles.cardcontainerimg} src={val.img}/>
                <div className={styles.cardcontainerbottom}>
                    <p className={styles.cardcontainertitle}>{val.title}</p>
                    <p className={styles.cardcontainerinfo}>{val.info}</p>
                    <p className={styles.cardcontainertime}><span><img src={require("../../../assets/images/cardtime.png")} alt=""/></span>10 Weeks</p>
                </div>
                <div className={styles.cardcontainermore}>
                    <p className={styles.moretext}>Learn More<span><img src={require("../../../assets/images/rightarrow.png")}/></span></p>
                </div>
            </div> 
                );
              })
            }         
     </div>
    </div>
    </div>
  )
}

export default Section3