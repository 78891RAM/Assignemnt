import React from "react";
import "../Css/Nav.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Scss/navbar.scss";
import logo from "../Assets/logo.png";
import Category from "./Categories";
const NavBar = () => {
	return (
		<>
			{/* <div className="navbar">
			
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
			<div className="ad-container"></div> */}
			<Navbar bg="light" expand="lg" >
				<Container className="navbar navnav">
					<Navbar.Brand href="/">
						<div className="logo">
							<img src={logo} />
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<div className="navbar-element">
							<div className="navbar-comp">
								<NavLink href="/">Home</NavLink>
								<NavLink href="/Register.jsx">About Us</NavLink>
								<NavLink href="/Login.jsx">Login</NavLink>
								<NavLink href="/Help.jsx">Help</NavLink>
							</div>
							<a href="PostAds.jsx">
								<button className="Ads">+ Post Ads</button>
							</a>
              {/* <Category /> */}
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
export default NavBar;
