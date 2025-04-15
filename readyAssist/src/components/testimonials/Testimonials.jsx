import "./testimonials.scss";
import Ashok from "../../assets/ashok.webp";
import Debanjali from "../../assets/debanjali.webp";
import Shoinder from "../../assets/shohinder.webp";
import Anup from "../../assets/anup_naik.webp";
import { useRef, useState } from "react";
import { useEffect } from "react";

const testimonialsData = [
    {
        id: 1,
        text: "As a company, our focus has been to strengthen our after-sales service to ensure a hassle-free experience for our B2C and B2B customer. The initiative with ReadyAssist focuses on empowering and increasing awareness for EVs.",
        name: "Sohinder Singh Gill",
        position: "CEO, Hero Electric",
        image: Ashok
    },
    {
        id: 2,
        text: "ReadyAssist has been very instrumental in supporting our GPS related on-field operations. While we thought of deploying people on field to handle such huge scale, we found ReadyAssist to be the best fit partner.",
        name: "Anup Naik",
        position: "CEO, Zeliot",
        image: Anup
    },
    {
        id: 3,
        text: "Roadside Assistance from ReadyAssist on DriveU is a great addition for our customers. It's great fit with our motto of simplifying the car ownership journey for the millions of car owners in India.",
        name: "Ashok Shastry",
        position: "Co-Founder & CEO, DriveU",
        image: Shoinder
    },
    {
        id: 4,
        text: "We are extremely happy to have associated with a start-up like ReadyAssist, which shares our empathy and understanding of the relevance of mechanics in the entire mobility ecosystem.",
        name: "Debanjali Sengupta",
        position: "Country Head, Shell",
        image: Debanjali
    }
];


const Testimonials = () => {

    const scrollContainer = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
                if (
                    scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth >=
                    scrollContainer.current.scrollWidth
                ) {
                    scrollContainer.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div id="testimonials" className="px-20">
            <div className="crop-width pt-50">
                <div className="text-center">
                    <p id="testimonialTitle" className="weight600">TESTIMONIALS</p>
                    <p id="testimonailSubTitle" className="weight700">Hear From Our Clients</p>
                </div>
            </div>
            <div id="clientTestimonials" className="flex flowY-Scroll py-50" ref={scrollContainer}>
                {
                    testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="col-12 col-lg-6 px-lg-20">
                            <div className={`flex flex-col justify-between testimonialCard`}>
                                <p>{testimonial.text}</p>
                                <div className="flex items-center justify-end">
                                    <div>
                                        <p className="weight600">{testimonial.name}</p>
                                        <p className="weight300" style={{ fontSize: "12px" }}>CEO, Hero Electric</p>
                                    </div>
                                    <img alt={testimonial.name} className="testimonialImage" src={testimonial.image} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials