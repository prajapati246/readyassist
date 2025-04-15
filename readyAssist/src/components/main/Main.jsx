import "./Main.scss";
import HomeBanner from "../../assets/home_banner.webp";
import Cng from "../cng/Cng";
import Testimonials from "../testimonials/Testimonials";
import General from "../genral/General";
import JoinUs from "../joinUs/JoinUs";
import WhyUs from "../whyus/WhyUs";
import News from "../news/News";
const Main = () => {
    return (
        <div className='main'>
            <div id="home">
                <div className="home-bg">
                    <div className="homescreen_section mx-auto">
                        <div className="home_left_section">
                            <div className="homescreen_text_btn">
                                <div className="home_screen_section">
                                    <p>24/7 On-Spot</p>
                                    <h1>
                                        Bike & Car<br />
                                        Repair Service
                                    </h1>
                                    <h2>
                                        Anytime & Anywhere in India <br />
                                        Experts in EV Repair.
                                    </h2>
                                </div>
                                <div className="home_btn_parent">
                                    <button className="gradient-border landing_bookbtn box px-20 weight600">BOOK A SERVICE</button>
                                </div>
                            </div>
                            <div className="quickService_container">
                                <div className="quickServices_title">
                                    <p>Popular Services</p>
                                </div>
                                <div className="quickServices_list">
                                    <a className="quickServices_item" href="/#">Car Inspection</a>
                                    <a className="quickServices_item" href="/#">Dashcam Fitment</a>
                                    <a className="quickServices_item" href="/#">Bike Express Service</a>
                                </div>
                            </div>
                            <div className="dummy_div"></div>
                        </div>
                        <div className="home_right_section">
                            <img src={HomeBanner} alt="home banner" />
                        </div>
                    </div>
                </div>
            </div>
            <Cng />
            <Testimonials />
            <General />
            <JoinUs />
            <WhyUs/>
            <News/>
        </div>
    )
}

export default Main