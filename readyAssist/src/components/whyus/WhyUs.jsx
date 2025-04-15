import "./whyus.scss";
import whyUs from "../../assets/whyus_multimedia.webp";
import whyushape from "../../assets/whyus_shape1.svg";

import DownloadApp from "../downloadApp/DownloadApp";

const WhyUs = () => {
    return (
        <>
            <div id="whyus">
                <div className="whyus_section mx-auto">
                    <div className="whyus_left">
                        <h6>Why Choose Us</h6>
                        <h3>Why People choose Our Services?</h3>
                        <p>ReadyAssist offers comprehensive roadside assistance and expert vehicle care services right at your
                            doorstep. Whether you're dealing with a breakdown, upgrading your vehicle, or enhancing its features, our
                            skilled technicians provide seamless, reliable solutions tailored to your needs.</p>
                        <div className="whyus_checkbox">
                            <ul>
                                <li>Expert Technicians</li>
                                <li>At Your Doorstep</li>
                                <li>Customized Solutions</li>
                            </ul>
                            <ul>
                                <li>Quick and Convenient</li>
                                <li>Customer Satisfaction</li>
                            </ul>
                        </div>
                        <div className="book_service_btn">
                            <button className="whyus_book_service">Book Service</button>
                        </div>
                    </div>
                    <div className="whyus_right">
                        <img src={whyUs} alt="installation image" />
                        <div className="whyus_shape">
                            <img src={whyushape} alt="shape" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
<DownloadApp/>
        </>
    )
}

export default WhyUs