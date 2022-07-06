import React from 'react';
import "../Css/Nav.css";
import { NavLink } from "react-router-dom";

const Help= () =>{
    <>
    <div className="navbar">
        <div className="logo">

        </div>
        <div className = "navbar-comp">
            
          <NavLink to="/Work.jsx">
            Work
          </NavLink>
          <NavLink  to="/Insights.jsx">
            Insights
          </NavLink>
          <NavLink to="/About.jsx">
            About
          </NavLink>
          <NavLink to="/Contact.jsx">
            Contact
          </NavLink>
        </div>
        <div className="Ads">

        </div>
    </div>
    </>
}
export default Help;