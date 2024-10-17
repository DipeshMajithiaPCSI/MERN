import React from "react";
import Section1 from "./Home/Section1";
import Section3 from "./Home/Section3";
import Section2 from "./Home/Section2";

function Home() {
  return (
    <div>
      {/* ------------------------------ Hero Section ------------------------------------------------- */}

      <Section1 />
      {/* ----------------------------------- Section 2 ---------------------------------- */}
      <Section2 />
      {/* ----------------------------------- Section 3 ---------------------------------- */}
      <Section3 />
    </div>
  );
}

export default Home;
