import React from "react";
import "../Css/Nav.css";
import { NavLink } from "react-router-dom";
import "../Scss/help.css";
import NavBar from "../Component/Navbar";
import Footer from "../Component/footer";
const Help = () => {
	console.log("help");
	return (
		<>
    <NavBar />
			<section className="page-section" id="about">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">
							About
						</h2>
						<h3 className="section-subheading text-muted">
							Lorem ipsum dolor sit amet consectetur.
						</h3>
					</div>
					<ul className="timeline">
						<li>
							<div className="timeline-image" />
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>2009-2011</h4>
									<h4 className="subheading">
										Our Humble Beginnings
									</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Sunt ut voluptatum
										eius sapiente, totam reiciendis
										temporibus qui quibusdam, recusandae sit
										vero unde, sed, incidunt et ea quo
										dolore laudantium consectetur!
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image" />
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>March 2011</h4>
									<h4 className="subheading">
										An Agency is Born
									</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Sunt ut voluptatum
										eius sapiente, totam reiciendis
										temporibus qui quibusdam, recusandae sit
										vero unde, sed, incidunt et ea quo
										dolore laudantium consectetur!
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="timeline-image" />
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>December 2015</h4>
									<h4 className="subheading">
										Transition to Full Service
									</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Sunt ut voluptatum
										eius sapiente, totam reiciendis
										temporibus qui quibusdam, recusandae sit
										vero unde, sed, incidunt et ea quo
										dolore laudantium consectetur!
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted">
							<div className="timeline-image">
								<a style={{ textDecoration: "none" }} href>
									{" "}
									<h4>
										view
										<br />
										Our
										<br />
										catalog
									</h4>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</section>
      <Footer />
		</>
	);
};
export default Help;
