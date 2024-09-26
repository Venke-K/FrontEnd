import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here, e.g., sending data to your backend or displaying a success message.
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form fields after submission
  };

  return (
    
    <div className="contact-page" >
    <Container className="mt-5 contact-container">
    <h2>Contact Us</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className="form-group">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </Form.Group>
  
      <Form.Group controlId="formEmail" className="form-group">
        <Form.Label className="form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </Form.Group>
  
      <Form.Group controlId="formMessage" className="form-group">
        <Form.Label className="form-label">Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          required
        />
      </Form.Group>
  
      <Button variant="primary" type="submit" className="mt-4 submit-btn">
        Submit
      </Button>
    </Form>
  </Container> 
  </div> 
  
  )
};

export default Contact;
