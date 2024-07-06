import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import "./Topmenu.css";
import ModeButton from "../Components/ModeButton";

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

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleClickMenu = () => {
    toggleMenu();
  };

  const [darkMode, setDarkMode] = useState(() => {
    // Get the value from localStorage if available, or default to false (light mode)
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    // Here you can also apply dark mode to the entire app
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Container fluid>
        <Container>
          <Row className="top-navbar" style={{ height: "140px" }}>
            <Col
              xs={6}
              sm={6}
              md={6}
              className="d-flex align-items-center top-navbar-col rounded-start-2"
            >
              <div className="d-flex align-items-center">
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <p className="logo-name mb-0">Govind</p>
                  <img
                    src={process.env.PUBLIC_URL + "/Images/top-logo.png"}
                    alt="Govind"
                    className="logo-image ms-2"
                  />
                </Link>
              </div>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={6}
              className="d-flex align-items-center justify-content-end top-navbar-col rounded-end-2"
            >
              <div>
                <ModeButton
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </div>

              <div className="top-menu-button" onClick={handleClickMenu}>
                {menuVisible ? (
                  <i className="fa-solid fa-xmark resp-h3"></i>
                ) : (
                  <i className="fa-solid fa-bars resp-h3"></i>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        {/* menu Item */}
        {menuVisible && (
          <Container
            fluid
            className="position-fixed"
            style={{
              marginTop: "140px",
              width: "95%",
              zIndex: "1010",
            }}
          >
            <div
              ref={menuRef}
              className="menu-container"
              style={{
                width: "100%",
                marginLeft: "-12px",
                backgroundColor: "var(--Fourth-color)",
              }}
            >
              <Row className="rounded-3">
                <Col sm={12} md={12}>
                  <Nav className="flex-column">
                    <Nav.Link
                      as={Link}
                      to="/about"
                      className="top-navlink-button resp-h5"
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
                      className="top-navlink-button resp-h5"
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
                      className="top-navlink-button resp-h5"
                      onClick={closeMenu}
                    >
                      <span>
                        <i className="fa-light fa-briefcase top-navlink-button-icon"></i>
                      </span>
                      Works
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/contact"
                      className="top-navlink-button resp-h5"
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
