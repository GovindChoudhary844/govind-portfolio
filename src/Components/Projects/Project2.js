// Project2.js
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import projectDesktopAPI from "../../Components/api/projectDesktopAPI";
import "../../App.css";

function Project2() {
  const project = projectDesktopAPI[1];
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
        `}
      </style>
      <Row>
        <Col md={5}>
          <img
            src={process.env.PUBLIC_URL + "/" + project.imagecharacter}
            alt="Flower Shop"
            className="image-size"
          />
        </Col>
        <Col md={7}>
          <Nav.Link as={Link} to={`/projects/${project.id}`}>
            <h5 className="resp-h5">
              {project.name} ({project.date}){" "}
              <i className="fa-regular fa-arrow-up-right-from-square fa-sm"></i>
            </h5>
          </Nav.Link>
          <p className="text-muted italic resp-text">{project.subname}</p>
          <p className="resp-text">{project.description}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Project2;
