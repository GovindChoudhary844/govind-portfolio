import React, { useRef, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import "../../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project1Mobile() {
  const sliderRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // Array of image URLs
  const imageUrls = [
    "Images/Projects/Project 1/Project1-Mobile-SS/1.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/2.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/3.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/4.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/5.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/6.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/7.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/8.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/9.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/10.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/11.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/12.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/13.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/14.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/15.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/16.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/17.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/18.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/19.png",
    "Images/Projects/Project 1/Project1-Mobile-SS/20.png",
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <style>
        {`
          .Desktop-bg {
            background-image: url('Images/Projects/Project 1/Desktop.jpg');
            background-size: cover; 
            background-position: center;
          }
          
          .slick-prev:before,
          .slick-next:before {
            color: black !important; 
          }
        `}
      </style>
      <Row>
        <Col>
          <h1 className="resp-h2">Mobile Mode</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={12} lg={12} xl={6} xxl={6} className="Desktop-bg">
          <video controls width="100%" height="auto" className="rounded-3">
            <source
              src="Images/Projects/Project 1/Project1-Mobile.mp4"
              type="video/mp4"
              loading="lazy"
            />
          </video>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={12}
          xl={6}
          xxl={6}
          className="d-flex align-items-center"
        >
          <p className="resp-text">
            Welcome to our delightful Online Flower Shop, where the process of
            selecting and ordering your favorite flowers is made effortless.
            Leveraging the powerful combination of Django and React JS, we've
            crafted a user-friendly website that ensures a seamless and
            enjoyable experience for our customers.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <hr />
        <Col>
          <Slider {...settings}>
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="p-1">
                <img
                  src={imageUrl}
                  alt=""
                  className="img-fluid"
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: "pointer" }}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <div className=" d-flex justify-content-between align-items-center">
            <i
              className="fa-solid fa-circle-chevron-left position-absolute"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
                )
              }
              style={{ cursor: "pointer" }}
            ></i>
            <img
              src={imageUrls[selectedImageIndex]}
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70vh", objectFit: "contain" }}
              loading="lazy"
            />
            <i
              className="fa-solid fa-circle-chevron-right"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
                )
              }
              style={{ cursor: "pointer", marginLeft: "-10px" }}
            ></i>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Project1Mobile;
