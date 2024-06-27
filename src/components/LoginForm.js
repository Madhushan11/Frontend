import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "./images/logo_white.png";

export default function LoginForm(){
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await store.login();

        //Navigate
        navigate("/home");
    };

    return (
    <div className='wrapper'>
            <img src={logo}  className="logo" />
            <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div className="input-box">
            <input 
                placeholder="Email address"
                onChange={store.updateLoginForm} 
                value={store.loginForm.email} 
                type="email" 
                name="email"/>
                <MdEmail className="icon"/>
            </div>
            <div className="input-box">
            <input 
                placeholder="Password"
                onChange={store.updateLoginForm}
                value={store.loginForm.password} 
                type="password" 
                name="password"/>
                <FaLock className="icon"/>
            </div>
            <div className="forgot">
                <a href="#">Forgot password?</a>
            </div>
            <button className="buttontype" type="submit">Login</button>
            <div className="Signup-link">
                <p>Don't have an account? <a href="/signup">Register</a></p>
            </div>
        </form>
    </div>
            );
}