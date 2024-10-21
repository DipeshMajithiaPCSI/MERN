import React, { useState } from "react";
import styles from "../../../assets/css/Home.module.css";
import CardImg1 from "../../../assets/images/cardimg1.png";
import { useNavigate } from "react-router-dom";
function Section2() {
  let data = [
    {
      title: "Introduction to Machine Learning",
      category: "Artificial Intelligence",
      image: CardImg1,
      duration: "10 Weeks",
    },
    {
      title: "React.js - Building Interactive User Interfaces ",
      category: "Front-End",
      image: CardImg1,
      duration: "12 Weeks",
    },
    {
      title: "React Native Building Cross-Platform Mobile Apps ",
      category: "Front-End",
      image: CardImg1,
      duration: "10 Weeks",
    },
    {
      title: "The Complete DBMS Bootcamp ",
      category: "Back-End",
      image: CardImg1,
      duration: "12 Weeks",
    },
  ];
  let categorylist = [
    { cat: "All Categories", id: 1 },
    { cat: "Artificial Intelligence", id: 2 },
    { cat: "Business Analysis", id: 3 },
    { cat: "UI/UX Design", id: 4 },
    { cat: "Front-End", id: 5 },
    { cat: "Back-End", id: 6 },
    { cat: "Project Management", id: 7 },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const navigation = useNavigate();
  return (
    <div>
      <div className={styles.section2div}>
        <div className={styles.textdiv}>
          <p className={styles.section2text}>Featured Courses</p>
          <p className={styles.section2subtext}>Pick a Course to Get Started</p>
        </div>
        <div className={styles.categorydiv}>
          {categorylist?.map((val, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <p
                  style={{
                    textDecoration:
                      selectedCategory == val?.cat ? "underline" : "none",
                    textDecorationColor: "blue",
                  }}
                  key={String(i)}
                  className={styles.categorytext}
                  onClick={() => {
                    setSelectedCategory(val?.cat);
                  }}
                >
                  {val.cat}
                </p>
                {/* {selectedCategory == val?.cat && (
                  <div
                    style={{
                      height: 5,
                      width: "100%",
                      backgroundColor: "blue",
                      borderRadius: 50,
                    }}
                  ></div>
                )} */}
              </div>
            );
          })}
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
                      <img
                        src={require("../../../assets/images/rightarrow.png")}
                      />
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.section2button}>
          <button
            onClick={() => {
              navigation("/courses");
            }}
            className={styles.browsemorebutton}
          >
            Browse More Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
