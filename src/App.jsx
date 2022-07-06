import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home.jsx";
import Loginn from "../src/Component/Loginn";
import Help from "./Pages/Help.jsx";
import PostAds from "./Pages/PostAds.jsx";
import SellerProfile from "./Pages/profile.jsx";



function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Home/>} />
          <Route path="/Login.jsx" element={<Loginn />}/>
          <Route path="/Help.jsx" element={<Help />} />
          <Route path="/PostAds.jsx" element={<PostAds />} />
          <Route path="/profile.jsx" element={<SellerProfile />} />
          
         
        </Routes>
      </Router>
    </>
  );
}
export default App;
