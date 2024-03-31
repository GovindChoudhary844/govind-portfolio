import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Copyright from "../Components/copyright";
import "../App.css";

import projectDesktopAPI from "../Components/api/projectDesktopAPI"; // Rename the imported module

import ProjectScreenDesktop from "../Components/ProjectScreenComponent/ProjectScreenDesktop";
import ProjectScreenTablet from "../Components/ProjectScreenComponent/ProjectScreenTablet";
import ProjectScreenMobile from "../Components/ProjectScreenComponent/ProjectScreenMobile";

function ProjectsScreen() {
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const handleButtonClick = (device) => {
    setSelectedDevice(device);
  };

  const currentProject = projectDesktopAPI[0];

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
            {selectedDevice === "desktop" && <ProjectScreenDesktop />}
            {selectedDevice === "tablet" && <ProjectScreenTablet />}
            {selectedDevice === "mobile" && <ProjectScreenMobile />}
          </Col>
        </Row>
        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
}

export default ProjectsScreen;
