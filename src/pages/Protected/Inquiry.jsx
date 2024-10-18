import React from "react";
import styles from "../../assets/css/inquiry.module.css";
import Section1 from "./Inquiry/Section1";
import Section2 from "./Inquiry/Section2";

function Inquiry() {
  return (
    <div>
      <Section1 />
      {/* <!-- ----------------------------------------section2------------------------------------------------ --> */}
      <Section2 />
    </div>
  );
}

export default Inquiry;
