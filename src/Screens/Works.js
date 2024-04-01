import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ProjectsCard from "../Components/ProjectsCard";
import Copyright from "../Components/copyright";
import "../App.css";
import projectDesktopAPI from "../Components/api/projectDesktopAPI";

const Works = () => {
  return (
    <>
      <style>
        {`
          
      `}
      </style>
      <div
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{
          color: "var(--third-color)",
        }}
      >
        <h1 className="page-title resp-h1 text-center">Works</h1>

        <Row className="mt-3 mt-md-5">
          {projectDesktopAPI.map((project) => (
            <Col key={project.id} sm={12} md={6} lg={4} xl={4} className="p-2">
              <ProjectsCard project={project} />
            </Col>
          ))}
        </Row>

        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default Works;
