import React, { useEffect, useState } from 'react';

import styles from "../../../assets/css/CourseContent.module.css";
import CardImg1 from "../../../assets/images/cardimg1.png";
import CardImg2 from "../../../assets/images/cardimg2.png";
import CardImg3 from "../../../assets/images/cardimg3.png";
import CardImg4 from "../../../assets/images/cardimg4.png";
import CardImg5 from "../../../assets/images/cardimg5.png";
import CardImg6 from "../../../assets/images/cardimg6.png";
import request from "axios";
import { base_url } from '../../../components/Baseurl';
import { useNavigate } from 'react-router-dom';

function Section3() {
  const navigate=useNavigate();
  const [data,setData]=useState([]);
  function getCourses(){
    request.get(`${base_url}course/getcourse`).then((res)=>{
      setData(res?.data?.results)
    }).catch((err)=>{
      console.log("Error getting courses on homepage",err)
    })
  }
  useEffect(()=>{
    getCourses()
  })

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
              data.map((val,i)=>{
                return(
                  <div key={String(i)} className={styles.cardcontainer}>
                <img className={styles.cardcontainerimg} src={CardImg1}/>
                <div className={styles.cardcontainerbottom}>
                    <p className={styles.cardcontainertitle}>{val.category}</p>
                    <p className={styles.cardcontainerinfo}>{val.title}</p>
                    <p className={styles.cardcontainertime}><span><img src={require("../../../assets/images/cardtime.png")} alt=""/></span>10 Weeks</p>
                </div>
                <div onClick={()=>{
                  navigate("/coursecontent/"+`${val.id}`);
                  window.location.reload(false);
                }} className={styles.cardcontainermore}>
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