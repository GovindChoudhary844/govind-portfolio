import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Copyright from "../../Components/copyright";
import "../../App.css";
import Project1Desktop from "../../Components/ProjectScreenComponent/Project1/Project1Desktop";
import Project1Tablet from "../../Components/ProjectScreenComponent/Project1/Project1Tablet";
import Project1Mobile from "../../Components/ProjectScreenComponent/Project1/Project1Mobile";

function Projects1Screen() {
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const handleButtonClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <>
      <style>
        {`
          .bg-green{
            border: 1px solid #088F8F;
            margin-left: 5px;
          }
          .bg-green:hover{
            background-color: #017d7d;
            border: 1px solid #017d7d;
          }
        `}
      </style>
      <div
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="page-title resp-h1 text-center">Flower Shop</h1>
        <Col>
          <Button
            className="bg-green"
            onClick={() => handleButtonClick("desktop")}
          >
            <i className="fa-light fa-desktop"></i>
          </Button>
          <Button
            className="bg-green"
            onClick={() => handleButtonClick("tablet")}
          >
            <i className="fa-light fa-tablet"></i>
          </Button>
          <Button
            className="bg-green"
            onClick={() => handleButtonClick("mobile")}
          >
            <i className="fa-light fa-mobile"></i>
          </Button>
        </Col>
        <Row>
          <Col className="my-5">
            {selectedDevice === "desktop" && <Project1Desktop />}
            {selectedDevice === "tablet" && <Project1Tablet />}
            {selectedDevice === "mobile" && <Project1Mobile />}
          </Col>
        </Row>
        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
}

export default Projects1Screen;
