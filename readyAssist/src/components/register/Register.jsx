import { useState } from "react";
import "./register.scss";
import { makeRequest } from "../../axios";

const Register = ({ setActiveForm }) => {

    const [inputs, setInputs] = useState({
        username: "",
        phonenumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [inputError, setInputError] = useState({});
    const [err, setErr] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    const validateForm = (data) => {
        const errors = {};

        if (!data.username.trim()) errors.username = "Username is required";

        if (!data.phonenumber.trim()) {
            errors.phonenumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(data.phonenumber)) {
            errors.phonenumber = "Phone number must be 10 digits";
        }

        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email is invalid";
        }

        if (!data.password.trim()) {
            errors.password = "Password is required";
        } else if (data.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(inputs);
        setInputError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const res = await makeRequest.post("auth/register", inputs);
                setSuccess(res.data);
                setErr(null)
                setInputs({
                    username: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    phonenumber: "",
                })
            } catch (error) {
                setErr(error.response?.data || "Something went wrong!");
                setSuccess(null);
            }

        }
    }

    return (
        <form className="form" onSubmit={handleClick}>
            <h2>Create  a new Account</h2>
            <div className="column">
                <input type="text" placeholder="username" name='username' value={inputs.username} onChange={handleChange} />
                {inputError.username && <span className='error'>{inputError.username}</span>}
            </div>
            <div className="column">
                <input type="number" placeholder="phone number" name='phonenumber' value={inputs.phonenumber} onChange={handleChange} />
                {inputError.phonenumber && <span className='error'>{inputError.phonenumber}</span>}
            </div>
            <div className="column">
                <input type="email" placeholder="email" name='email' value={inputs.email} onChange={handleChange} />
                {inputError.email && <span className='error'>{inputError.email}</span>}
            </div>
            <div className="column">
                <input type="password" placeholder="password" name='password' value={inputs.password} onChange={handleChange} />
                {inputError.password && <span className='error'>{inputError.password}</span>}
            </div>
            <div className="column">
                <input type="password" placeholder="Confirm Password" name='confirmPassword' value={inputs.confirmPassword} onChange={handleChange} />
                {inputError.confirmPassword && <span className='error'>{inputError.confirmPassword}</span>}
            </div>
            {err && <span style={{ color: "red" }}>{err}</span>}
            {success && <span style={{ color: "green" }}>{success}</span>}
            <button type="submit">Sign Up</button>
            <p>You have already a account ? <span onClick={() => setActiveForm('login')}>Login Now</span></p>
        </form>
    )
}

export default Register