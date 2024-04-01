import React from "react";
import { Col } from "react-bootstrap";

function Education() {
  return (
    <>
      <style>
        {`
        .italic{
          font-style: italic;
        }

        .hr-small {
          border: none;
          overflow: visible;
          text-align: center;
          height: 3px;
          width: 80%
        }
        
        .hr-small::after {
          background: #fff;
          content: '§';
          padding: 0 4px;
          position: relative;
          top: -13px;
        }
        `}
      </style>
      <Col>
        <h5 className="resp-h5">St. Columbus School, Faridabad, India</h5>
        <p
          className="italic resp-text"
          style={{
            color: "var(--sixth-color)",
          }}
        >
          Class 12, 2020
        </p>
        <p className="resp-text">
          Passed 12th in (Commerce) from CBSE board achieving 70%
        </p>
      </Col>
      <Col>
        <hr className="hr-small" />
        <h5 className="resp-h5">
          Aravali College Of Engineering And Management, Faridabad, India
        </h5>
        <p
          className="italic resp-text"
          style={{
            color: "var(--sixth-color)",
          }}
        >
          BCA, 2020 – 2023
        </p>
        <p className="resp-text">
          Bachelor of Computer Application - Graduated
        </p>
      </Col>
    </>
  );
}

export default Education;
