import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Form className="m-5 d-flex flex-column" style={{ width: '50%' }}>
       <Form.Group className="mb-3" controlId="nameInput">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Please enter your first and last name" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="emailInput">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="messageInput">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;