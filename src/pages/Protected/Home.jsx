import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../assets/css/Home.module.css";
import Section1 from "./Home/Section1";
import Section3 from "./Home/Section3";

function Home() {
  return (
    <div>
      {/* ------------------------------ Hero Section ------------------------------------------------- */}

      <Section1 />
      {/* ----------------------------------- Section 3 ---------------------------------- */}
      <Section3 />
    </div>
  );
}

export default Home;
