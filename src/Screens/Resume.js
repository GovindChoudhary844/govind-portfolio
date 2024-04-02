// Resume.js
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Skills from "../Components/Skills";
import ProjectOdd from "../Components/Projects/ProjectOdd";
import ProjectEven from "../Components/Projects/ProjectEven";
import Courses from "../Components/Courses";
import Education from "../Components/Education";
import Copyright from "../Components/copyright";
import "../App.css";

const Resume = () => {
  return (
    <>
      <style>
        {`
          
          .bg-green{
            border: 1px solid #088F8F;
          }

          .bg-green:hover {
            background-color: #017d7d;
            border: 1px solid #017d7d;
          }

          .bg-green:active {
            background-color: #005151 !important;
            border: 1px solid #005151 !important;
          }
      `}
      </style>
      <div
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{
          color: "var(--third-color)",
        }}
      >
        <h1 className="page-title resp-h1 text-center">Resume</h1>
        <h2 className="mt-5 resp-h2">Profile</h2>
        <hr />
        <p className="resp-text">
          Dedicated web developer equipped with a strong grasp of HTML, CSS, and
          Bootstrap. Skilled in implementing responsive design using
          React-Bootstrap, with fundamental proficiency in JavaScript, React.js,
          Python, Django, and MySQL. Eager to apply technical knowledge and
          contribute to the dynamic evolution of innovative and user-friendly
          web solutions.
        </p>

        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">Skills</h2>
          <hr />
          <Skills />
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">Projects</h2>
          <hr />
          <ProjectOdd index={0} />
          <hr className="hr-small" />
          <ProjectEven index={1} />
          <hr className="hr-small" />
          <ProjectOdd index={2} />
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">Courses</h2>
          <hr />
          <Courses />
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2 text-center">
            Education
          </h2>
          <hr />
          <Education />
          <hr />
        </Col>
        <Row className="align-items-center justify-content-center">
          <Col className="text-center">
            <Button
              className="bg-green resp-text"
              href="https://drive.google.com/file/d/1cDhMVT6BoEVC5TWte3--aeroCGJA9K4H/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default Resume;
