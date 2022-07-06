import React from "react";
import "../Css/footer.css";
import Facebook from "../Assets/Facebook-1.svg";
import Twitter from "../Assets/twitter.svg";
import { NavLink, Nav } from "react-bootstrap";
import banner from "../Assets/banner 1.svg"
const Footer = () => {
	return (
		<>
    <img src={banner} alt=".banner " style={{width: '100%'}} />
			<div className="footer">
				<div className="footer-container">
					<div className="footer-links1">
						<h4>Popular Locatons</h4>
						<Nav.Link href="/">Kathmandu</Nav.Link>
						<Nav.Link href="#">Biratnagar</Nav.Link>
						<Nav.Link href="#">Birtamod</Nav.Link>
					</div>
					<div className="footer-link2">
						<h4>About Us</h4>
						<Nav.Link href="#">Contact Us</Nav.Link>
						<Nav.Link href="#">About Real Deal</Nav.Link>
					</div>

					<div className="find-us-on">
						<h4>Find us on</h4>
						<div className="iconsSocailMedia">
							<a href="#">
								<img src={Facebook} alt=".twitter" />
							</a>
							<a href="#">
								<img src={Facebook} alt=".insta" />
							</a>
							<a href="#">
								<img src={Twitter} alt=".facebook" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
