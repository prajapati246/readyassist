import React, { useState } from 'react'
import './forgot.scss';
import { makeRequest } from '../../axios';
const Forgot = ({ setActiveForm }) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState({ text: "", type: "" });
    const [userExists, setUserExists] = useState(false);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userExists) {
            try {
                const res = await makeRequest.post('/auth/forgotPassword', { email: inputs.email });
                setMessage({ text: res.data.message, type: "success" });
                setUserExists(true);
            } catch (err) {
                setMessage({ text: err.response?.data || "Error verifying email", type: 'error' });
            }
        } else {
            try {
                await makeRequest.post('/auth/resetPassword', {
                    email: inputs.email,
                    newPassword: inputs.password
                });
                setMessage({ text: "Password updated successfully!", type: "success" });
                setTimeout(() => {
                    setActiveForm('login')
                }, 2000);
            } catch (err) {
                setMessage({ text: err.response?.data || "Error updating Password", type: "error" });
            }
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <div className="column">
                <input type="email" placeholder="email" name="email" value={inputs.email} onChange={handleChange} required />
            </div>
            {userExists && (
                <div className="column">
                    <input type="password" placeholder="password" name="password" value={inputs.password} onChange={handleChange} required />
                </div>
            )}
            <button type="submit" > {userExists ? "Update Password" : "Verify Email"}</button>
            {message.text && (
                <p style={{ color: message.type === "success" ? "green" : "red", fontSize: "12px", textAlign: 'left' }}>{message.text}</p>
            )}
            <p>Go to login form <span onClick={() => setActiveForm("login")}>Back</span></p>
        </form>
    );
};

export default Forgot;