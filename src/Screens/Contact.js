// Contact.js
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import Copyright from "../Components/copyright";
import "../App.css";

const Contact = () => {
  document.body.style.backgroundColor = "rgba(250, 228, 232, 0.5)";

  const [focusedGroup, setFocusedGroup] = useState(null);

  const handleFocus = (groupId) => {
    setFocusedGroup(groupId);
  };

  const handleBlur = () => {
    setFocusedGroup(null);
  };

  const isFocused = (groupId) => groupId === focusedGroup;

  const customStyles = `
    #validationCustom01 {
      border: ${
        isFocused("validationCustom01") ? "2px solid blue" : "1px solid black"
      };
      border-radius: 10px;
    }

    #validationCustom02 {
      border: ${
        isFocused("validationCustom02") ? "2px solid blue" : "1px solid black"
      };
      border-radius: 10px;
    }

    #validationCustom03 {
      border: ${
        isFocused("validationCustom03") ? "2px solid blue" : "1px solid black"
      };
      border-radius: 10px;
    }
    
    #validationCustom04 {
      border: ${
        isFocused("validationCustom04") ? "2px solid blue" : "1px solid black"
      };
      border-radius: 10px;
      height: 120px;
    }

    #validationCustom04 .form-control,
    #validationCustom04 textarea {
      height: 150px;
    }

    .Contact-icons{
      color: black;
      position: absolute;
      z-index: 1;
      margin-top: 1.25rem;
      margin-left: 1.25rem;
      transition: transform 0.3s ease-in-out;
    }

    .Contact-icons.grow {
      transform: scale(1.2); 
    }

    .form-group {
      position: relative;
    }
    
    .custom-floating-label label,
    .custom-floating-label .form-control {
      left: 1rem;
      padding-left: 2.5rem;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="p-2">
        <Row
          style={{
            backgroundColor: "var(--primary-color)",
          }}
          className="mt-2"
        >
          <Col
            md={4}
            className="d-none d-md-block"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/Images/ContactUs.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Col>
          <Col md={8} className="my-5 p-2">
            <h1
              className="text-center resp-h1"
              style={{
                color: "var(--third-color)",
              }}
            >
              Contact us
            </h1>
            <Form action="https://formspree.io/f/mjvnaeyb" method="POST">
              <Row className="d-flex justify-content-center align-content-center">
                <Form.Group
                  className="p-2"
                  as={Col}
                  md="5"
                  controlId="validationCustomFirstName" // Updated controlId
                  onFocus={() => handleFocus("validationCustomFirstName")}
                  onBlur={handleBlur}
                >
                  <i
                    className={`Contact-icons fa-solid fa-user-tie ${
                      isFocused("validationCustomFirstName") ? "grow" : ""
                    }`}
                  ></i>
                  <FloatingLabel
                    controlId="validationCustomFirstName"
                    label="First name"
                    className="custom-floating-label mx-1"
                  >
                    <Form.Control
                      required
                      type="text"
                      name="FirstName"
                      placeholder="First name"
                      className="custom-floating-label"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="5"
                  controlId="validationCustom02"
                  onFocus={() => handleFocus("validationCustom02")}
                  onBlur={handleBlur}
                >
                  <i
                    className={`Contact-icons fa-solid fa-user-tie ${
                      isFocused("validationCustom02") ? "grow" : ""
                    }`}
                  ></i>
                  <FloatingLabel
                    controlId="validationCustom02"
                    label="Last name"
                    className="custom-floating-label mx-1"
                  >
                    <Form.Control
                      required
                      type="text"
                      name="LastName"
                      placeholder="Last name"
                      className="custom-floating-label"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="10"
                  controlId="validationCustom03"
                  onFocus={() => handleFocus("validationCustom03")}
                  onBlur={handleBlur}
                >
                  <i
                    className={`Contact-icons fa-regular fa-envelope ${
                      isFocused("validationCustom03") ? "grow" : ""
                    }`}
                  ></i>
                  <FloatingLabel
                    controlId="validationCustom03"
                    label="Email"
                    className="custom-floating-label mx-2"
                  >
                    <Form.Control
                      required
                      type="Email"
                      name="Email"
                      placeholder="Email"
                      className="custom-floating-label"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  className="p-2"
                  as={Col}
                  md="10"
                  controlId="validationCustom04"
                  onFocus={() => handleFocus("validationCustom04")}
                  onBlur={handleBlur}
                >
                  <FloatingLabel
                    controlId="validationCustom04"
                    label="Description"
                    className="mx-2"
                  >
                    <Form.Control
                      required
                      name="Description"
                      as="textarea"
                      rows="5"
                      placeholder="Description"
                    />
                  </FloatingLabel>
                </Form.Group>
                <Col md="10" className=" p-2">
                  <Button
                    variant="outline-primary"
                    className="ml-auto mx-2"
                    type="submit" // Added type attribute
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <hr />
          <Row className="my-3">
            <Copyright />
          </Row>
        </Row>
      </div>
    </>
  );
};
export default Contact;
