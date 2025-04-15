import { useState } from "react";
import "./faqquestions.scss";

const faqs = [
    {
        "question": "What are the different kinds of Roadside Assistance Subscription Plans available with ReadyAssist?",
        "answer": "ReadyAssist offers Subscription Plans like Freedom plan, Basic, Pro, and Elite for Bikes and Cars."
    },
    {
        "question": "What is the validity of a Roadside Assistance Subscription Plan?",
        "answer": "Generally, a Subscription Plan is valid for one (1) year, but there are Micro Level Subscription plans with varying validity."
    },
    {
        "question": "What is Emergency Roadside Assistance?",
        "answer": "It is an emergency on-spot service for vehicle breakdowns, covering services like flat tyre support, battery jumpstart, towing, and more."
    },
    {
        "question": "Why am I not allowed to avail a service immediately after buying a Subscription Plan?",
        "answer": "There is a cooling period of 72 to 120 hours from the purchase time to allow for updates and prevent misuse."
    },
    {
        "question": "I have purchased a Roadside Assistance Subscription Plan from an authorized seller of ReadyAssist, how do I avail the services?",
        "answer": "Activate your plan via the ReadyAssist Customer App or website, then contact the hotline or book services through the app or website after the cooling period."
    },
    {
        "question": "Can I use my Roadside Assistance Subscription plan for my other Vehicle?",
        "answer": "No, the plan is vehicle-specific. Multiple plans are needed for different vehicles."
    },
    {
        "question": "What are the different services that are covered under the Roadside Assistance Subscriptions Plan?",
        "answer": "Services include flat tyre repair, battery jumpstart, minor repairs, towing, emergency fuel delivery, and more."
    },
    {
        "question": "What is the Turnaround Time (TAT) for a service?",
        "answer": "TAT is 60 minutes within city limits and 2-3 hours for outside city limits, subject to external conditions."
    },
    {
        "question": "Will the Roadside Assistance Subscription Plan cover the major repairs?",
        "answer": "No, it covers on-spot repairs only; major repairs require towing to a repair center."
    },
    {
        "question": "Why am I charged extra despite being the subscribed Customer of ReadyAssist?",
        "answer": "Additional costs may arise for extra services or consumables needed during repairs."
    },
    {
        "question": "What is the procedure for a Fuel Delivery Service?",
        "answer": "Fuel can be delivered directly to the vehicle, with costs borne by the customer, and requires a government ID for security."
    },
    {
        "question": "Is a First Information Report (FIR) required for availing the towing service?",
        "answer": "An FIR is not mandatory, but a police clearance certificate is needed for accidental towing."
    },
    {
        "question": "When can I avail breakdown towing service?",
        "answer": "For breakdowns that cannot be fixed on the spot, towing is free for the first 100 kilometers."
    },
    {
        "question": "When Can I avail accidental towing service?",
        "answer": "For accidents rendering the vehicle non-drivable, towing is free for the first 50 kilometers."
    },
    {
        "question": "When can I avail key unlock service?",
        "answer": "This service is available if a spare key is accessible at home or the dealership."
    },
    {
        "question": "When can I avail minor repair service?",
        "answer": "For minor electrical and mechanical issues, this service can be requested."
    },
    {
        "question": "When can I avail pick up and drop service?",
        "answer": "This service is for registered vehicles needing transport to a service center."
    },
    {
        "question": "What is auto insurance claim support and when can I avail it?",
        "answer": "Claim experts provide consulting for registered vehicles regarding insurance claims."
    },
    {
        "question": "How many times can I avail accessories fitment service?",
        "answer": "This service can be availed 3 times in 5 years for new accessories for EVs, scheduled in advance."
    }
];

const Faqquestions = () => {
    const [active, setActive] = useState(false);
    const toggleActive = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <div id="faqquestions">
            <div className="container">
                <div className="faqs-container">
                    <div className="faq-text">FAQ</div>
                    <div className="faq-heading">Frequently Asked Questions</div>
                    <div className="questions-container">
                        {faqs.map((faq, index) => (
                            <div className="content-container" key={index}>
                                <div className="faq-header" onClick={() => toggleActive(index)}>
                                    <h3>{faq.question}</h3>
                                    <span className={`open ${active === index ? "active" : ""}`}>+</span>
                                    <span className={`close ${active === index ? "active" : ""}`}>-</span>
                                </div>
                                <div className={`content ${active === index ? "show" : "hide"}`}>
                                    <p>{faq.answer} </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqquestions;
