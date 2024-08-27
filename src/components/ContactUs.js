import React, { useState } from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (e.g., send an email)
    console.log('Form data:', formData);
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>
        Feel free to contact us with any questions or inquiries. We'll do our best to respond promptly.
      </p>
      <ContactForm onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" required onChange={handleChange} />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required onChange={handleChange} />
        </FormRow>
        <FormRow>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" required onChange={handleChange} />
        </FormRow>
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactContainer>
  );
};


const ContactForm = styled.form`
  // ... styles for your form
`;

const ContactContainer = styled.div`
  padding: 1rem;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  width: 120px;
  margin-right: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

export default ContactUs;