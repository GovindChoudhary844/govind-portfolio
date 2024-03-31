// Resume.js
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Skills from "../Components/Skills";
import Project1 from "../Components/Projects/Project1";
import Project2 from "../Components/Projects/Project2";
import Project3 from "../Components/Projects/Project3";
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
          .bg-green:hover{
            background-color: #017d7d;
            border: 1px solid #017d7d;
          }
      `}
      </style>
      <div
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{
          backgroundColor: "var(--primary-color)",
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
          <Project1 />
          <hr className="hr-small" />
          <Project2 />
          <hr className="hr-small" />
          <Project3 />
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
            <Button className="bg-green resp-text">Download</Button>
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
