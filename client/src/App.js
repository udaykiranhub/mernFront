import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('info'); // To handle alert variant

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response) {
        const data = await response.json();
        setMessage(data.message);
        setVariant('success');
      } else {
        setMessage('Already Registered!');
        setVariant('danger');
      }
    } catch (error) {
      setMessage('try after some time');
      setVariant('danger');
    }
  };

  return (
    <Container className="mt-5">
      <Card className="mx-auto" style={{ maxWidth: '500px' }}>
        <Card.Header as="h2" className="text-center">Register</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-block mt-3">
              Register
            </Button>
          </Form>
          {message && <Alert variant={variant} className="mt-3">{message}</Alert>}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
