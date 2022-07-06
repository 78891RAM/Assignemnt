import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import "../Scss/profile.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Navbar from "../Component/Navbar";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../Component/footer"
function SellerProfile() {
  const [showDec, setShowDec] = useState(true);
  const [showComment, setComment] = useState(false);
  const images = [
    {
      original:
        "https://i.pinimg.com/originals/0e/27/6b/0e276b5fa0eb38dbe3d88337ef79ee6a.jpg",
      loading: "eager",
    },
    {
      original:
        "https://live.staticflickr.com/7393/12850134144_1465c0aee6_b.jpg",
      loading: "eager",
    },
    {
      original:
        "https://www.gardeningknowhow.com/wp-content/uploads/2020/04/fruit-seed-400x300.jpg",
      loading: "eager",
    },
    {
      original:
        "https://images.theconversation.com/files/250919/original/file-20181217-185258-1gc7soo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      loading: "eager",
    },
    {
      original:
        "https://images.unsplash.com/photo-1553615738-d8e0829f1d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      loading: "eager",
    },
    {
      original:
        "https://images.unsplash.com/photo-1646174783602-d42483b35797?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=500&q=60",
      loading: "eager",
    },
  ];

  return (
    <>
    <Navbar/>
      
     
      
    
      <Container className="">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
          showIndex={true}
          flickThreshold={0.0}
          swipeThreshold={1}
          useTranslate3D={true}
          useBrowserFullscreen={false}
          slideDuration={300}
        />
      </Container>

      <Container>
        <div className="des-product-section mt-3 mb-3">
          <div className="details-comments ">
            <div className="details-product border">
              <div className="m-4">
                <div className="addedon-time-share-btn">
                  <div className="time-add-product mt-2">
                    <p>Added on Mar 21, 2022</p>
                    <p>Views : 23,498</p>
                  </div>
                  <div className="share-btn-product ">
                    <Nav.Link>
                      <img alt="" className="share-btn" />
                    </Nav.Link>
                    <Nav.Link type="checkbox">
                      <img  alt="" className="heart-btn" />
                    </Nav.Link>
                  </div>
                </div>
                <div className="title-price mt-3">
                  <div className="title">
                    <h2>Lorem ipsum dolor sit amet, consectetur </h2>
                  </div>
                  <div className="price mb-4 mt-1">
                    <h3> Rs.1,400/- </h3>
                  </div>
                </div>
                <div className="details-sec mt-3 ">
                  <h2 className="mb-2">Details</h2>
                  <div className="key-value-data mb-3">
                    <div className="owner">
                      <div className="owner-title">Owner:</div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                    <div className="owner">
                      <div className="owner-title">SubCategory: </div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                    <div className="owner">
                      <div className="owner-title">Condition: </div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                    <div className="owner">
                      <div className="owner-title">Guarantee: </div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="des-comment-sec border">
              <div className="header-comment-des p-4 ">
                <a
                  className="selected"
                  id="dec-a"
                  onClick={() => {
                    if (!setComment(true)) {
                      setShowDec(true);
                    }
                    setComment(false);
                    setShowDec(true);
                    document.getElementById("comment-sec").style.display =
                      "none";
                    document
                      .getElementById("comment-a")
                      .classList.remove("selected");
                    document.getElementById("dec-a").classList.add("selected");
                  }}
                >
                  Description
                </a>
                <a
                  className="comment-a"
                  id="comment-a"
                  onClick={() => {
                    if (!setShowDec(true)) {
                      setComment(true);
                    }
                    setComment(true);
                    setShowDec(false);
                    document.getElementById("dec-sec").style.display = "none";
                    document
                      .getElementById("dec-a")
                      .classList.remove("selected");
                    document
                      .getElementById("comment-a")
                      .classList.add("selected");
                  }}
                >
                  Comment
                </a>
              </div>

              <div className="des-and-comment-sec m-4">
                {showDec ? (
                  <div role="tabpanel" id="dec-sec" className="dec-sec">
                    <text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus pellentesque nam dignissim amet, accumsan vitae
                      sollicitudin lectus. Lacus, nulla semper dignissim non sit
                      fus ce faucibus adipiscing in. Ullamcorper scelerisque
                      eleifend etiam elementum nunc nulla augue volutpat.
                      Placerat quam dignissim nullam quis dictum dignissim nunc
                      purus. In velit, sapien cursus in arcu. Mi id sed mauris
                      potenti aliquam sed mauris a. Posuere consequat sed mollis
                      vestibulum. Morbi nunc, sagittis euismod pellentesque. Dui
                      at turpis pretium molestie hendrerit. Risus, est ultrices
                      dolor suspendisse placerat convallis enim. In scelerisque
                      mi vulputate vitae nulla mauris. Posuere sapien neque,
                      sagittis facilisis a.
                    </text>
                  </div>
                ) : null}
                {showComment ? (
                  <div id="comment-sec">
                    <div className="comment-container">
                      <div className="comment-input">
                        <input
                          className="searchBar"
                          placeholder="Type comment...."
                        ></input>
                        <button type="button">Comment</button>
                      </div>
                      <div className="comment-view">
                        <img />
                        <div className="comment-desc">
                          <img
                            src="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
                            alt=".user"
                          />
                          <div className="commenter-details">
                            <div className="commenter-name">Jane Cooper</div>
                            <div className="comment-description">
                              I found a 2007 study on effects of hand sanitizers
                              on blood effects of hand sanitizers effects of
                              hand sanitizers on blood effects o alcohol level.
                            </div>
                            <div className="comment-time">21h ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="user-map-sec">
            
            <div className="loc-map-sec ">
              <div className="location-text">
                <h4>Location</h4>
                <div className="location-details-text">
                  <text>Setopull, Kathmandu, NP</text>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </Container>
      
      <Footer />
    </>
  );
}

export default SellerProfile;
