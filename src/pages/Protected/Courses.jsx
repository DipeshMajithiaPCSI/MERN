import React, { useEffect, useState } from "react";
import styles from "../../assets/css/Course.module.css";
import CardImg1 from "../../assets/images/cardimg1.png";
import CardImg2 from "../../assets/images/cardimg2.png";
import CardImg3 from "../../assets/images/cardimg3.png";
import CardImg4 from "../../assets/images/cardimg4.png";
import CardImg5 from "../../assets/images/cardimg5.png";
import CardImg6 from "../../assets/images/cardimg6.png";
import PageImg1 from "../../assets/images/page1img.png";
import Pg1Menu1 from "../../assets/images/pg1menu1.png";
import Pg1Menu2 from "../../assets/images/pg1menu2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Request from 'axios'
import { base_url } from "../../components/Baseurl";
function Courses() {
  let userName = useSelector((state) => state?.allData?.user_details?.email);
  const [card,setCard]=useState([])
  const navigation = useNavigate();
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
  const dispatch= useDispatch();
  return (
    <div>
      {/* <!-- ----------------------------------------section1------------------------------------------------ --> */}
      <div className={styles.section1}>
        <div>
          <img className={styles.section1img} src={PageImg1} />
        </div>
        {/* <!-- ----------------------------------------section2------------------------------------------------ --> */}
        <div className={styles.section2menu}>
          <div className={styles.menuleft}>
            <img src={Pg1Menu1} />
            <img
              src={Pg1Menu2}
              onClick={() => {
                navigation("/courseslist");
              }}
            />
            <p className={styles.menulefttext}>Showing 1-6 of 10 results</p>
          </div>
          <div className={styles.menuright}>
            <input
              type="search"
              placeholder="Search"
              className={styles.inputsearch}
            />
          </div>
        </div>
      </div>
      {/* <!-- ----------------------------------------section3------------------------------------------------ --> */}
      <div className={styles.section3}>
        {card?.map((val, i) => {
          console.log("Val",val)
          return (
            <div key={String(i)} className={styles.cardcontainer}>
              <img className={styles.cardcontainerimg} src={val?.img} />
              <div className={styles.cardcontainerbottom}>
                <p className={styles.cardcontainertitle}>{val?.title}</p>
                <p className={styles.cardcontainerinfo}>{val.info}</p>
                <p className={styles.cardcontainertime}>
                  <span>
                    <img
                      src={require("../../assets/images/cardtime.png")}
                      alt="img"
                    />
                  </span>
                  {val.duration}
                </p>
              </div>
              <div className={styles.cardcontainermore}  onClick={() => {
                      navigation("/coursecontent"+`/${val?.id}`);
                      dispatch({
                        type:"COURSE_DETAILS",
                        payload:{title:"course title"},
                      })
                    }}>
                <p className={styles.moretext}>
                  Learn More
                  <span>
                    <img src={require("../../assets/images/rightarrow.png")} />
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p>{userName}</p>
      </div>
    </div>
  );
}

export default Courses;
