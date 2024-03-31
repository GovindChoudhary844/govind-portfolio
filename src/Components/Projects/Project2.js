import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import "../../App.css";

function Project2() {
  return (
    <div>
      <style>
        {`
          .image-size {
            width: 80%;
            height: auto;
          }
        `}
      </style>
      <Nav.Link as={Link} to="/Organic-Fruits">
        <h5 className="resp-h5">
          Organic Fruits Website (11/2023) (11/2023){" "}
          <i className="fa-regular fa-arrow-up-right-from-square fa-sm"></i>
        </h5>
      </Nav.Link>
      <Row>
        <Col md={5}>
          <img src="Organic-Fruits-Website.png" alt="" className="image-size" />
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <p className="resp-text">
            Dive into the freshness of nature with our Organic Fruits and
            Vegetables website template. Crafted using HTML, CSS, Bootstrap, and
            JavaScript, it's a simple yet vibrant multipage design. Whether
            you're on a computer, tablet, or phone, the responsive layout
            ensures a seamless browsing experience. Explore the pages
            effortlessly and savor the simplicity of nature's bounty.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Project2;
