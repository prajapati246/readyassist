import "./content.scss";
import Profile from "../../../assets/profile-icon-design-free-vector.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Main from "../main/Main";
const Content = ({ toggleSidebar, toggleProfile, isProfileOpen }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div id='content'>
            <nav className={isProfileOpen ? "profile-active" : ""}>
                <i className="bx bx-menu" onClick={toggleSidebar}> </i>
                <a href="/#" className='nav-link'>Categories</a>
                <form action="#">
                    <div className="form-input">
                        <input type="search" placeholder='Search...' />
                        <button type='submit' className='search-btn'><i className="bx bx-search"></i></button>
                    </div>
                </form>
                <input type="checkbox" id='switch-mode' hidden />
                <label htmlFor="switch-mode" className='switch-mode'></label>
                <a href="/#" className='notification'>
                    <i className="bx bxs-bell"></i>
                    <span className='num'>8</span>
                </a>
                <div className="profile">
                    <img src={currentUser?.profilePic ? (currentUser.profilePic.startsWith("http") ? currentUser.profilePic : "/upload/" + currentUser.profilePic) : Profile} alt="profile" onClick={toggleProfile} />
                    <p onClick={toggleProfile}>{currentUser.username}</p>
                </div>
            </nav>
            <Main />
        </div>
    )
}

export default Content