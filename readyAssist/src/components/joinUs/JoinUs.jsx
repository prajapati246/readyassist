import "./joinus.scss";
import service_Provider from "../../assets/service_provider.webp";
import { useState } from "react";
import { useEffect } from "react";
const JoinUs = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        };

        const interval = setInterval(toggleVisibility, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div id="joinUs" className="relative flow-hide">
                <div id="joinUsBackground" className="absolute w-100 h-100">
                    <div className="justify-center h-100">
                        <div id="backgroundSeg1" className="col-12 flex flex-wrap h-100">
                            <div className="col-12 col-lg-6 skew-1"></div>
                            <div className="col-12 col-lg-6 skew-2"></div>
                        </div>
                    </div>
                </div>

                <div id="joinUsContent" className="px-20">
                    <div className="justify-center">
                        <div className="col-12 crop-width flex flex-wrap">
                            <div className="col-12 col-lg-5">
                                <p className="weight600" style={{ color: "#198754" }} >Mac+</p>
                                <p id="joinUs_text2" className="weight700 py-20">SERVE WITH US <br /> AND EARN MORE</p>
                                <p id="joinus_description" className="weight400 py-10">Step into our service partner network and become an
                                    esteemed member of a
                                    10000+ technician family to unlock the ultimate earning potential. Seize this chance
                                    to grow your business by joining our service network. Let's achieve unparalleled
                                    success together!!
                                </p>
                                <div style={{ padding: "25px 0" }}>
                                    <a id="know_more_btn" className="text-white weight500" href="/#">Know More</a>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4 flow-hide">
                                <div className="relative flow-hide flex justify-center">
                                    <div id="anim_wrapper" className="relative" style={{ transform: "translateX(0px) scale(1)" }}></div>
                                    <div className="absolute">
                                        <img id="anim_img" alt="readyassist mechanic" src={service_Provider} style={{ transform: "translateY(310px)" }} className={isVisible ? "show" : ""} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-3">
                                <div className="text-start text-lg-end">
                                    <p className="weight500 text-white fs-20 py-10">Get in with info</p>
                                    <input type="text" autoComplete="off" id="sp_name" className="joinUsInputs w-100 weight500 text-white" placeholder="Full Name" />
                                    <input type="number" autoComplete="off" id="sp_number" className="joinUsInputs w-100 weight500 text-white" placeholder="Mobile Numbers" />
                                    <input type="email" autoComplete="off" id="sp_email" className="joinUsInputs w-100 weight500 text-white" placeholder="Email Id" /> <br />
                                    <button className="weight500 joinus_btn py-20 text-white my-10">JOIN US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs