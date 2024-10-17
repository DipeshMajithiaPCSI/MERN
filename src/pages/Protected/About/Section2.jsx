import React from 'react';
import Styles from "../../../assets/css/aboutus.module.css"

function Section2() {
  return (
    <div>
         <div className={Styles.section2}>
        <div className={Styles.section2up}>
            <div className={Styles.section2left}>
                <p className={Styles.missiontext}>Our Mission</p>
                <p className={Styles.missionmoto}>Our Mission is to Provide a World‑class Education.</p>
                {/* <!-- <p className={Styles.}missionmoto">Provide a World‑class</p>   <p className={Styles.}missionmoto">Education.</p> --> */}
            </div>
            <div className={Styles.section2right}>
                <p className={Styles.missiondetails}>Lorem ipsum dolor sit amet consectetur. Egestas ut tellus scelerisque hac.
                    Diam penatibus mauris lacus diam nullam. Sed eu scelerisque suspendisse sollicitudin rhoncus id
                    suspendisse nec odio. Ipsum urna at et non ultricies in sodales viverra. Dignissim sem lectus
                    aliquam sagittis enim duis tristique in risus. Arcu urna pharetra cursus a. Est nibh vestibulum in
                    lobortis a natoque massa eleifend hendrerit. Elit porttitor mattis massa sed libero nec odio id.<br/>
                    Cursus feugiat vivamus feugiat ultrices diam auctor. Tincidunt cras felis sem sit convallis integer
                    quis tempor mattis. Nisi ipsum condimentum quam consectetur ornare ultrices massa tempor. Pharetra
                    risus urna nisi mauris. Lacus ac risus non sed in risus.</p>
            </div>
        </div>
        <div className={Styles.target}>
            <div className={Styles.targetvalue}>
                <div className={Styles.targetdiv}>
                    <p className={Styles.targetnumer}>5000</p>            
                    <p className={Styles.targettitle}>Foreign Followers</p>
                </div>
                <div className={Styles.targetdiv}>
                    <p className={Styles.targetnumer}>10</p>            
                    <p className={Styles.targettitle}>Certified Teachers</p>
                                    </div>
                <div className={Styles.targetdiv}>
                    <p className={Styles.targetnumer}>2100</p>            
                    <p className={Styles.targettitle}>Student Enrolled</p>
                </div>
                <div className={Styles.targetdiv}>
                    <p className={Styles.targetnumer}>100</p>            
                    <p className={Styles.targettitle}>Complete Courses</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section2