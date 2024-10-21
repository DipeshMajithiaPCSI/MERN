import React, { memo } from "react";
import styles from "../assets/css/Header.module.css";
import sidebar from "../assets/css/sidebar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const routelinks = [
    { name: "Home", link: "" },
    { name: "Course", link: "courses" },
    { name: "Inquiry", link: "inquiry" },
    { name: "About Us", link: "aboutus" },
  ];
  const location = useLocation();
  let userName = useSelector((state) => state?.allData?.user_details?.email);
  return (
    <div>
      <header className={styles.preheader}>
        <div className={styles.preheaderleft}>
          <p className={styles.preheadertext}>
            <span className={styles.preheaderspan}>
              <img
                alt="img"
                className={styles.preheaderimg}
                src={require("../assets/images/preheaderphone.png")}
              />
            </span>
            8733876345
          </p>
          <p className={styles.preheadertext}>|</p>
          <p className={styles.preheadertext}>
            <span className={styles.preheaderspan}>
              <img
                alt="img"
                className={styles.preheaderimg}
                src={require("../assets/images/preheadermail.png")}
              />
            </span>
            abcd@gmail.com
          </p>
        </div>
        <div className={styles.preheaderright}>
          <p className={styles.preheadertext}>Hello! {userName}</p>
          <button
            className={styles.preheaderbutton}
            onClick={() => {
              dispatch({ type: "USER_DETAILS", payload: undefined });
            }}
          >
            Logout
          </button>
        </div>
      </header>
      {/* <!------------------------------ Header -------------------------------------------------> */}

      <div className={styles.mainheader}>
        <div className={styles.divimg}>
          <img
            alt="img"
            className={styles.headerlogo}
            src={require("../assets/images/headerlogo.png")}
          />
        </div>
        <div className={styles.headernavigation}>
          {routelinks?.map((val, i) => {
            return (
              <p
                key={String(i)}
                onClick={() => {
                  navigation(val?.link);
                }}
              >
                <a
                  activeClassName="active"
                  style={{
                    color:
                      location?.pathname === `/${val?.link}`
                        ? "#1488CC"
                        : "#000000",
                  }}
                  className={styles.navopn}
                >
                  {val?.name}
                </a>
              </p>
            );
          })}
        </div>
        <div className={styles.divcontact}>
          <button
            onClick={() => {
              navigation("contactus");
            }}
            className={styles.headercontact}
          >
            <a style={{ color: "#fff" }}>Contact Us</a>
          </button>
          <button onclick="opensidebar()" className={sidebar.hamburgerbutton}>
            <img alt="img" src={require(`../assets/images/hamburger.png`)} />
          </button>
        </div>
        <div className={sidebar.sidebarnavmaindiv} id="sidebarnavmaindiv">
          <div className="transiondiv" id="sidebarclosediv">
            <div className={sidebar.closesidebar} onclick="closesidebar()">
              <img
                alt="img"
                src={require("../assets/images/sidebarcross.png")}
              />
            </div>
            <div className={styles.divimg}>
              <img
                alt="img"
                className={sidebar.headerlogo1}
                src={require(`../assets/images/headerlogo.png`)}
              />
            </div>
            <div className={sidebar.headernav}>
              <p>
                <a className={styles.navopn} href="./Home.html">
                  Home
                </a>
              </p>
              <p>
                <a className={styles.navopn} href="./Courses.html">
                  Course
                </a>
              </p>
              <p>
                <a className={styles.navopn} href="./Inquiry.html">
                  Inquiry
                </a>
              </p>
              <p>
                <a
                  className={styles.navopn}
                  style={{ color: "#1488CC" }}
                  href="./about.html"
                >
                  About Us
                </a>
              </p>
              <p>
                <a className={styles.navopn} href="./contactus.html">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
