import "./cng.scss";
import CNG from "../../assets/cngimg.webp";
import RSA from "../../assets/RSA.webp";
import GHTFY from "../../assets/1ghtfy.webp";
import Warrenty from "../../assets/Extended-Warranty.webp";
import Telematics from "../../assets/Telematics.webp";
import Services from "../../assets/Doorstep-Services.webp";
import Landing_Left from "../../assets/landing_left.webp";
import Main_Img from "../../assets/main-image.webp";


const Cng = () => {

    return (
        <>
            <div id='cng'>
                <div className="cng_section mx-auto">
                    <div className="cng_left_section">
                        <h3>CNG<span>First</span></h3>
                        <h5>Powering Future</h5>
                        <p>CNG Retro-fitment is the process of converting your existing petrol or diesel vehicle to operate on
                            Compressed
                            Natural Gas (CNG) fuel. You can convert your vehicles with government-approved CNG kits at ReadyAssist
                            retro-fitment
                            centers.</p>
                        <div className="cng_nav">
                            <a href="/#" className="cng_nav_button">know More </a>
                        </div>
                    </div>
                    <div className="cng_right_section">
                        <img src={CNG} alt="cng image" />
                    </div>
                </div>
            </div>
            <div id="businessVerticals">
                <div className="businessVerticals_section mx-auto">
                    <div className="businessVerticals_head">
                        <h3>ReadyAssist Business Verticals</h3>
                        <p>ReadyAssist offers comprehensive after-sales support services that
                            cater to the entire vehicle ownership cycle in the automobile segment. Our range of services is tailored to
                            meet
                            the needs of individuals and corporate customers alike. Below, you'll find an overview of
                            some of the key services we provide.
                        </p>
                    </div>
                    <div className="businessVerticals_card_section">
                        <div className="businessVerticals_card">
                            <img alt="Roadside Assistance" src={RSA} />
                            <p>RSA</p>
                        </div>
                        <div className="businessVerticals_card">
                            <img alt="car & bike doorstep services" src={Services} />
                            <p>Doorstep Services</p>
                        </div>
                        <div className="businessVerticals_card">
                            <img alt="car & bike accessories fitment" src={Telematics} />
                            <p>Accessories Fitment</p>
                        </div>
                        <div className="businessVerticals_card">
                            <img alt="Extended Warranty" src={Warrenty} />
                            <p>Extended Warranty</p>
                        </div>
                        <div className="businessVerticals_card">
                            <img alt="Telematic Installation" src={GHTFY} />
                            <p>Telematic Installation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="inspection">
                <div className="shape">
                    <img src={Landing_Left} alt="Shape" />
                    <div className="shape_right_bottom"></div>
                </div>
                <div className="inspection_section mx-auto">
                    <div className="inspection_left">
                        <div className="inspection_text">
                            <h2>
                                Car Inspection <br />
                                <span>Services</span>
                            </h2>
                            <ul>
                                <li>Doorstep Inspections</li>
                                <li>78-Point Vehicle Health Check</li>
                                <li>Fault Detection and Repair Recommendations</li>
                            </ul>
                        </div>
                        <div className="inspection_btn_parent">
                            <a href="/#" className="inspection_view_btn">
                                Know More
                            </a>
                        </div>
                    </div>
                    <div className="inspection_right" style={{ zIndex: 3 }}>
                        <img src={Main_Img} alt="ReadyAssist Mechanic" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cng