import "./service.scss";
import Search from "../../assets/search_icon.svg";
import Towing from "../../assets/towing.webp";
import Flattyre from "../../assets/flat-tyre.webp";
import Battery_jumpstart from "../../assets/battery-jumpstart.webp";
import Starting_Problem from "../../assets/starting-problem.webp";
import Key_Unlock from "../../assets/key-unlock.webp";
import Fuel_Delivery from "../../assets/fuel-delivery.webp";
import Tyre_fitting from "../../assets/tyre-fitting.webp";
import Dashcam from "../../assets/dash-cam.webp";
import MultiMedia from "../../assets/multimedia.webp";
import Carinspection from "../../assets/car-inspection.webp";
import Minor_repair from "../../assets/minor-repair.webp";
import { useState } from "react";

const Service = ({ closeDropdown }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      category: 'Roadside Assistance',
      items: [
        {
          name: 'Towing',
          description: 'Anything from flatbed to safe lifting',
          image: Towing,
          link: '/towing-service-readyassist.html',
          alt: 'towing service icon'
        },
        {
          name: 'Flat-Tyre',
          description: 'Tube or Tubeless puncture repair',
          image: Flattyre,
          link: '/flat-tyre-puncture-repair.html',
          alt: 'flat-tyre service icon'
        },
        {
          name: 'Battery-Jumpstart',
          description: 'Get jumpstart from professionals',
          image: Battery_jumpstart,
          link: '/battery-jumpstart.html',
          alt: 'battery jumpstart icon'
        },
        {
          name: 'Starting Problem',
          description: 'Make your vehicle moving',
          image: Starting_Problem,
          link: '/onspot-breakdown-starting-problem.html',
          alt: 'minor repair icon'
        },
        {
          name: 'Key-Unlock-Assistance',
          description: 'One-stop unlock assistance',
          image: Key_Unlock,
          link: '/key-unlock-bike-car.html',
          alt: 'key-unlock service icon'
        },
        {
          name: 'Fuel-Delivery',
          description: 'Petrol/Diesel delivered faster',
          image: Fuel_Delivery,
          link: '/petrol-diesel-fuel-delivery.html',
          alt: 'fuel delivery icon'
        }
      ]
    },
    {
      category: 'Fitment Services',
      items: [
        {
          name: 'Fitment Service',
          description: 'Make your vehicle upgrade',
          image: Tyre_fitting,
          link: '/fitment-service.html',
          alt: 'fitment service icon'
        },
        {
          name: 'Dashcam Installation',
          description: 'Capture every driving moment',
          image: Dashcam,
          link: '/dashcam-installation.html',
          alt: 'dashcam installation icon'
        },
        {
          name: 'Multimedia System Installation',
          description: 'Enhance your driving experience',
          image: MultiMedia,
          link: '/multimedia-installation.html',
          alt: 'multimedia system icon'
        }
      ]
    },
    {
      category: 'General Repair Services',
      items: [
        {
          name: 'Car Inspection',
          description: 'Get your car Inspected',
          image: Carinspection,
          link: '/car-inspection.html',
          alt: 'car inspection icon'
        },
        {
          name: 'Bike Express Services',
          description: 'Full bike service at your doorstep',
          image: Minor_repair,
          link: '/doorstep-bike-general-service.html',
          alt: 'general service icon'
        }
      ]
    }
  ];

  const filteredServices = services.map(category => ({
    ...category, items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <>
      <div id="servicesList_section" className='servicesList_section block'>
        <div className="servicesList_container">
          <div>
            <div className="servicesList_search">
              <div className="serviceSearchBox_parent">
                <img src={Search} alt="" />
                <input type="text" placeholder="Search service..." className="serviceSearchBox" autoComplete="off" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
              </div>
            </div>
            <div id="servicesList">
              {filteredServices.map((serviceCategory, index) => (
                <div key={index} id={serviceCategory.category.toLowerCase().replace(/ /g, '-')} className="servicecategory" style={{ display: 'block' }}>
                  <div className="servicecategory_name">{serviceCategory.category}</div>
                  <div className="serviceList_category">
                    {serviceCategory.items.map((service, idx) => (
                      <div key={idx} className="serviceList_style" style={{ display: 'block' }}>
                        <a href={service.link}>
                          <div className="serviceList_icon">
                            <img alt={service.alt} src={service.image} />
                          </div>
                          <div className="serviceList_content">
                            <p className="serviceList_name">{service.name}</p>
                            <p className="serviceList_description">{service.description}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="serviceList_button">
            <button className="serviceList_close_btn" onClick={closeDropdown}>Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service