import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Modal, Button } from "react-bootstrap";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectDesktopAPI from "../../Components/api/projectDesktopAPI";

function ProjectScreenDesktop() {
  const { projectId } = useParams();
  const project = projectDesktopAPI.find(
    (project) => project.id === parseInt(projectId)
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [ImageLoaded, setImageLoaded] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleCopy = () => {
    if (project && project.link) {
      navigator.clipboard
        .writeText(project.link)
        .then(() => {
          setCopySuccess("Link copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
        })
        .catch((err) => {
          setCopySuccess("Failed to copy link");
          setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
        });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
          <h1 className="resp-h2">{project.name} - Desktop Mode</h1>
          {project.link && (
            <p className="resp-text">
              Visit website:{" "}
              <a
                href={project.link}
                target="_blank"
                className="text-decoration-none"
              >
                {project.link}
              </a>
              <Button
                variant="outline-secondary"
                size="sm"
                className="ms-2"
                onClick={handleCopy}
              >
                Copy
              </Button>
              {copySuccess && <span className="ms-2">{copySuccess}</span>}
            </p>
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={12} lg={12} xl={6} xxl={6} className="Desktop-bg">
          <div
            className="video-container rounded-3"
            style={{ height: "250px" }}
          >
            <iframe
              width="100%"
              height="100%"
              className="rounded-3"
              src={project ? `${project.videoDesktop}?rel=0` : ""}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        <Col
          sm={12}
          md={12}
          lg={12}
          xl={6}
          xxl={6}
          className="d-flex align-items-center mt-3"
        >
          <p className="resp-text">
            {project ? project.description : "Project Not Found"}
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <hr />
        <Col>
          <Slider {...settings}>
            {project &&
              project.imagesDesktop.map((image, index) => (
                <div key={index} className="p-1">
                  <img
                    src={
                      project
                        ? process.env.PUBLIC_URL +
                          "/" +
                          project.imagesDesktop[index]
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
                  prevIndex === 0
                    ? project.imagesDesktop.length - 1
                    : prevIndex - 1
                )
              }
              style={{ cursor: "pointer" }}
            ></i>
            <img
              src={
                project
                  ? process.env.PUBLIC_URL +
                    "/" +
                    project.imagesDesktop[selectedImageIndex]
                  : ""
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
                  prevIndex === project.imagesDesktop.length - 1
                    ? 0
                    : prevIndex + 1
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

export default ProjectScreenDesktop;
