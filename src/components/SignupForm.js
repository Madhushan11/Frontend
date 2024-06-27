import React, { useState } from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './SignupForm.css';
import logo from "./images/logo_white.png";

export default function SignupForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleSignup = async(e) => {
        e.preventDefault();
        await store.signup();
        navigate("/login");
    };

  return (
    <div className='signup-wrapper'>
        <img src={logo} className="logo" />
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
        <div className="signup-input-box">
            <input
                placeholder="Email adress"
                onChange={store.updateSignupForm} 
                value={store.signupForm.email} 
                type="email" 
                name="email"/>
            <MdEmail className="icon"/>    
        </div>
        <div className="signup-input-box">
            <input
                placeholder="Password" 
                onChange={store.updateSignupForm}
                value={store.signupForm.password} 
                type="password" 
                name="password"/>
            <FaLock className="icon"/>
        </div>
        <div className="terms">
                    <input 
                        type="checkbox" 
                        id="terms" 
                    />
                    <label htmlFor="terms">
                        I agree to the <a href="/terms-and-conditions" target="_blank">terms and conditions</a>
                    </label>
                </div>
            <button className="signup-buttontype" type="submit">Signup</button>
            <div className="login-link">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
        </form>
    </div>   
  );
}
