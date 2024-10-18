import React, { useEffect, useRef, useState } from "react";
import styles from "../../../assets/css/inquiry.module.css";

function Section2() {
  const name = useRef();
  const email = useRef();
  const number = useRef();
  const loe = useRef();
  const courseInterested = useRef();

  useEffect(() => {}, [email]);
  return (
    <div>
      <div className={styles.section2}>
        <div className={styles.leftimgsection}>
          <img
            src={require(`../../../assets/images/inquiryimg1.png`)}
            className={styles.formimg}
          />
        </div>
        <div className={styles.formdiv}>
          <p className={styles.titletext}>Inquiry Form</p>
          <form>
            <div className={styles.inputitem}>
              <label>
                Full Name <span className={styles.required}>*</span>
              </label>
              <input ref={name} type="text" placeholder="Enter your name" />
            </div>
            <div className={styles.inputitem}>
              <label>
                Email <span className={styles.required}>*</span>
              </label>
              <input ref={email} type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.inputitem}>
              <label>
                Phone <span className={styles.required}>*</span>
              </label>
              <input
                ref={number}
                type="number"
                placeholder="Enter your phone"
              />
            </div>
            <div className={styles.inputitem}>
              <label>
                Level of Education <span className={styles.required}>*</span>
              </label>
              <select ref={loe} name="loe" id="loe">
                <option disabled selected hidden>
                  Select Course
                </option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
            <div className={styles.inputitem}>
              <label>
                Course Interested <span className={styles.required}>*</span>
              </label>
              <select ref={courseInterested} name="loe" id="loe">
                <option disabled selected hidden>
                  Select Course
                </option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
            <div className={styles.inputitemcheckbox}>
              <input type="checkbox" />
              <label>
                I subscribe to send me update and information by email.
              </label>
            </div>
            <button
              className={styles.submitbtn}
              onClick={() => {
                alert(`Name: ${name?.current?.value}
                       Email: ${email?.current?.value}
                       Number: ${number?.current?.value}
                       LOE: ${loe?.current?.value}
                       CourseInterested: ${courseInterested?.current?.value} `);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section2;
