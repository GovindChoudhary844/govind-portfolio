// ProfileSidebar.js
import React from "react";
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import "../App.css";
import "./ProfileSidebar.css";

function ProfileSidebar() {
  return (
    <>
      <div className="sticky-profile">
        <Row>
          <Col>
            <div
              className="rounded-3 p-3 "
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <span className="profile-image-span">
                <img
                  src={process.env.PUBLIC_URL + "/Images/photo.jpg"}
                  alt="profile"
                  width={200}
                  className="profile-image rounded-5"
                />
              </span>
              <h3
                className="text-center my-3 profile-name resp-h2"
                style={{ color: "var(--third-color)" }}
              >
                Govind Choudhary
              </h3>
              <span className="d-flex justify-content-center align-items-center">
                <p
                  className="text-center d-flex justify-content-center align-items-center profile-feild my-3"
                  style={{
                    width: "50%",
                    backgroundColor: "#DCDCDC",
                    borderRadius: "10px",
                    height: "35px",
                  }}
                >
                  <strong className="resp-h6">Web Developer</strong>
                </p>
              </span>

              <Row className="social-icons d-flex my-3">
                <Col className="d-flex justify-content-center gap-2">
                  <a href="#" className="bg-github">
                    <i className="fa-brands fa-github p-3 resp-h5"></i>
                  </a>
                  <a href="#" className="bg-twitter">
                    <i className="fa-brands fa-twitter p-3 resp-h5"></i>
                  </a>
                  <a href="#" className="bg-linkedin">
                    <i className="fa-brands fa-linkedin-in p-3 resp-h5"></i>
                  </a>
                </Col>
              </Row>
              <Row className="my-3 mt-5 px-md-5 px-lg-0">
                <Col>
                  <Card className="rounded-2 bg-green">
                    <ListGroup
                      variant="flush"
                      className="rounded-2 profile-sidebar-content"
                    >
                      <ListGroup.Item
                        style={{
                          backgroundColor: "var(--secondary-color)",
                          color: "var(--third-color)",
                        }}
                      >
                        <Row>
                          <Col xs={2} sm={2} md={2} className="icon">
                            <Button className="button-desc">
                              <i className="fa-solid fa-phone resp-h6"></i>
                            </Button>
                          </Col>
                          <Col xs={10} sm={10} md={10}>
                            <span className=" resp-text-small">Phone</span>
                            <br />
                            <span>
                              <a
                                className="resp-h6"
                                href="tel:+91 8595677844"
                                style={{ textDecoration: "none" }}
                              >
                                {" "}
                                8595677844
                              </a>
                            </span>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item
                        style={{
                          backgroundColor: "var(--secondary-color)",
                          color: "var(--third-color)",
                        }}
                      >
                        <Row>
                          <Col xs={2} sm={2} md={2} className="icon">
                            <Button className="button-desc">
                              <i className="fa-solid fa-envelope resp-h6"></i>
                            </Button>
                          </Col>
                          <Col xs={10} sm={10} md={10}>
                            <span className=" resp-text-small">Email</span>
                            <br />
                            <span style={{ fontSize: "12px" }}>
                              <a
                                href="mailto:govindchoudhary844@gmail.com"
                                className="resp-text-small"
                                style={{
                                  textDecoration: "none",
                                }}
                              >
                                govindchoudhary844@gmail.com
                              </a>
                            </span>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item
                        style={{
                          backgroundColor: "var(--secondary-color)",
                          color: "var(--third-color)",
                        }}
                      >
                        <Row>
                          <Col xs={2} sm={2} md={2} className="icon">
                            <Button className="button-desc">
                              <i className="fa-solid fa-location-dot resp-h6"></i>
                            </Button>
                          </Col>
                          <Col xs={10} sm={10} md={10}>
                            <span className=" resp-text-small">Address</span>
                            <br />
                            <p className="resp-h6">New Delhi, Delhi</p>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-center my-3 mb-5">
                  <Button
                    className="bg-green resp-text"
                    href="https://drive.google.com/file/d/1w0aH_c1uko22L5h5m1qhb9Ilzdo8v9Y4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProfileSidebar;
