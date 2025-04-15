import "./contact_sales.scss";
import contact_bg from "../../../assets/contact_bg.jpeg";
const Contact_sales = () => {
    return (
        <div id="contact_sales">
            <div className="contact_sales_section">
                <div className="contact_sales_bg"><img src={contact_bg} alt="contact_bg" /></div>
                <div className="contact_sales_container">
                    <div>
                        <div className="contact_sales_h1">Connect with our sales support team</div>
                        <div className="contact_sales_h2">For any queries please give a missed call to 080-468 09723</div>
                        <div className="contact_sales_p">Please share your mobile number, and we'll contact you to help you
                            choose the ideal RSA
                            plan that suits your requirements.
                        </div>
                    </div>
                    <div className="contact_sales_form">
                        <div className="form_container">
                            <div className="form_group">
                                <input type="number" className="form_input" placeholder="Mobile Number" name="mobileno" autoComplete="mobileno" maxLength={10} pattern="\d{10}" required="" />
                            </div>
                            <div>
                                <button className="btn_submit">→</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_sales