import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white text-center py-2 mt-3"
      style={{ position: "relative", bottom: "0", width: "100%" }}
    >
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Trends. All Rights Reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
