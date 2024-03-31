import React from "react";
import { Col, Button } from "react-bootstrap";
import "../App.css";

function Skills() {
  return (
    <>
      <style>
        {`
        .Skills-button{
          background-color: white;
          color: black;
          margin-right: 10px;
          margin-top: 10px;
          border: 1px solid #088F8F;
        }
        .Skills-button:hover{
          background-color: #088F8F;
          color: white;
        }
      `}
      </style>
      <Col>
        <Button className="Skills-button resp-text">HTML</Button>
        <Button className="Skills-button resp-text">CSS</Button>
        <Button className="Skills-button resp-text">JavaScript</Button>
        <Button className="Skills-button resp-text">Bootstrap</Button>
        <Button className="Skills-button resp-text">Python</Button>
        <Button className="Skills-button resp-text">Django</Button>
        <Button className="Skills-button resp-text">ReactJs</Button>
        <Button className="Skills-button resp-text">ReactJs-Bootstarp</Button>
        <Button className="Skills-button resp-text">MySql</Button>
        <Button className="Skills-button resp-text">WordPress</Button>
        <Button className="Skills-button resp-text">Photoshop</Button>
        <Button className="Skills-button resp-text">ChatGPT</Button>
        <Button className="Skills-button resp-text">GitHub</Button>
      </Col>
    </>
  );
}

export default Skills;
