import "./sidebar.scss";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";

const menuItems = [
    { name: "Dashboard", icon: "bxs-dashboard", path: "/" },
    { name: "Home", icon: "bxs-home", path: "/home" },
    { name: "Services", icon: "bxs-briefcase", path: "/services" },
    { name: "Subscription", icon: "bxs-receipt", path: "/subscriptions" },
    { name: "Contact", icon: "bxs-phone", path: "/contact" },
];


const Sidebar = ({ isHidden, setIsHidden }) => {
    const location = useLocation();
    const { logout } = useContext(AuthContext);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const index = menuItems.findIndex(item => item.path === location.pathname);
        if (index !== -1) {
            setActiveIndex(index);
        }
    }, [location.pathname]);

    return (
        <div id='sidebar' className={isHidden ? "hide" : ""}>
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <p>ReadyAssist</p>
                </div>
            </Link>
            <ul className='side-menu top'>
                {menuItems.map((item, index) => (
                    <li key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)}>
                        <Link to="/#">
                            <i className={`bx ${item.icon}`}></i>
                            <span className="text">{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="side-menu">
                <li>
                    <Link to="/#">
                        <i className="bx bxs-cog"></i>
                        <span className="text">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={logout} style={{ color: "red" }}>
                        <i className="bx bxs-log-out-circle"></i>
                        <span className="text">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
