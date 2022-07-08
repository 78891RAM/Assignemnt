import React from 'react';
import "../Css/Home.css";
import Navbar from '../Component/Navbar.jsx';
import Category from "../Component/Categories";
import Search from "../Component/Search";
import Footer from "../Component/footer.jsx";
import Cards from "../Component/Cards.jsx";
import "../Scss/res.scss"
const Home = () =>{

    
    return(
    <>
    <div className="red" >

        <Navbar/>
        <Search/>
        <Cards/>
        <Category/>
        
        <Footer/>

    </div>
    
   
  
    </>
    );
};
export default Home;