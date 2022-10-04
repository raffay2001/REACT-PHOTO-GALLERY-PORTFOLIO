import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <h2>Jenny Wilson.</h2>
        </div>

        {!showMenu && (
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        )}

        {!showMenu && (
          <div className="social-icons">
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com"
              rel="noreferrer"
              target="_blank"
            >
              <div className="facebook-icon">
                <span>f</span>
              </div>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com"
              rel="noreferrer"
              target="_blank"
            >
              <div className="linkedin-icon">
                <span>in</span>
              </div>
            </a>
          </div>
        )}

        {showMobileMenu && showMenu && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                }}
              >
                Gallery
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                }}
              >
                Services
              </li>
              <li
                onClick={() => {
                  setShowMobileMenu(false);
                }}
              >
                Contact
              </li>
            </ul>
            <div className="mobile-social-icons">
              <a
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <div className="facebook-icon">
                  <span>f</span>
                </div>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                <div className="linkedin-icon">
                  <span>in</span>
                </div>
              </a>
            </div>
            <button
              className="close-btn"
              onClick={() => setShowMobileMenu(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}

        {showMenu && (
          <button
            className="toggle-btn"
            onClick={() => setShowMobileMenu(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
