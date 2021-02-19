import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import { categorie } from "../../JsonLists/itemsList";
import staticContent from "../../staticContent/staticContent";
import phoneIcon from "../../images/icons/phone-icon.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Row className="footer-row">
        <Col md={4}>
          <div className="footer-col-inner">
            <h5>מי אנחנו</h5>
            {staticContent.aboutText[0]}
          </div>
        </Col>
        <Col md={4}>
          <div className="footer-col-inner">
            <h5>קטגוריות</h5>
            <ul className="footer-list">
              {categorie.slice(0, 4).map((item) => {
                return (
                  <li key={Math.random()}>
                    <Link className="footer-list-link" to={`/gallery/variant${item.id}`}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="footer-col-inner">
            <h5>ניווט</h5>
            <ul className="footer-list">
              <li>
                <Link className="footer-list-link" to="/">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link className="footer-list-link" to="/gallery">
                  גלריה
                </Link>
              </li>
              <li>
                <Link className="footer-list-link" to="/faq">
                  שאלות נפוצות
                </Link>
              </li>
              <li>
                <Link className="footer-list-link" to="/contact">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="footer-row footer-row-lower">
        <div className="footer-row-lower-item">
          <p>{staticContent.phoneNumber}</p>
          <img src={phoneIcon} className="footer-icon" alt="phone"></img>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
