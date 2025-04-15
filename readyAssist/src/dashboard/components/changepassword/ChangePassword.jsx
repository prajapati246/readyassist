import React, { useState } from 'react'
import "./changePassword.scss";
import { makeRequest } from '../../../axios';

const ChangPassword = ({ togglePassword }) => {
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");
        setSuccess("");

        if (passwords.newPassword !== passwords.confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        try {
            const res = await makeRequest.put("users/changePassword", {
                oldPassword: passwords.oldPassword,
                newPassword: passwords.newPassword
            }, { withCredentials: true });
            setSuccess(res.data);
            setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "", });

            setTimeout(() => {
                togglePassword();
            }, 2000)

        } catch (err) {
            setError(err.response.data || "Something went wrong!");
        }
    };

    return (
        <div className='change-password-container'>
            <h3>Change Password</h3>
            <i className='bx bx-x' onClick={togglePassword}></i>
            <div className="passwordData">
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="oldPassword">Old Password</label>
                        <input type="password" name="oldPassword" value={passwords.oldPassword} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="newPassword">New Password</label>
                        <input type="password" name="newPassword" value={passwords.newPassword} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" value={passwords.confirmPassword} onChange={handleChange} />
                    </div>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button className="btn">Save</button>
                </form>
            </div>
        </div>
    );
};

export default ChangPassword;