import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CallButton from "../../assets/call_us.svg";
import "./Navbar.scss";
import { IoIosArrowDropdown } from "react-icons/io";
import { useContext, useState } from "react";
import Service from "../service/Service";
import { AuthContext } from "../../Context/AuthContext";
import Profile from "../../assets/profile-icon-design-free-vector.jpg";


const Navbar = () => {
    const { logout, currentUser } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="navbar " >
            <div className="menu_navber">
                <div className="logo-container">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <p>ReadyAssist</p>
                        </div>
                    </Link>
                </div>
                <div className="navLinks">
                    <div className="callButton">
                        <img src={CallButton} alt="callButton" />
                        <a href="tel=7014631668">7014631668</a>
                    </div>
                    <Link to="/" className="navText">Home</Link>
                    <p className="navText" onClick={toggleDropdown}>
                        Services <IoIosArrowDropdown style={{ marginLeft: "5px", fontSize: "15px" }} />
                    </p>
                    <Link to="/subscriptions" className="navText">Subscriptions</Link>
                    <a href="/#" className="navText">About</a>
                    <Link to="/contact" className="navText">Contact</Link>
                    <a href="/#" className="navText">Mac<span className="macText" >+</span></a>
                    <Link to="/login" className="cngText navText">Login<span>Register</span></Link>
                </div>
                {isDropdownOpen && <Service closeDropdown={closeDropdown} />}
            </div>
        </div>
    )
}

export default Navbar