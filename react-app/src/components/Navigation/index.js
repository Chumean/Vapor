import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { FaDownload } from 'react-icons/fa'
import logo from "../../assets/logo.png"
import LoginFormModal from '../LoginFormModal';
import { useModal } from '../../context/Modal';
import SignupFormModal from '../SignupFormModal';


function Navigation({ isLoaded }){
	const  { setModalContent } = useModal();

	const sessionUser = useSelector(state => state.session.user);

	const handleLoginClick = () => {
		setModalContent(<LoginFormModal />)

	}

	const handleSign = () => {
		setModalContent(<SignupFormModal />)
	}

	return (

		<header className="header">

		<div className="logo">
			<NavLink exact to="/" className="logo-link">

		  		<img src={logo} alt="Vaporlogo" className="logo-img" />
		  		<p className='vapor-text'>VAPOR</p>
			</NavLink>

		</div>

		<nav className="header-nav">
		  <ul className="nav-list">

			<li className="nav-item">
			  <NavLink exact to="/games" className="nav-link">STORE</NavLink>
			</li>
			<li className="nav-item">
			  <NavLink exact to="/notfound" className="nav-link">COMMUNITY</NavLink>
			</li>

			<li className='nav-item'>
				<a className='nav-link'>{sessionUser?.username && sessionUser?.username.toUpperCase()}</a>
			</li>

			<li className="nav-item">
				<NavLink exact to="/notfound" className="nav-link">ABOUT</NavLink>
			</li>

			<li className="nav-item">
			  <NavLink exact to="/cart" className="nav-link">CART</NavLink>
			</li>
		  </ul>
		</nav>

		{sessionUser && (

			<div className="global-action-menu">
		  <div className="session-install-login">
			<div className="session-install-div"> <FaDownload /> Install Steam</div>
		  </div>
			<span className='session-username'>{sessionUser?.username}</span>
		  <div className="session-user-icon">

				<ProfileButton user={sessionUser}
					style={{width: "34px", height: "34px"}}
					/>
		  </div>
		</div>
		)}


		{!sessionUser && (

				<div className="global-action-menu">
		  	<div className="install-login">
				<div className="install-div"
				 onClick={handleSign}> <FaDownload /> Sign Up</div>
		  	</div>
			<p className="login-link"
				onClick={handleLoginClick}
				>Login</p>
		  	<div className="language-text">
				Language
		  		</div>
			</div>
		)}


	  </header>

	);
}

export default Navigation;
