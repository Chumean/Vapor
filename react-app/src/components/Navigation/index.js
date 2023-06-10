import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { FaDownload } from 'react-icons/fa'
import logo from "../../assets/logo.png"

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (

		<header className="header">
		<div className="logo">
		  <img src={logo} alt="Vaporlogo" className="logo-img" />
		  <p className='vapor-text'>VAPOR</p>
		</div>
		<nav className="header-nav">
		  <ul className="nav-list">
			<li className="nav-item">
			  <a href="#" className="nav-link">STORE</a>
			</li>
			<li className="nav-item">
			  <a href="#" className="nav-link">COMMUNITY</a>
			</li>
			<li className='nav-item'>
					<a href="#" className='nav-link'>{sessionUser?.username && sessionUser?.username.toUpperCase()}</a>
			</li>
			<li className="nav-item">
			  <a href="#" className="nav-link">ABOUT</a>
			</li>
			<li className="nav-item">
			  <a href="#" className="nav-link">SUPPORT</a>
			</li>
		  </ul>
		</nav>

		<div className="global-action-menu">
		  <div className="install-login">
			<div className="install-div"> <FaDownload /> Install Steam</div>
		  </div>
			<a href="#" className="login-link">Login</a>
		  <div className="language-text">
			Language
		  </div>
		</div>

	  </header>

	);
}

export default Navigation;
