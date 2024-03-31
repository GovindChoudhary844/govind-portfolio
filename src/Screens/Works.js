// Works.js
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Copyright from "../Components/copyright";
import "../App.css";

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
          backgroundColor: "var(--primary-color)",
          color: "var(--third-color)",
        }}
      >
        <h1 className="page-title resp-h1 text-center">Works</h1>

        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default Works;
