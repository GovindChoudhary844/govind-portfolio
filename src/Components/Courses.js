import React from "react";
import { Row, Col } from "react-bootstrap";

function Courses() {
  return (
    <>
      <style>
        {`
        .italic {
          font-style: italic;
        }
        `}
      </style>
      <Row className="align-items-center">
        <Col md={5} className="my-3 my-md-0">
          <img
            src="Images/Python_Full_Stack_Developer.png"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={7}>
          <h5 className="resp-h5">
            Python Full Stack Developer (05/2023 – 09/2023)
          </h5>
          <p className="text-muted italic resp-text">Ducat, New Delhi, India</p>
          <p className="resp-text">
            Successfully completed the Python Full Stack Development course at
            Ducat in South Extension 1, Delhi. The comprehensive program covered
            HTML, CSS, JavaScript, Bootstrap, React.js, Python, Django, and
            MySQL basics. This hands-on experience has equipped me with a solid
            foundation in web development, allowing me to create dynamic and
            responsive websites.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Courses;
