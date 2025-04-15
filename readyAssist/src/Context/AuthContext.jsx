import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user')) || null
    );

    const login = async (inputs) => {
        const res = await makeRequest.post("auth/login", inputs, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

    useEffect(() => {
        if (currentUser) {
            sessionStorage.setItem('user', JSON.stringify(currentUser));
        } else {
            sessionStorage.removeItem('user');
        }
    }, [currentUser]);

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("user");
        setCurrentUser(null);
        navigate("/");
    };
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
