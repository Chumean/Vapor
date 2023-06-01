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
		// <div className='nav-background'>
		// 	<div className='nav-container'>
		// 		<div className='nav-logo'>


		// 			<div className='vapor-logo'>
        //             	<img src={logo} style={{ width: '3rem', height: '3rem', marginRight: '0.5rem' }} />
        //             	<p className='vapor-text'>VAPOR</p>
        //         	</div>

		// 		</div>

		// 		<div className='middle-nav'>
        //         	<ul className='middle-list'>
        //             	<li>
        //                 	<p>SHOP</p>
        //             	</li>

        //             	<li>
        //                 	<p>COMMUNITY</p>
        //             	</li>

        //             	<li>
        //                 	<p>ABOUT</p>
        //             	</li>

        //             	<li>
        //                 	<p>SUPPORT</p>
        //             	</li>
        //         	</ul>
        //     	</div>

		// 		<div className='right-nav'>
        //         	<div className='install-logo'>
        //             	<FaDownload />
        //             	<p className='install-vapor'>Install Vapor</p>
        //         	</div>

        //         	<div className='login-area'>
        //             	<p className='login-text'>login</p>
        //         	</div>

        //         	<div className='login-separate'></div>

        //         	<div className=''>
        //             	<p className='language-text'>language</p>
        //         	</div>
        //     	</div>
		// 	<ul>
		// 	<li>
		// 		<NavLink exact to="/">Home</NavLink>
		// 	</li>
		// 	{isLoaded && (
		// 		<li>
		// 			<ProfileButton user={sessionUser} />
		// 		</li>
		// 	)}
		// 	</ul>
		// 	</div>
		// </div>

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
			<li className="nav-item">
			  <a href="#" className="nav-link">ABOUT</a>
			</li>
			<li className="nav-item">
			  <a href="#" className="nav-link">SUPPORT</a>
			</li>
		  </ul>
		</nav>
		<div className="header-right">
		  <div className="install-login">
			<button className="install-btn">Install Steam</button>
			<a href="#" className="login-link">Login</a>
		  </div>
		  <div className="language">
			<p className="language-text">Language</p>
		  </div>
		</div>
	  </header>

	);
}

export default Navigation;
