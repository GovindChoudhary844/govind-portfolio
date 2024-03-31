import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Topmenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
        .top-mode-button {
          border-radius: 20%;
          padding: 10px;
          background: #f2f2f2;
          box-shadow: -10px 10px 9px #929292;
        }
        .top-menu-button {
          border-radius: 20%;
          padding: 10px;
          background: #f2f2f2;
          box-shadow: -10px 10px 9px #929292;
          display: none; 
        }
        
        .name-logo {
          width: 200px;
        }

        .top-navlink-button {
          color: black;
        }
        .top-navlink-button:hover {
          color: blue;
          background-color: #dcdcdc;
          border-radius: 10px;
        }

        .top-navlink-button-icon {
          margin-right: 15px;
          font-size: 25px;
        }

        .menu-container {
          opacity: ${menuVisible ? "1" : "0"};
          visibility: ${menuVisible ? "visible" : "hidden"};
          transition: opacity 0.5s, visibility 0.5s;
          position: absolute;
          z-index: 1000;
          background-color: white;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
        }

        .top-navbar-col {
          transition: background-color 0.5s;
          ${
            scrolled
              ? "background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);"
              : "background-color: transparent;"
          }
        }
        

        @media (max-width: 767.98px) {
          .top-navbar {
            height: 20vh !important;
          }
          .name-logo {
            width: 150px !important;
          }
        }
        
        @media (max-width: 1399px) {
          .top-navbar {
            position: fixed;
            top: 0;
            left: 0;
            padding: 30px;
            width: 100%;
            z-index: 1000;
          }
          .top-menu-button {
            display: block;
          }
        }
        `}
      </style>
      <Container fluid>
        <Container>
          <Row className="top-navbar" style={{ height: "20vh" }}>
            <Col
              xs={6}
              sm={6}
              md={6}
              className="d-flex align-items-center top-navbar-col rounded-start-2"
            >
              <img
                src="Images\top-logo.png"
                alt="Govind"
                className="name-logo"
              />
            </Col>
            <Col
              xs={6}
              sm={6}
              md={6}
              className="d-flex align-items-center justify-content-end top-navbar-col rounded-end-2"
            >
              <div className="top-mode-button mx-3">
                <i className="fa-solid fa-moon-stars fa-2x"></i>
              </div>
              <div className="top-menu-button" onClick={toggleMenu}>
                <i className="fa-solid fa-bars fa-2x"></i>
              </div>
            </Col>
          </Row>
        </Container>
        {/* menu Item */}
        {menuVisible && (
          <Container
            fluid
            className="position-fixed"
            style={{ marginTop: "20vh", width: "95%", zIndex: "1010" }}
          >
            <div
              ref={menuRef}
              className="menu-container"
              style={{ width: "100%", marginLeft: "-12px" }}
            >
              <Row className="rounded-3">
                <Col sm={12} md={12}>
                  <Nav className="flex-column">
                    <Nav.Link
                      as={Link}
                      to="/about"
                      className="top-navlink-button"
                      onClick={closeMenu}
                    >
                      <span>
                        <i className="fa-light fa-user top-navlink-button-icon"></i>
                      </span>
                      About
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/resume"
                      className="top-navlink-button"
                      onClick={closeMenu}
                    >
                      <span>
                        <i className="fa-light fa-file-lines top-navlink-button-icon"></i>
                      </span>
                      Resume
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/works"
                      className="top-navlink-button"
                      onClick={closeMenu}
                    >
                      <span>
                        <i className="fa-light fa-briefcase top-navlink-button-icon"></i>
                      </span>
                      Works
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/blogs"
                      className="top-navlink-button"
                      onClick={closeMenu}
                    >
                      <span>
                        <i className="fa-regular fa-blog top-navlink-button-icon"></i>
                      </span>
                      Blogs
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/contact"
                      className="top-navlink-button"
                      onClick={closeMenu}
                    >
                      <span>
                        <i className="size-22 fa-light fa-address-book top-navlink-button-icon"></i>
                      </span>
                      Contact
                    </Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </div>
          </Container>
        )}
      </Container>
    </>
  );
}

export default Topmenu;
