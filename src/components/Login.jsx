import {Button, Form,Card, Container,Row,Col,FormControl,FormGroup,} from 'react-bootstrap'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    const data = { email, password };
  
    try {
      const response = await axios.post("https://products-backend-entri.onrender.com/login", data);
      const token = response.data.token;
      console.log(response.data)
      alert(response.data.message)
      onLogin(token); 
      navigate('/products');
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
      console.log(error);
    }
  };
  
  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
      <Row>
        <Col>
          <Card className='shadow-lg p-4 rounded-3' style={{ width: '22rem' }}>
            <Card.Body>
              <h3 className='text-center mb-4'>Login</h3>
              {errorMessage && (
                <div className='alert alert-danger' role='alert'>
                  {errorMessage}
                </div>
              )}
              <Form onSubmit={handleSubmit}>
                <FormGroup className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email address:</Form.Label>
                  <FormControl
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password:</Form.Label>
                  <FormControl
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <Button variant='primary' type='submit' className='w-100'>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login; 