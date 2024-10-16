import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../assets/css/Home.module.css"

function Home() {
  return (
    <div>
      <Header />
      {/* ------------------------------ Hero Section ------------------------------------------------- */}

<div className={styles.mainposter}>
    <div className={styles.mainposterleft}>
        <p className={styles.mainword1}>FLEXIBLE LEARNING</p>
        <p className={styles.mainword2}>Self paced online & offline Classrooms</p>

        <button className={styles.mainbutton}>Register Now</button>
    </div>
    <div className={styles.mainposterright}>
        <img className={styles.heroimage} alt="img" src={require(`/persolized/Mit/coading/MERN/MERN/src/assets/images/heroimage.png`)}/>
    </div>
</div>
{/* ----------------------------------- Section 3 ---------------------------------- */}
    <div className={styles.section3}>
        <div className={styles.section3left}>
            <p className={styles.section3text1}>If you are a certified teacher then</p>
            <p className={styles.section3text2}>Become An Instructor</p>
            <p className={styles.section3text3}>Unlock the opportunity to inspire and educate by joining our team of
                instructors.
                If you’re a certified teacher, elevate your impact and share your knowledge with learners.</p>
            <button className={styles.section3button}>Become an Instructor</button>
        </div>
        <div className={styles.section3right}><img className={styles.section3img} src={require(`/persolized/Mit/coading/MERN/MERN/src/assets/images/section3model.png`)} alt="Sorry an error encounter"/></div>
    </div>
      <Footer />
    </div>
  );
}

export default Home;
