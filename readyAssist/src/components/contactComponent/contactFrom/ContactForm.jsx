import "./contactForm.scss";
import DownloadApp from '../../downloadApp/DownloadApp';
import Footer from '../../footer/Footer';

const ContactForm = () => {
    return (
        <>
        <div className="px-10 px-lg-20">
            <div className="contactDiv br20 py-50">
                <div className="flex flex-wrap crop-width px-20 justify-content-between py-20 py-lg-50">
                    <div className="col-12 col-md-6 position-relative overflow-hidden">
                        <p id="contact_title" className="weight700 pb-10" style={{ lineHeight: "120%", color: "#069" }}>
                            Happy to <br />Help!
                        </p>
                        <div className="pb-20">
                            <p className="weight400 pb-20 text2 pe-lg-20" style={{ color: "rgb(1,39,58)" }}>
                                Contact us via email, Phone or complete the form to discover how ReadyAssist can help solve your problem.
                            </p>
                            <p className="weight600 text1">Reach Us</p>
                            <p className="text2 pb-10">
                                <a className="weight300" href="/#">8197-852-852</a>
                            </p>
                            <p className="weight600 text1">Email</p>
                            <p className="pb-3 text2">
                                <a href="/#">hello@readyassist.in</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 bg-white br20 px-20 px-lg-30 py-20">
                        <div id="radio_segment" className="col-12  text-center poppins400">
                            <div id="radio_sales" className="col-4 py-10 ">
                                <p className="py-2">Sales</p>
                            </div>
                            <div id="radio_sales" className="col-4 py-10 active ">
                                <p className="py-2">Service</p>
                            </div>
                            <div id="radio_sales" className="col-4 py-10">
                                <p className="py-2">Escalations</p>
                            </div>
                        </div>
                        <p className="poppins300 fs-13 fs-md-15 pt-10">Connect to our sales team for <span className="poppins500 fs-13 fs-md-15">enquiry</span></p>
                        <input type="text" autoComplete="off" placeholder="Name" className="w-100 my-10 poppins500 input px-30" />
                        <input type="tel" autoComplete="off" placeholder="Phone" className="w-100 my-10 poppins500 input px-30" />
                        <input type="email" autoComplete="off" placeholder="Email Address" className="w-100 my-10 poppins500 input px-30" />
                        <textarea className="input px-30 py-20 weight500 w-100 my-10" style={{ height: "150px" }} placeholder="Message" cols="50"></textarea>
                        <div className="col-12 text-end pt-md-2 pb-md-4">
                            <button className="text-white fs-14 px-20 py-10 weight500 mx-auto" style={{ backgroundColor: "#1264FF", borderRadius: "30px" }}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DownloadApp/>
        <Footer/>
        </>
    )
}

export default ContactForm