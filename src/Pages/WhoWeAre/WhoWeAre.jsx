import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WhoWeAre.scss";

import staticContent from "../../staticContent/staticContent";

import fireplace1 from "../../images/fireplace1lg.jpg";
import fireplace2 from "../../images/fireplace2lg.jpg";
import fireplace3 from "../../images/fireplace3lg.jpg";

const WhoWeAre = () => {
  return (
    <Container fluid={true} className="who-container">
      <div className="page-header-stripe">
        <h1 className="page-header-stripe-text">לורם איפסום דולור</h1>
      </div>
      <Row className="who-row">
        <Col md={6} className="who-col who-img-col" style={{ backgroundImage: `url(${fireplace1})` }}></Col>
        <Col md={6} className="who-col">
          {staticContent.aboutText[0]}
        </Col>
      </Row>
      <Row className="who-row">
        <Col md={6} className="who-col who-col-right">
          {staticContent.aboutText[1]}
        </Col>
        <Col md={6} className="who-col who-img-col" style={{ backgroundImage: `url(${fireplace3})` }}></Col>
      </Row>
      <Row className="who-row">
        <Col md={6} className="who-col who-img-col" style={{ backgroundImage: `url(${fireplace2})` }}></Col>
        <Col md={6} className="who-col">
          {staticContent.aboutText[2]}
        </Col>
      </Row>
      <Row className="who-lower-row">
        <div className="who-lower-row-container">
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי
            הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה
            ניצאחו נמרגי שהכים תוק
          </p>
          <Link to="/contact" className="who-lower-button">
            צור קשר
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
