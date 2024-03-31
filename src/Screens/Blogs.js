// Blogs.js
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Copyright from "../Components/copyright";
import "../App.css";

const Blogs = () => {
  return (
    <>
      <style>
        {`
          
      `}
      </style>
      <div
        className="rounded-3 p-4 p-md-5 p-lg-5"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="page-title resp-h1 text-center">Blogs</h1>

        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default Blogs;
