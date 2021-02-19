import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const ContactForm = ({ validated, handleSubmit, handleFormChange }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="email-form">
      <Form.Row>
        <Form.Group as={Col} controlId="">
          <Form.Control required onChange={handleFormChange} type="email" name="email" placeholder="אימייל" />
          <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="" className="form-row-col">
          <Form.Control required onChange={handleFormChange} type="text" name="senderName" placeholder="שם" />
          <Form.Control.Feedback type="invalid">שדה חובה</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="">
          <Form.Control required onChange={handleFormChange} type="phone" name="phone" placeholder="מס' טלפון" />
          <Form.Control.Feedback type="invalid">שדה חובה</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="" className="form-row-col">
          <Form.Control type="text" name="senderAddress" onChange={handleFormChange} placeholder="מיקום" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="">
          <Form.Control type="text" onChange={handleFormChange} name="howHeared" placeholder="איך שמעת עלינו" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="f">
          <Form.Control
            type="text"
            onChange={handleFormChange}
            name="additionInfo"
            as="textarea"
            row="5"
            placeholder="מידע נוסף"
          />
        </Form.Group>
      </Form.Row>
      <Button className="submit-button" variant="light" type="submit">
        שלח
      </Button>
    </Form>
  );
};

export default ContactForm;
