import { Button, Form } from "react-bootstrap";

const ContactusForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your name"
          maxLength={64}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          maxLength={64}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Your message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter your message, max length 5000 characters."
          maxLength={5000}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactusForm;
