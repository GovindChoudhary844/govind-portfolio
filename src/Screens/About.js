// About.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import MarqueImage from "../Components/marqueImage";
import Skills from "../Components/Skills";
import Copyright from "../Components/copyright";
import "../App.css";
import "../Components/animation.css";

const About = () => {
  return (
    <>
      <style>
        {`
          hr {
            height: 3px;
            background-color: #088F8F;
          }
          .page-title{

            font-family: cursive;
            // font-family: 'Mr De Haviland', cursive;
            
          }
        `}
      </style>
      <div
        id="about-section"
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{
          color: "var(--third-color)",
        }}
      >
        <Col>
          <h1 className="page-title resp-h1 text-center my-5">About</h1>
          <span>
            <p
              className=" resp-text"
              style={{
                color: "var(--third-color)",
              }}
            >
              Experienced web developer proficient in HTML, CSS, and Bootstrap.
              Skilled in creating responsive designs with React-Bootstrap and
              basic knowledge of JavaScript, React.js, Python, Django, and
              MySQL. Passionate about crafting user-friendly web solutions and
              eager to contribute to innovative projects.
            </p>
          </span>
        </Col>

        <Col>
          <hr />
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2">Skills</h2>
          <Skills />
        </Col>

        <Row>
          <Col className="my-lg-5 my-md-5 my-2">
            <hr />
            <MarqueImage />
          </Col>
        </Row>

        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default About;
