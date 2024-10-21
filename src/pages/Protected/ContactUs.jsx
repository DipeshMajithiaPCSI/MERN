import React from "react";
import styles from "../../assets/css/ContactUs.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

function ContactUs() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Please Enter the First Name")
      .min(2, "too short")
      .max(20, "to long"),
    lastname: Yup.string()
      .required("Please Enter the Last Name")
      .min(2, "too short")
      .max(20, "to long"),
    email: Yup.string()
      .email()
      .required("Please enter the Email-id")
      .min(2, "too short")
      .max(20, "to long"),
    phonenumber: Yup.number()
      .positive()
      .required("Please enter the phone number")
      .min(10, "too short")
      .max(15, "to long"),
    subject: Yup.number()
      .required("Please enter the subject")
      .min(2, "too short")
      .max(20, "to long"),
    message: Yup.number()
      .required("Please enter the phone message")
      .min(2, "too short")
      .max(200, "to long"),
  });
  // const formik =useFormik({
  //     initialValues:{
  //         firstname:"",
  //         lastname:"",
  //         email:"",
  //         phonenumber:"",
  //         subject:"",
  //         message:""
  //     },
  //     onSubmit: values=>{
  //         console.log(values)
  //     },
  //     validationSchema:Yup.object({
  //         firstname: Yup.string().required("Please Enter the First Name"),
  //         lastname: Yup.string().required("Pease Enter the Lastname Name"),
  //         email: Yup.string().required("Pease enter the Email-id")
  //     })
  // })
  return (
    <div>
      {/* <!-- ----------------------------------------section1------------------------------------------------ --> */}
      <div className={styles.section1}>
        <div>
          <img
            className={styles.section1img}
            src={require(`../../assets/images/contact.png`)}
          />
        </div>
        {/* <!-- ----------------------------------------section2------------------------------------------------ --> */}
        <div className={styles.section2}>
          <div className={styles.divshadow}>
            <div className={styles.locationdiv}>
              <div
                className={styles.locationdiv1}
                style={{ marginBottom: "20px" }}
              >
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
                  <span style={{ marginTop: "-12px" }}>
                    <img src={require(`../../assets/images/location1.png`)} />
                  </span>
                  Lorem ipsum dolor sit amet consectetur. Vel
                  <br />
                  elementum massa mauris augue pretium. Id.
                </p>
              </div>
              <div className={styles.locationdiv1}>
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
                  <span style={{ marginTop: "-12px" }}>
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
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  {/* {alert(formik.errors.email && formik.touched.email && formik.errors.email)}  */}
                  <div className={styles.formdiv}>
                    <div className={styles.formrow1}>
                      <div className={styles.formdata}>
                        <label>First Name</label>
                        <Field
                          name="firstname"
                          style={{ backgroundColor: "red" }}
                        />
                        <ErrorMessage name="firstname" component="span" />
                      </div>
                      <div className={styles.formdata}>
                        <label>Last Name</label>
                        <Field name="lastname" />
                        <ErrorMessage name="lastname" component="span" />
                      </div>
                    </div>

                    <div className={styles.formrow1}>
                      <div className={styles.formdata}>
                        <label>Email</label>
                        <Field name="email" />
                        <ErrorMessage name="email" component="span" />
                      </div>
                      <div className={styles.formdata}>
                        <label>Phone Number</label>
                        <Field name="phonenumber" />
                        <ErrorMessage name="phonenumber" component="span" />
                      </div>
                    </div>
                    <div className={styles.formdata}>
                      <label>Subject</label>
                      <Field name="subject" />
                      <ErrorMessage name="subject" component="span" />
                    </div>
                    <div className={styles.formdata}>
                      <label>Message</label>
                      <Field name="message" />
                      <ErrorMessage name="message" component="span" />
                    </div>
                    <div className={styles.contactbtn}>
                      <button
                        type="submit"
                        name="sendbtn"
                        className={styles.headercontact}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
