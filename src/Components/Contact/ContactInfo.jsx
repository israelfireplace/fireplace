import React from "react";
import { Row, Col } from "react-bootstrap";

import telephone from "../../images/form/telephone.png";
import telephoneActive from "../../images/form/telephone-active.png";
import emailImg from "../../images/form/email.png";
import emailActive from "../../images/form/email-active.png";
import address from "../../images/form/address.png";
import addressActive from "../../images/form/address-active.png";

const ContactInfo = ({
  staticContent,
  telephoneState,
  setTelephoneState,
  emailState,
  setEmailState,
  addressState,
  setAddressState,
}) => {
  return (
    <>
      <Row>
        <Col className="contact-icon-container">
          <img
            src={telephoneState}
            alt="phone"
            onMouseEnter={() => setTelephoneState(telephoneActive)}
            onMouseLeave={() => setTelephoneState(telephone)}
          />
          <p>{staticContent.phoneNumber}</p>
        </Col>
      </Row>
      <Row>
        <Col className="contact-icon-container">
          <img
            src={emailState}
            alt="mail address"
            onMouseEnter={() => setEmailState(emailActive)}
            onMouseLeave={() => setEmailState(emailImg)}
          />
          <p>{staticContent.emailAddress}</p>
        </Col>
      </Row>
      <Row>
        <Col className="contact-icon-container">
          <img
            src={addressState}
            alt="address"
            onMouseEnter={() => setAddressState(addressActive)}
            onMouseLeave={() => setAddressState(address)}
          />
          <p>{staticContent.address}</p>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfo;
