import React from "react";
import "./InfoStripe.scss";

const InfoStripe = ({ header }) => {
  const scrollOnClick = () => {
    let pageHeight = window.innerHeight;
    window.scroll({
      top: pageHeight,
      behavior: "smooth",
    });

  };
  return (
    <div className="info-stripe">
      <div className="info-header">{header}</div>
      <div className="info-stripe-arrow-container" onClick={scrollOnClick}>
        <p className="info-stripe-text">למידע נוסף גלול למטה</p>
        <div className="arrow bounce" />
      </div>
    </div>
  );
};

export default InfoStripe;
