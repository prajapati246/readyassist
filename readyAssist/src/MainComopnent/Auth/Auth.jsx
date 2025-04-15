import { useNavigate } from "react-router-dom";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import "./auth.scss"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Forgot from "../../components/forgot/Forgot";

const Auth = () => {
    const [activeForm, setActiveForm] = useState("login");
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    return (
        <div className='container auth'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={activeForm === 'login' ? 'active' : ""} onClick={() => setActiveForm('login')}>Login</button>
                    <button className={activeForm === 'register'?"active" : ""} onClick={() => setActiveForm("register")}>Sign Up</button>
                </div>
                {activeForm === 'login' && <Login setActiveForm={setActiveForm} />}
                {activeForm === "register" && <Register setActiveForm={setActiveForm} />}
                {activeForm === "forgot" && <Forgot setActiveForm={setActiveForm} />}
            </div>
        </div>
    )
}


export default Auth