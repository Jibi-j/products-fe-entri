import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center px-4 bg-light">
      <Row className="w-100 align-items-center">
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1 className="fw-bold">Welcome to Trends</h1>
          <p className="fs-6 text-muted">
            Discover the latest deals, trending products, and exclusive collections — all in one place.
          </p>

          <div className="mt-4">
            <Button variant="primary" className="me-2" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="success" className="me-2" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
            <Button variant="dark" onClick={() => navigate('/products')}>
              View Products
            </Button>
          </div>
        </Col>

        <Col md={6}>
          <img
            src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?t=st=1741268543~exp=1741272143~hmac=0f2500c67e5a0d3c8efeda4b32b109ccea74eaaeb8e15b9bbe989b75d34bce97&w=900"
            alt="Trends Banner"
            className="img-fluid w-100"
            style={{ maxHeight: '80vh', objectFit: 'cover', borderRadius: '1rem' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
