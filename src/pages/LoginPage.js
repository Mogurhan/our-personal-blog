import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Simulating useEffect for login effect (fetching user data, etc.)
  useEffect(() => {
    // Example: Fetch user data after login
    if (loggedIn) {
      // Replace with actual fetch logic
      console.log('Fetching user data...');
    }
  }, [loggedIn]);

  const handleLogin = () => {
    // Simulated login validation
    if (username === 'admin' && password === '123') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (loggedIn) {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <h2 className="text-center mb-4">Login Successful!</h2>
           
            
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Link to="/home" className="btn btn-primary btn-block">Login</Link>
            
            {/* <Link to="/home" className="btn btn-primary btn-block">Login</Link> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
