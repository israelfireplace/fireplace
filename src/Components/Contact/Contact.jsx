import React, { useState } from "react";
import "./Contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import telephone from "../../images/form/telephone.png";
import emailImg from "../../images/form/email.png";
import address from "../../images/form/address.png";

import staticContent from "../../staticContent/staticContent";

const service_id = "service_ft1fp3a";
const template_id = "template_dn13lrm";
const user_id = "user_pkfvt69UbFoxlzOZgGg77";
const formClassName = ".email-form";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [addressState, setAddressState] = useState(address);
  const [telephoneState, setTelephoneState] = useState(telephone);
  const [emailState, setEmailState] = useState(emailImg);
  const [formValues, setFormValues] = useState({
    email: "",
    senderName: "",
    phone: "",
    howHeared: "",
    additionInfo: "",
    senderAddress: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    emailjs.sendForm(service_id, template_id, formClassName, user_id).then((res) => {
      console.log(res);
    });
    setValidated(true);
  };

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: [e.target.value] });
  };
  return (
    <Container className="contact-container">
      <div className="contact-header-container">
        <h1 className="border-header contact-header">צור קשר</h1>
      </div>
      <Row>
        <Col className="contact-right-col" md={8}>
          {staticContent.contactPageTop_p}
          <ContactForm validated={validated} handleSubmit={handleSubmit} handleFormChange={handleFormChange} />
        </Col>
        <Col md={4} className="contact-left-col">
          <ContactInfo
            staticContent={staticContent}
            telephoneState={telephoneState}
            setTelephoneState={setTelephoneState}
            emailState={emailState}
            setEmailState={setEmailState}
            addressState={addressState}
            setAddressState={setAddressState}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
