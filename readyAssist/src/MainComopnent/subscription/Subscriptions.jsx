import './subscriptions.scss';
import RAflash from "../../assets/RA flash.svg";
import { useState } from 'react';
import bbblurry from "../../assets/bbblurry.svg";
import rupee from "../../assets/rupee.svg";
import Prime_subscription from '../../components/subscriptionComponents/Prime_subscription/Prime_subscription';
const Subscriptions = () => {
  const [activeTab, setActiveTab] = useState("bike");
  const subscriptionData = {
    bike: [
      { name: 'Bike Premium', price: 6499, validity: '365 days', benefits: ['Flat Tyre (Tube)', 'Flat Tyre (Tubeless)', 'Battery Jumpstart', 'Battery Swapping', 'Custody Service'], id: 10 },
      { name: 'Bike Basic', price: 999, validity: '365 days', benefits: ['Flat Tyre (Tube)', 'Flat Tyre (Tubeless)', 'Battery Jumpstart', 'Starting Problem', 'Custody Service'], id: 24 },
      { name: 'Bike Pro', price: 1299, validity: '365 days', benefits: ['Flat Tyre (Tube)', 'Flat Tyre (Tubeless)', 'Battery Jumpstart', 'Battery Swapping', 'Starting Problem'], id: 25 }
    ],
    car: [
      { name: 'Freedom Plan', price: 699, validity: '365 days', benefits: ['Accidental Towing'], id: 7 },
      { name: 'Car Premium', price: 9999, validity: '365 days', benefits: ['Flat Tyre (Tube)', 'Flat Tyre (Tubeless)', 'Battery Jumpstart', 'Battery Swapping', 'Custody Service'], id: 11 },
      { name: 'Car Basic', price: 1699, validity: '365 days', benefits: ['Flat Tyre (Tube)', 'Flat Tyre (Tubeless)', 'Battery Jumpstart', 'Starting Problem', 'Key Unlock Assistance'], id: 26 },
      { name: 'Car Pro', price: 2749, validity: '365 days', benefits: ['Flat Tyre (Tube)', 'Flat Tyre (Tubeless)', 'Battery Jumpstart', 'Starting Problem', 'Key Unlock Assistance'], id: 27 }
    ],
    others: []
  };

  const buyBtn = (id, quantity) => {
    console.log("Selected Plan ID:", id);
    console.log("Quantity:", quantity);
    console.log("Plan Details:", subscriptionData[activeTab].find(plan => plan.id === id));
  };

  return (
    <>
    <div className='subscriptions'>
      <div id="subscriptions_home">
        <div className="planhead_section mx-auto">
          <div className="home_head_section">
            <div className="head_text_section">
              <h1 className="head_text">Choose your plan</h1>
              <div className="head_text_sub">
                <img src={RAflash} alt="RAflash" style={{ width: "18px", height: "18px" }} />
                <div style={{ margin: "auto 0" }}>Get your 365 days of RSA service</div>
              </div>
              <p>Unlock Your Benefits Today - Choose Your Perfect Plan!</p>
            </div>
            <div className="carbike_nav_section">
              <div className="tab-titles">
                <p className={`tab-links ${activeTab === "bike" ? "active-link" : ""} `} onClick={() => setActiveTab('bike')}>Bike</p>
                <p className={`tab-links ${activeTab === "car" ? "active-link" : ""} `} onClick={() => setActiveTab('car')}> Car</p>
                <p className={`tab-links ${activeTab === "others" ? "active-link" : ""} `} onClick={() => setActiveTab('others')}>Others</p>
              </div>
            </div>
          </div>
          <div className="home_body_section">
            {
              Object.entries(subscriptionData).map(([tab, plans]) => (
                <div key={tab} className={`tab-contents ${activeTab === tab ? "active-tab" : ""} `} id={tab}>
                  <div className="subscriptionPlans_card_section">
                    {plans.map((plan) => (
                      <div className="subscriptionPlans_card" key={plan.id}>
                        <div className="subscriptionPlans_card_child">
                          <div className="subscription_Name_parent">
                            <img className='subscription_Name_icon' src={bbblurry} alt="bbblurry" style={{ width: "24px", height: "24px" }} />
                            <p className="subscription_Name">{plan.name}</p>
                          </div>
                          <div className="subscription_Price_Parent">
                            <img src={rupee} alt="rupee" />
                            <div className="subscription_Price">{plan.price}</div>
                            <div className="sub_validity"> {plan.validity}</div>
                          </div>
                          <div className="subscription_Benefits">
                            <ul>
                              {
                                plan.benefits.map((benefit, index) => (
                                  <li key={index}>
                                    <p className='subscription_benefit_detail'>{benefit}</p>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                        <div className="subscription_Buy_Button_section">
                          <button className='subscription_button' onClick={() => buyBtn(plan.id, 1)} >Get Plan</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    <Prime_subscription/>
    </>
  )
}

export default Subscriptions