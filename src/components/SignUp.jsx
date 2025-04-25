import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validation
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    try {
      await axios.post('https://products-backend-entri.onrender.com/user', data);
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response?.data?.message || 'Sign up failed');
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
      <Row>
        <Col>
          <Card className='shadow-lg p-4 rounded-3' style={{ width: '22rem' }}>
            <Card.Body>
              <h3 className='text-center mb-4'>Signup</h3>
              {errorMessage && (
                <div className='alert alert-danger' role='alert'>
                  {errorMessage}
                </div>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formName'>
                  <Form.Label>Name:</Form.Label>
                  <FormControl
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                  <Form.Label>Email:</Form.Label>
                  <FormControl
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                  <Form.Label>Password:</Form.Label>
                  <FormControl
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                  <Form.Label>Confirm Password:</Form.Label>
                  <FormControl
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant='success' type='submit' className='w-100'>
                  Signup
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
