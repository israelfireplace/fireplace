import React from "react";

import "./BoxMask.scss";
import "./Box.scss";
import { Link } from "react-router-dom";

const BoxMask = (props) => {
  const shadow = {
    background: `rgba(0, 0, 0, ${props.shadow ? props.shadow : "0.6"})`
  }
  return (
    <div style={shadow} className={`mask-container`}>
      <div style={props.sideStyle} className="textContainer-center">
        <h1 className="headers-text">{props.header}</h1>
        <p className="sub-header-text">{props.text}</p>
        {props.buttonLink ? <Link className="box-link" to={props.buttonLink}>{props.buttonText}</Link> : null}
      </div>
      
    </div>
  );
};

export default BoxMask;
