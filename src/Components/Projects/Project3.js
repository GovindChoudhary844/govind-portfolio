// Project3.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import projectDesktopAPI from "../../Components/api/projectDesktopAPI";
import "../../App.css";

function Project3() {
  const project = projectDesktopAPI[2];
  const [ImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <style>
        {`
          .italic {
            font-style: italic;
          }
          .image-size {
            width: 100%;
            height: auto;
          }
          .blur {
            filter: blur(10px);
          }
        `}
      </style>
      <Row className="d-flex align-items-center">
        <Col md={7}>
          <Nav.Link as={Link} to={`/projects/${project.id}`}>
            <h5 className="resp-h5 heading">
              {project.name} ({project.date}){" "}
              <i className="fa-regular fa-arrow-up-right-from-square fa-sm"></i>
            </h5>
          </Nav.Link>
          <p
            className="italic resp-text"
            style={{
              color: "var(--sixth-color)",
            }}
          >
            {project.subname}
          </p>
          <p className="resp-text">{project.description}</p>
        </Col>
        <Col md={5}>
          <img
            src={process.env.PUBLIC_URL + "/" + project.imagecharacter}
            alt="Flower Shop"
            className={`image-size ${ImageLoaded ? "" : "blur"}`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Project3;
