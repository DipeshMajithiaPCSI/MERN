import React, { useEffect, useState } from 'react';
import CardImg1 from "../../assets/images/cardimg1.png";
import CardImg2 from "../../assets/images/cardimg2.png";
import CardImg3 from "../../assets/images/cardimg3.png";
import CardImg4 from "../../assets/images/cardimg4.png";
import CardImg5 from "../../assets/images/cardimg5.png";
import CardImg6 from "../../assets/images/cardimg6.png";
import PageImg1 from "../../assets/images/page1img.png";
import Pg1Menu3 from "../../assets/images/pg1menu3.png";
import Pg1Menu4 from "../../assets/images/pg1menu4.png";
import styles from "../../assets/css/CourseList.module.css";
import { useNavigate } from "react-router-dom";
import Request from 'axios'
import { base_url } from "../../components/Baseurl";

function CoursesList() {
  const [card,setCard]=useState([])
  const navigate = useNavigate();
  function getCourses(){
    Request.get(`${base_url}course/getcourse`).then((res)=>{
      setCard(res?.data?.results)
    }).catch((err)=>{
      console.log("Error getting courses on homepage",err)
    })
  }
  useEffect(()=>{
    getCourses()
  },[])
  // let card=[
  //   {img: CardImg1,
  //     title:"Artificial Intelegince",
  //     info:"Introduction to Machine Learning using Python (Linear Regression)",
  //     duration: "10 Weeks"
  //   },
  //   {img: CardImg2,
  //     title:"Front-End",
  //     info:"React.js - Building Interactive User Interfaces",
  //     duration: "10 Weeks"
  //   },{img: CardImg2,
  //     title:"Front-End",
  //     info:"React Native Building Cross-Platform Mobile Apps",
  //     duration: "10 Weeks"
  //   },{img: CardImg3,
  //     title:"Back-End",
  //     info:"The Complete DBMS Bootcamp",
  //     duration: "10 Weeks"
  //   },{img: CardImg4,
  //     title:"UI/UX Design",
  //     info:"UI/UX Design Bootcamp",
  //     duration: "12 Weeks"
  //   },{img: CardImg5,
  //     title:"Front-End",
  //     info:"Front-End Web Development using React",
  //     duration: "10 Weeks"
  //   },{img: CardImg6,
  //     title:"Business Analysis",
  //     info:"Business Analysis Fundamentals Program (Online)",
  //     duration: "10 Weeks"
  //   },{img: CardImg6,
  //     title:"Business Analysis",
  //     info:"Business Analysis Fundamentals Program (Offline)",
  //     duration: "50 Hours"
  //   },
  // ]
  return (
    <div>
         {/* <!-- ----------------------------------------section1------------------------------------------------ --> */}
    <div className={styles.section1}>
        <div>
            <img className={styles.section1img} src={PageImg1}/>
        </div>
        {/* <!-- ----------------------------------------section2------------------------------------------------ --> */}
        <div className={styles.section2menu}>
            <div className={styles.menuleft}>
                <img src={Pg1Menu3} onClick={()=>navigate("/courses")}/>
                <img src={Pg1Menu4}/>
                <p className={styles.menulefttext}>Showing 1-6 of 10 results</p>
            </div>
            <div className={styles.menuright}>
                <input type="search" placeholder="Search" className={styles.inputsearch}/>
            </div>
        </div>
    </div>
    {/* <!-- ----------------------------------------section3------------------------------------------------ --> */}
    <div className={styles.section3}>
        {
          card.map((val,i)=>{
            return(
            <div key={String(i)} className={styles.cardcontainer}>
            <img className={styles.cardcontainerimg} src={CardImg1}/>
            <div className={styles.cardcontainerbottom}>
                <p className={styles.cardcontainertitle}>{val.category}</p>
                <p className={styles.cardcontainerinfo}>{val.title}</p>
                <p className={styles.cardcontainertime}><span><img src={require("../../assets/images/cardtime.png")} alt=""/></span>{val.duration}</p>
                <div className={styles.cardcontainermore}>
                    <p className={styles.moretext}>Learn More<span onClick={()=>{navigate(`/coursecontent/${val.id}`)}}><img src={require("../../assets/images/rightarrow.png")}/></span></p>
                </div>
            </div>
        </div>
        );
          })
        }
      </div>
    </div>
  )
}

export default CoursesList