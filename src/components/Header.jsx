import React from "react";
import styles from "../assets/css/Header.module.css";
import sidebar from "../assets/css/sidebar.module.css"

function Header() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
//   alert(baseUrl);
  return <div>
        <header className={styles.preheader}>
        <div className={styles.preheaderleft}>
            <p className={styles.preheadertext}>
                <span className={styles.preheaderspan}><img alt="img" className={styles.preheaderimg} src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/preheaderphone.png')}/></span>
                8733876345
            </p>
            <p className={styles.preheadertext}>|</p>
            <p className={styles.preheadertext}>
                <span className={styles.preheaderspan}><img alt="img" className={styles.preheaderimg} src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/preheadermail.png')}/></span>
                abcd@gmail.com
            </p>
        </div>
        <div className={styles.preheaderright}>
            <p className={styles.preheadertext}>
                Hello! Mitkumar Hire
            </p>
            <button className={styles.preheaderbutton}>Logout</button>

        </div>
    </header>
    {/* <!------------------------------ Header -------------------------------------------------> */}

    <div className={styles.mainheader}>
        <div className={styles.divimg}>
            <img alt="img" className={styles.headerlogo} src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/headerlogo.png')} />
        </div>
        <div className={styles.headernavigation}>
            <p><a className={styles.navopn} href="./contactus.html">Home</a></p>
            <p><a className={styles.navopn} href="./Courses.html">Course</a></p>
            <p><a className={styles.navopn} href="./Inquiry.html">Inquiry</a></p>
            <p><a className={styles.navopn} style={{color: '#1488CC'}} href="./about.html">About Us</a></p>
        </div>
        <div className={styles.divcontact}>
            <button className={styles.headercontact}><a style={{color: '#fff'}} href="./contactus.html">Contact
                    Us</a></button>
            <button onclick="opensidebar()" className={sidebar.hamburgerbutton}><img alt="img" src={require(`/persolized/Mit/coading/MERN/MERN/src/assets/images/hamburger.png`)}/></button>
        </div>
        <div className={sidebar.sidebarnavmaindiv} id="sidebarnavmaindiv">
            <div className="transiondiv" id="sidebarclosediv">
                <div className={sidebar.closesidebar} onclick="closesidebar()" >
                    <img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/sidebarcross.png')}/>
                </div>
                <div className={styles.divimg}>
                    <img alt="img" className={sidebar.headerlogo1} src={require(`/persolized/Mit/coading/MERN/MERN/src/assets/images/headerlogo.png`)}/>
                </div>
                <div className={sidebar.headernav}>
                    <p><a className={styles.navopn} href="./Home.html">Home</a></p>
                    <p><a className={styles.navopn} href="./Courses.html">Course</a></p>
                    <p><a className={styles.navopn} href="./Inquiry.html">Inquiry</a></p>
                    <p><a className={styles.navopn} style={{color: '#1488CC'}} href="./about.html">About Us</a></p>
                    <p><a className={styles.navopn} href="./contactus.html">Contact
                        Us</a></p>
                </div>
            </div>
        </div>
    </div>
  </div>;
}

export default Header;
 