import React from "react";
import foot from "../assets/css/footer.module.css";

function Footer() {
  return <div>
     <div className={foot.footerdiv}>
        <div className={foot.footermaindiv}>
            <div className={foot.footercolumn1}>
                <img alt="img"  className={foot.footerimg1} src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footerimg1.png')}/>
                <p className={foot.footertext}>We offer high quality advanced training and are unswerving to providing the
                    best
                    training facilities to our students.</p>
                <div className={foot.footermedia}>
                    <img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/facebook.png')} />
                    <img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/linkedin.png')} />
                    <img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/instagram.png')}/>
                </div>
            </div>
            <div className={foot.footerside}>
                <div className={foot.footercolumn2}>
                    <p className={foot.footerbigtext}>Links</p>
                    <p className={foot.footersmalltext1}>About Us</p>
                    <p className={foot.footersmalltext1}>Become an Instructor</p>
                    <p className={foot.footersmalltext1}>Courses</p>
                    <p className={foot.footersmalltext1}>Inquiry</p>

                </div>
                <div className={foot.footercolumn3}>
                    <p className={foot.footerbigtext1}>Contact Us (USA)</p>
                    <p className={foot.footersmalltext}><span><img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footercontact.png')} /></span>(+1) 123 456 7890
                    </p>
                    <p className={foot.footersmalltext}><span><img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footermail.png')}/></span>demo@gmail.com</p>
                    <p className={foot.footersmalllocation}><span className={foot.footerlocationspan}><img alt="img" 
                              src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footerlocation.png')} /></span>Lorem ipsum dolor sit amet consectetur.
                        Facilisis
                        sed justo a metus morbi varius dictum.</p>
                </div>
                <div className={foot.footercolumn3}>
                    <p className={foot.footerbigtext1}>Contact Us (INDIA)</p>
                    <p className={foot.footersmalltext}><span><img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footercontact.png')} /></span>(+91) 123 456 7890
                    </p>
                    <p className={foot.footersmalltext}><span><img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footermail.png')}  /></span>demo@gmail.com</p>
                    <p className={foot.footersmalllocation}><span className={foot.footerlocationspan}><img alt="img" 
                              src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/footerlocation.png')}  /></span>Lorem ipsum dolor sit amet consectetur.
                        Facilisis
                        sed justo a metus morbi varius dictum.</p>
                </div>
            </div>
        </div>
        <div className={foot.footerbtm}>
            <p className={foot.ftrbtmtext}><span><img alt="img" src={require('/persolized/Mit/coading/MERN/MERN/src/assets/images/copyright.png')}/></span> 2024, All Rights Reserved</p>
        </div>

    </div>
  </div>;
}

export default Footer;
