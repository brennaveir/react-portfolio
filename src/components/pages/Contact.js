import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';


function HandleForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;



    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'fullName') {
      setFullName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!fullName && email && message) {
      setErrorMessage('You must enter your name!')
    }
    if (!email && fullName && message) {
      setErrorMessage('You must include your email!')
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Email is invalid');
      return;
    }
    setFullName('');
    setMessage('');
    setEmail('');
    alert(`Hello ${fullName}`);
  };



  return (
    <>
      <section className="pageContainer p-5 d-flex justify-content-center">
        <Form className="contactForm p-5 d-flex flex-column" style={{ width: '50%' }}>
          <Form.Group className="mb-3" controlId="nameInput">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control
              name="fullName"
              value={fullName}
              placeholder="Please enter your first and last name"
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label >
              Email address
            </Form.Label>
            <Form.Control
              placeholder="name@example.com"
              value={email}
              name="email"
              onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="messageInput">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              // type="message" 
              placeholder="Type a message here"
              value={message}
              name="message"
              onChange={handleInputChange} />
          </Form.Group>
          <Button
            type="button"
            onclick={handleFormSubmit}>
            Submit
          </Button>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </Form>
        
      </section>
    </>
  );
}

export default HandleForm;