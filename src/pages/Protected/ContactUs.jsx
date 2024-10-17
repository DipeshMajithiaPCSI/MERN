import React from "react";
import styles from "../../assets/css/ContactUs.module.css";

function ContactUs() {
  return (
    <div>
      <div className={styles.section1}>
        <div>
          <img
            className={styles.section1img}
            src={require(`../../assets/images/contact.png`)}
          />
        </div>
        <div className={styles.section2}>
          <div className={styles.divshadow}>
            <div className={styles.divshadow}>
              <div className={styles.divshadow} style={{marginBottom: "20px"}}>
                <p className={styles.locationtitle}>USA</p>
                <p className={styles.locationinfo}>
                  <span>
                    <img src={require(`../../assets/images/contact1.png`)} />
                  </span>
                  (+1) 123 456 7890
                </p>
                <p className={styles.locationinfo}>
                  <span>
                    <img src={require(`../../assets/images/mail1.png`)} />
                  </span>
                  demo@gmail.com
                </p>
                <p className={styles.locationinfo}>
                  <span style={{marginTop:"-12px"}}>
                    <img src={require(`../../assets/images/location1.png`)} />
                  </span>
                  Lorem ipsum dolor sit amet consectetur. Vel
                  <br />
                  elementum massa mauris augue pretium. Id.
                </p>
              </div>
              <div className={styles.divshadow}>
                <p className={styles.locationtitle}>INDIA</p>
                <p className={styles.locationinfo}>
                  <span>
                    <img src={require(`../../assets/images/contact1.png`)} />
                  </span>
                  (+91) 123 456 7890
                </p>
                <p className={styles.locationinfo}>
                  <span>
                    <img src={require(`../../assets/images/mail1.png`)} />
                  </span>
                  demo@gmail.com
                </p>
                <p className={styles.locationinfo}>
                  <span style={{marginTop:"-12px"}}>
                    <img src={require(`../../assets/images/location1.png`)} />
                  </span>
                  Lorem ipsum dolor sit amet consectetur. Vel
                  <br />
                  elementum massa mauris augue pretium. Id.
                </p>
              </div>
              <div className={styles.mediaicon}>
                <img src={require(`../../assets/images/fb.png`)} />
                <img src={require(`../../assets/images/ld.png`)} />
                <img src={require(`../../assets/images/ig.png`)} />
              </div>
            </div>
            <div className={styles.formdiv}>
              <div className={styles.formrow1}>
                <div className={styles.formdata}>
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className={styles.formdata}>
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className={styles.formrow1}>
                <div className={styles.formdata}>
                  <label>Email</label>
                  <input type="email" />
                </div>
                <div className={styles.formdata}>
                  <label>Phone Number</label>
                  <input type="number" />
                </div>
              </div>
              <div className={styles.formdata}>
                <label>Subject</label>
                <input type="text" />
              </div>
              <div className={styles.formdata}>
                <label>Message</label>
                <input type="text" />
              </div>
              <div className={styles.contactbtn}>
                <button className={styles.headercontact}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
