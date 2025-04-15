import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content"
import "./dashboard.scss"
import { useState } from "react";
import Profile from "./components/profile/Profile";
import UpdateModal from "./components/profileupdate/UpdateModal";
import ChangPassword from "./components/changepassword/ChangePassword";

const Dashboard = () => {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleToggleUpdate = (userData = null) => {
        setSelectedUser(userData);
        setIsUpdateOpen(!isUpdateOpen);
        setIsPasswordOpen(false);
    };

    const handleTogglePassword = () => {
        setIsPasswordOpen(!isPasswordOpen);
        setIsUpdateOpen(false);
        setIsProfileOpen(false);
    }
    return (
        <div className='dashboard'>
            <Sidebar isHidden={isSidebarHidden} setIsHidden={setIsSidebarHidden} />
            <Content
                toggleSidebar={() => setIsSidebarHidden(!isSidebarHidden)}
                toggleProfile={() => setIsProfileOpen(!isProfileOpen)}
                isProfileOpen={isProfileOpen}
            />
            <div className={`profile-container ${isProfileOpen ? "profile-slide-in" : ""}`}>
                {isProfileOpen &&
                    <Profile toggleProfile={() => setIsProfileOpen(!isProfileOpen)}
                        toggleUpdate={handleToggleUpdate}
                        togglePassword={handleTogglePassword}
                    />}
            </div>
            {isUpdateOpen &&
                <UpdateModal
                    toggleUpdate={() => setIsUpdateOpen(!isUpdateOpen)}
                    user={selectedUser}
                />}

            {isPasswordOpen &&
                <ChangPassword togglePassword={() => setIsPasswordOpen(!isPasswordOpen)}
                />}
        </div>
    )
}

export default Dashboard