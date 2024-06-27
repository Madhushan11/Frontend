import React from 'react';
import logo from './Images/Logo.png'; 
import cart from './Images/cart.png';
import { FaSearch } from "react-icons/fa"; 
import searchIcon from './Images/search-icon.png'; // Import your search icon image
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Navigation.css'; // Import CSS file for styling

const NavigationBar = () => {
  return (
    <div className='black-bar'>
    <div className="navbar">
      
      <div className="nav-links">
        <ul>
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/home" className="nav-link">FRONT</Link></li>
          <li><Link to="/login" className="nav-link">LOGIN</Link></li>
          <li><Link to="/logout" className="nav-link">LOGOUT</Link></li>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
        <FaSearch className="icon"/>
  </button>
      </div>
    </div>
    </div>
  );
}

export default NavigationBar;
