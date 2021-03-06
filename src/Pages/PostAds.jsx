import React from "react";
import { Container, Form } from "react-bootstrap";
import "../Scss/postads.scss";
import Navbar from '../Component/Navbar';
import Footer from "../Component/footer";
import { useState, useRef } from "react";



const PostNewAds = () => {
  const [value, setValue] = useState();
  const inputFile = useRef(null);
  const handleFileUpload = (e) => {
    inputFile.current.click();
  };

  return (
    <>
    <Navbar/>
    
      <Container>
        <div className="post-new-add-container">
          <h3>POST YOUR AD</h3>

          <div className="choose-category">
            <h3>Choose Category</h3>
            <div className="category-sec">
              <div className="form-group">
                <Form.Select aria-label="Default select ">
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="form-group">
                <Form.Select aria-label="Default select ">
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="basic-details">
            <h3>Provide basic details</h3>
            <div className="form-group">
              <Form.Select aria-label="Default select ">
                <option> select </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <div className="upload-photos">
            <h3>Upload upto 12 images</h3>
            <div className="hold-photos ">
              <input
              className="focus-propotities-for-input-tag"
                ref={inputFile}
                id="file"
                type="file"
                style={{ display: "none" }}
                multiple="{false}"
              />
              <button onClick={handleFileUpload} >
                
                <p>Add Photo</p>
              </button>
            </div>
            <div className="Title-discription">
              <h3>Title and Description</h3>
              <div className="title-discription-holder">
                <div className="title-class">
                  <input
                    className="title-sup focus-propotities-for-input-tag"
                    type="text"
                    name="LName"
                    placeholder="Title"
                  />
                </div>
                <div className="discription-class">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="addPrice-adLocation">
              <div className="add-price">
                <h3>Add Price</h3>
                <div className="add-pri">
                  <input
                    className="Price-add focus-propotities-for-input-tag"
                    type="text"
                    name="LName"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="provide-location">
                <h3>Provide Location</h3>
                <div className="add-state">
                  <Form.Select aria-label="Default select ">
                    <option> select </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="add-city">
                  <input
                    className="add-city focus-propotities-for-input-tag"
                    type="text"
                    name="LName"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="check-contact-info">
            <h4>Check Contact Info</h4>
            <div className="check-contact-info-form">
              <div className="firstName-lastName">
                <input type="text" placeholder="First Name" className="focus-propotities-for-input-tag" />
                <input type="text" placeholder="Last Name" className="focus-propotities-for-input-tag"/>
              </div>
              <input type="email address" placeholder="email address" className="focus-propotities-for-input-tag" />
          
            </div>
           
            <button className="Post-but">Post Now</button>
          </div>
        </div>
      </Container>
      
    <Footer/>
    </>
  );
};

export default PostNewAds;
