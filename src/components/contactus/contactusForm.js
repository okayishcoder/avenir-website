import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactusForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message is sent successfully.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="user_name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          name="user_name"
          type="text"
          placeholder="Enter your name"
          maxLength={64}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="user_email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          name="user_email"
          type="email"
          placeholder="Enter your email"
          maxLength={64}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Your message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter your message, max length 5000 characters."
          maxLength={5000}
          name="message"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactusForm;
