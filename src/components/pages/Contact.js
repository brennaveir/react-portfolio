import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormInputValidation } from "react-form-input-validation";

const ValidationForm = () => {
  const [fields, errors, form] = useFormInputValidation({
    fullName: "",
    email: "",
    message: "",
  }, {
    fullName: "required",
    email: "required|email",
    message: "required"
  });

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      console.log(fields, errors);
      alert(`THANK YOU ${fields.fullName}!`)
      window.location.reload()
      
    }
  }


  return (<React.Fragment>
      <section className="pageContainer p-5 d-flex justify-content-center">
        <Form className="contactForm p-5 d-flex flex-column" onSubmit={onSubmit} style={{ width: '50%' }}>
          <Form.Group className="mb-3" controlId="nameInput">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control
              name="fullName"
              value={fields.fullName}
              placeholder="Please enter your first and last name"
              onChange={form.handleChangeEvent} />
              <label className="error">
        {errors.fullName
          ? errors.fullName
          : ""}
      </label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label >
              Email address
            </Form.Label>
            <Form.Control
              placeholder="name@example.com"
              value={fields.email}
              name="email"
              onChange={form.handleChangeEvent} />
              <label className="error">
        {errors.email
          ? errors.email
          : ""}
      </label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="messageInput">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              // type="message" 
              placeholder="Type a message here"
              value={fields.message}
              name="message"
              onChange={form.handleChangeEvent} />
              <label className="error">
        {errors.message
          ? errors.message
          : ""}
      </label>
          </Form.Group>
          <Button
            type="submit"
            >
            Submit
          </Button>
        
        </Form>
        
      </section>
    </React.Fragment>
  );
          }
  

  export default ValidationForm;