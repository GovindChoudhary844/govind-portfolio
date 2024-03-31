import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Modal } from "react-bootstrap";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectMobileAPI from "../../Components/api/projectMobileAPI";

function ProjectScreenMobile() {
  const { projectId } = useParams();
  const project = projectMobileAPI.find(
    (project) => project.id === parseInt(projectId)
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [videoLoaded, setVideoLoaded] = useState(false);

  const [ImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

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

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Row>
        <Col>
          <h1 className="resp-h2">{project.name} - Mobile Mode</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={12} lg={12} xl={6} xxl={6}>
          <video
            controls
            width="100%"
            height="auto"
            className={`rounded-3 ${!videoLoaded ? "blur" : ""}`}
            loading="lazy"
            autoPlay
            muted
            loop
            onLoadedData={handleVideoLoad}
          >
            <source
              src={process.env.PUBLIC_URL + "/" + project.video}
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
          <p className="resp-text">{project.description}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <hr />
        <Col>
          <Slider {...settings}>
            {project &&
              project.images.map((index) => (
                <div key={index} className="p-1">
                  <img
                    src={
                      project
                        ? process.env.PUBLIC_URL +
                          "/" +
                          project.images[selectedImageIndex]
                        : ""
                    }
                    alt=""
                    className={`img-fluid ${ImageLoaded ? "" : "blur"}`}
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: "pointer" }}
                    loading="lazy"
                    onLoad={handleImageLoad}
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
                  prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
                )
              }
              style={{ cursor: "pointer" }}
            ></i>
            <img
              src={
                process.env.PUBLIC_URL +
                "/" +
                project.images[selectedImageIndex]
              }
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70vh", objectFit: "contain" }}
              loading="lazy"
            />
            <i
              className="fa-solid fa-circle-chevron-right"
              onClick={() =>
                setSelectedImageIndex((prevIndex) =>
                  prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
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

export default ProjectScreenMobile;
