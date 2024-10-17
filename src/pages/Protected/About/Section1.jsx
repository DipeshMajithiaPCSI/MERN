import React from 'react';
import Styles from "../../../assets/css/aboutus.module.css"

function Section1() {
  return (
    <div>
        <div className={Styles.section1}>
        <div>
            <img className={Styles.section1img} src={require(`../../../assets/images/about.png`)}/>
        </div>
    </div>
    </div>
  )
}

export default Section1