import React from "react";
import "../Css/Nav.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="logo">
					<img src={logo} />
				</div>
				<div className="navbar-element">
					<div className="navbar-comp">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/Register.jsx">About Us</NavLink>
						<NavLink to="/Login.jsx">Login</NavLink>
						<NavLink to="/Help.jsx">Help</NavLink>
					</div>
					<a href="PostAds.jsx">
						<button className="Ads">+ Post Ads</button>
					</a>
				</div>
			</div>
			<div className="ad-container"></div>
		</>
	);
};
export default Navbar;
