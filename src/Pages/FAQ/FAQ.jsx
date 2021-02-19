import React from "react";
import { Container } from "react-bootstrap";
import "./FAQ.scss";

import staticContent from "../../staticContent/staticContent";
import fireplace1lg from "../../images/fireplace1lg.jpg";
import fireplace2lg from "../../images/fireplace2lg.jpg";
import fireplace3lg from "../../images/fireplace3lg.jpg";

const imagesArr = [fireplace3lg, fireplace2lg, fireplace1lg];

const FAQ = () => {
  return (
    <Container fluid={true} className="FAQ-container">
      <div className="page-header-stripe">
        <h1 className="page-header-stripe-text">לורם איפסום דולור</h1>
      </div>
      <Container>
        <div>{staticContent.FAQ_Header}</div>
        {staticContent.FAQ_Content.map((item, index) => {
          return (
            <div key={Math.random()}>
              {index % 2 === 0 && imagesArr[index / 2] ? (
                <img className="FAQ-img" src={imagesArr[index / 2]} alt="decoration"></img>
              ) : null}
              <h2>{item.question}</h2>
              {item.answer}
            </div>
          );
        })}
      </Container>
    </Container>
  );
};

export default FAQ;
