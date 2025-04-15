import { useContext, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ({ setActiveForm  }) => {
    const { login } = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setErr] = useState(null);
    const [inputError, setInputError] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setInputError((prev) => ({ ...prev, [e.target.name]: "" }));
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.username.trim()) {
            errors.username = "Username Is Required";
        }
        if (!data.password.trim()) {
            errors.password = "Password Is required";
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(inputs);
        setInputError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                await login(inputs);
                navigate("/");
            } catch (error) {
                setErr(error.response?.data || "An Error occured");
            }
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div className="column">
                <input type="text" placeholder="username" name="username" value={inputs.username} onChange={handleChange} />
                {inputError.username && <span className="error">{inputError.username}</span>}
            </div>
            <div className="column">
                <input type="password" placeholder="password" name="password" value={inputs.password} onChange={handleChange} />
                {inputError.password && <span className="error">{inputError.password}</span>}
            </div>
            {err && <span style={{ color: "red", fontSize: "12px" }} >{err}</span>}
            <a href="/#" onClick={(e)=>{e.preventDefault();setActiveForm('forgot');}}>Forgot password ?</a>
            <button type="submit" > Login</button>
            <p>Don't have an account? <span onClick={() =>setActiveForm("register")}>SignUp Now</span></p>
        </form>

    )
}

export default Login