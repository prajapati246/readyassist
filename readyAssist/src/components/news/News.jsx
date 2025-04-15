import "./news.scss";
import news1 from "../../assets/news1.jpg"
import news2 from "../../assets/news2.jpg"
import news3 from "../../assets/news3.jpg"
const News = () => {
    return (
        <>
            <div id="news" className="py-50">
                <div id="newsSeg" className="crop-width flex flex-wrap">
                    <div className="col-12 col-lg-4 px-20">
                        <div className="pointer col-12">
                            <p style={{ color: "#ffcc33" }} className="weight600 py-10">moneycontrol</p>
                            <img src={news1} alt="News" className="w-100 my-2 br20" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 px-20">
                        <div className="pointer col-12">
                            <p style={{ color: "#ffcc33" }} className="weight600 py-10">Linkedin</p>
                            <img src={news2} alt="News" className="w-100 my-2 br20" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 px-20">
                        <div className="pointer col-12">
                            <p style={{ color: "#ffcc33" }} className="weight600 py-10">ET Auto</p>
                            <img width="376px" height="281" style={{ maxWidth: "100%", height: "auto" }} src={news3} alt="News" className="w-100 my-2 br20" />
                        </div>
                    </div>
                </div>
                <div className="news_knowmore_btn mx-auto">
                    <a href="./readyassist-news.html">more &gt;&gt;</a>
                </div>
            </div>


            <div id="rewards">
                <div className="crop-width">
                    <div id="rewardsLeft">
                        <p className="weight500">GIVE-AWAY</p>
                        <p className="weight600">
                            Get the chance to win a subscription package worth Rs. 1000!
                        </p>
                        <p className="weight300">
                            We highly appreciate your valuable suggestions and feedback. We'll
                            list the best recommendations/reviews and will give offer
                            subscription packages as a token of our gratitude.
                        </p>
                    </div>
                    <div id="rewardsRight">
                        <div className="col12">
                            <div className="col-12">
                                <div className="col-lg-6">
                                    <input
                                        id="nameInp" placeholder="Name" className="input_feedback" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="tel" maxLength="10" onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }}
                                        id="phoneInp" placeholder="Phone Number" className="input_feedback"
                                    />
                                </div>
                            </div>
                            <input type="email" placeholder="Email" className="input_feedback" />
                            <input type="text" placeholder="Your Suggestion" className="input_feedback" />
                            <button className="submit_button">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default News;