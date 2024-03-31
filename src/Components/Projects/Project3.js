import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import "../../App.css";

function Project3() {
  return (
    <div>
      <style>
        {`
          .image-container {
            width: 80%;
            height: auto;
          }
        `}
      </style>
      <Nav.Link as={Link} to="/G&C-Organics">
        <h5 className="resp-h5">
          G&C Organics (10/2023){" "}
          <i className="fa-regular fa-arrow-up-right-from-square fa-sm"></i>
        </h5>
      </Nav.Link>
      <Row>
        <Col sm={12} md={7} lg={7} className="d-flex align-items-center">
          <p className="resp-text">
            Introducing G&C Organics - a single-page haven for organic
            enthusiasts. Crafted with HTML, CSS, and Bootstrap, this website is
            a sleek showcase of purity. Navigate seamlessly through our
            offerings, from organic produce to eco-friendly goods. The
            minimalist design ensures a delightful user experience. Dive into
            G&C Organics - where simplicity meets sustainability.
          </p>
        </Col>
        <Col
          sm={12}
          md={5}
          lg={5}
          className="d-flex align-items-center justify-content-center"
        >
          <img src="G-and-C.png" alt="" className="image-container d-block" />
        </Col>
      </Row>
    </div>
  );
}

export default Project3;
