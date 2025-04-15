
import "./footer.scss";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Youtube from "../../assets/youtube.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import call_us from "../../assets/call_us.svg";

const Footer = () => {
    return (
        <div id="footer" className="relative">
            <div className="crop-width mx-auto flex flex-wrap px-10 text-white">
                <div id="footerTop_Card" className="col-12 py-50 px-20 flex justify-center br20">
                    <div className="col-12 col-lg-6 text-white text-center mx-auto">
                        <h2 className="weight500">24/7 Vehicle Care Support Across India</h2>
                        <p className="weight300 py-30">
                            At our core, we deliver round-the-clock repairs and assistance service for bikes and cars,
                            spanning the length and breadth of the country, ensuring a hassle-free ride for our esteemed clientele.
                            With more than 300 workshops, we are India’s largest two-wheeler multi-brand workshops chain.
                        </p>
                        <button className="weight600 py-20 px-30 book-service">BOOK A SERVICE</button>
                    </div>
                </div>

                <div id="footerBottom" className="col-12 flex flex-wrap py-20">
                    <div className="col-12 col-lg-4 py-20">
                        <p className="text-yellow fs-17 weight700 py-10">ReadyAssist</p>
                        <h2 className="text-white weight400">
                            24/7 vehicle care and roadside assistance partner for bikes & cars across India
                        </h2>
                        <p className="text-yellow fs-16 weight700 pt-30 pb-10">Corporate Office</p>
                        <p className="text-white weight400 footerText1">
                            839/2, 24th Main Rd, Behind Thirumala Theatre, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                        </p>
                    </div>

                    <div id="reachUs" className="col-12 col-lg-4 py-20">
                        <p className="text-yellow weight700 py-10">REACH US</p>
                        <div className="flex align-items-center">
                            <img src={call_us} alt="" />
                            <a className="text-white weight400 footerText1" href="tel:8197852852">8197 852 852</a>
                        </div>
                        <p className="text-yellow weight700 pt-30 pb-10">EMAIL</p>
                        <a className="text-white weight400 footerText1" href="mailto:hello@readyassist.in">hello@readyassist.in</a>
                    </div>

                    <div id="quickLinks" className="col-12 col-lg-4 py-20">
                        <p className="text-yellow footerText1 weight700 pb-10">QUICK LINKS</p>
                        <ul>
                            <li><a className="footerText1" href="/aboutus-readyassist.html">About Us</a></li>
                            <li><a className="footerText1" href="https://app.readyassist.in/activate-subscription">Activate Voucher</a></li>
                            <li><a className="footerText1" href="/my-subscriptions.html">My Subscriptions</a></li>
                            <li><a className="footerText1" href="/careers.html">Career</a></li>
                            <li><a className="footerText1" href="/contact-readyassist.html">Contact Us</a></li>
                            <li><a className="footerText1" href="/terms-and-conditions.html">Terms & Conditions</a></li>
                            <li><a className="footerText1" href="/prime-terms-and-conditions.html">Prime Terms & Conditions</a></li>
                            <li><a className="footerText1" href="/privacy.html">Privacy Policy</a></li>
                            <li><a className="footerText1" href="/readyassist-news.html">News</a></li>
                        </ul>
                    </div>

                    <div id="social_links" className="col-12 flex justify-center py-30">
                        <a className="px-1" href="https://www.facebook.com/readyassist/" target="_blank">
                            <img src={Facebook} className="p-1 social_icons social_icon1" width="30px" alt="facebook" loading="lazy" />
                        </a>
                        <a className="px-1" href="https://www.linkedin.com/company/readyassist/mycompany/" target="_blank">
                            <img src={Linkedin} className="social_icons social_icon2" width="30px" alt="linkedin" loading="lazy" />
                        </a>
                        <a className="px-1" href="https://www.instagram.com/readyassist/?hl=en" target="_blank">
                            <img src={Instagram} className="p-1 social_icons social_icon3" width="30px" alt="instagram" loading="lazy" />
                        </a>
                        <a className="px-1" href="https://api.whatsapp.com/send?phone=918197852852" target="_blank">
                            <img src={Whatsapp} className="p-1 social_icons social_icon4" width="30px" alt="whatsapp" loading="lazy" />
                        </a>
                        <a className="px-1" href="https://www.youtube.com/channel/UC59ULnyZcU9hmO63uu6xFrA" target="_blank">
                            <img src={Youtube} className="p-1  social_icons social_icon5" width="30px" alt="youtube" loading="lazy" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
