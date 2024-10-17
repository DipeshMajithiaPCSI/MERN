import React from "react";
import styles from "../../../assets/css/Home.module.css";
import CardImg1 from "../../../assets/images/cardimg1.png";
function Section2() {
  let data = [
    {
      title: "Introduction to Machine Learning",
      category: "Artificial Intelligence",
      image: CardImg1,
      duration: "10 Weeks",
    },
    {
      title: "Introduction to Machine Learning 2 ",
      category: "Artificial Intelligence",
      image: CardImg1,
      duration: "12 Weeks",
    },
    {
      title: "Introduction to Machine Learning 3 ",
      category: "Artificial Intelligence",
      image: CardImg1,
      duration: "10 Weeks",
    },
    {
      title: "Introduction to Machine Learning 4 ",
      category: "Artificial Intelligence",
      image: CardImg1,
      duration: "12 Weeks",
    },
  ];
  let categorylist = [];
  return (
    <div>
      <div className={styles.section2div}>
        <div className={styles.textdiv}>
          <p className={styles.section2text}>Featured Courses</p>
          <p className={styles.section2subtext}>Pick a Course to Get Started</p>
        </div>
        <div className={styles.categorydiv}>
          <p className={styles.categorytext}>All Categories</p>
          <p className={styles.categorytext}>Artificial Intelligence</p>
          <p className={styles.categorytext}>Business Analysis</p>
          <p className={styles.categorytext}>UI/UX Design</p>
          <p className={styles.categorytext}>Front-End</p>
          <p className={styles.categorytext}>Back-End</p>
          <p className={styles.categorytext}>Project Management</p>
        </div>
        <div className={styles.cardsectiondiv}>
          {data?.map((val, i) => {
            return (
              <div className={styles.cardcontainer} key={String(i)}>
                <img src={val?.image} />
                <div className={styles.cardcontentsection}>
                  <p className={styles.cardcategorytext}>{val?.category}</p>
                  <p className={styles.cardtitletext}>{val?.title}</p>
                  <p className={styles.cardtimetext}>
                    <span className={styles.timeimgdiv}>
                      <img
                        src={require("../../../assets/images/cardtime.png")}
                      />
                    </span>{" "}
                    {val?.duration}
                  </p>
                </div>
                <div className={styles.cardlearnmorediv}>
                  <p className={styles.cardlearnmoretext}>
                    Learn More
                    <span className={styles.clardlearnmorearrow}>
                      <img src="../../../assets/images/rightarrow.png" />
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.section2button}>
          <button className={styles.browsemorebutton}>
            Browse More Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
