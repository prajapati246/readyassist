import "./general.scss";
import General_bg from "../../assets/2w-general-bg.jpg";
import ra_home from "../../assets/ra_home_video.mp4";
import car from "../../assets/car.gif";
import location from "../../assets/location.gif";
import people from "../../assets/people.gif";
import SpNetwork from "../../assets/spNetwork.gif";
const General = () => {
    return (
        <>
            <div id="generalService">
                <div className="generalService_section mx-auto">
                    <div className="generalService_left">
                        <div className="generalService_text">
                            <p>Bike Express Service</p>
                            <h2>Get your bike serviced without leaving your home!</h2>
                        </div>
                        <div className="generalService_para">
                            <p>Bangalore's trusted doorstep bike service – expert care delivered right to your location. Enjoy quick,
                                reliable, and
                                affordable maintenance for bikes and scooters</p>
                        </div>
                        <div className="generalService_checkbox">
                            <ul>
                                <li>Free Engine Oil</li>
                                <li>Upto 150cc</li>
                                <li>For Bikes & Scooters</li>
                            </ul>
                        </div>
                        <div className="generalService_book">
                            <a className="generalService_btn" href="/#">Check Now </a>
                        </div>
                    </div>
                    <div className="generalService_right">
                        <img src={General_bg} />
                    </div>
                </div>
            </div>

            <div id="raVideo" className="px-20">
                <div className="crop-width flow-hide mx-auto py-50 flex flex-wrap text-white">
                    <div id="pushVideo" className="w-100 py-lg-50 pb-40">
                        <video autoPlay controls loop muted width="1250px" height="703px" className="br-20">
                            <source src={ra_home} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 px-10 py-10">
                        <div className="col-12 br20 h-100 flex items-center statsCard">
                            <div className="col-7 statData">
                                <p className="weight700 fs-xl-22">3 Million+</p>
                                <p className="py-2 text-white">Vehicles Served</p>
                            </div>
                            <div className="text-end col-5">
                                <img src={car} className="gif_images" alt="vehicles served" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 px-10 py-10">
                        <div className="col-12 br20 h-100 flex items-center statsCard">
                            <div className="col-7 statData">
                                <p className="weight700 fs-xl-22">19000+</p>
                                <p className="py-2 text-white">Pincodes Covered</p>
                            </div>
                            <div className="text-end col-5">
                                <img src={location} className="gif_images" alt="vehicles served" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 px-10 py-10">
                        <div className="col-12 br20 h-100 flex items-center statsCard">
                            <div className="col-7 statData">
                                <p className="weight700 fs-xl-22">9000+</p>
                                <p className="py-2 text-white">Service Providers</p>
                            </div>
                            <div className="text-end col-5">
                                <img src={people} className="gif_images" alt="vehicles served" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 px-10 py-10">
                        <div className="col-12 br20 h-100 flex items-center statsCard">
                            <div className="col-7 statData">
                                <p className="weight700 fs-xl-22">2.5 Million+</p>
                                <p className="py-2 text-white">Subscribed Users</p>
                            </div>
                            <div className="text-end col-5">
                                <img src={SpNetwork} className="gif_images" alt="vehicles served" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default General