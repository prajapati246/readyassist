import Contact_sales from "../contact_sales/Contact_sales";
import Faqquestions from "../faqquestions/Faqquestions";
import "./prime_subscription.scss";
import Footer from "../../footer/Footer";
import DownloadApp from "../../downloadApp/DownloadApp";

const Prime_subscription = () => {
    return (
        <>
            <div id="Prime_subscription">
                <div className="Prime_section mx-auto">
                    <div className="Prime_section_bg">
                        <div className="Prime_section_left">
                            <div className="Prime_section_h1">Secure your EV with ReadyAssist Prime Support & Ride worry-free!</div>
                            <p className="Prime_section_p">Investing in an electric vehicle is a smart choice, and with
                                ReadyAssist Prime Support, it's an even smarter one. Our comprehensive 5-year plan provides
                                blanket coverage to critical parts of your electric 2-wheeler, along with general service,
                                unlimited roadside assistance support, accessories fitment, and more - all at no extra cost
                                to you! Make the switch to electric with confidence and let ReadyAssist Prime Support take
                                care of the rest.
                            </p>
                        </div>
                        <div className="Prime_section_right">
                            <div className="tryprime_btn">
                                <a href="/#">Try Prime</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact_sales />
            <Faqquestions />
            <DownloadApp />
            <Footer />
        </>
    )
}

export default Prime_subscription