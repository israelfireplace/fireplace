import React, { useState, useEffect } from "react";
import "./Box.scss";
import styles from "./Box.module.css";
import BoxMask from "./BoxMask";
import { Link } from "react-router-dom";

const Box = ({ image, side, shadow, header, withMask, text, buttonLink, buttonText }) => {
  const [sideState, setSideState] = useState("translate(-50%, -50%)");
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  const sideStyle = {
    transform: sideState,
  };
  useEffect(() => {
    side === "left" && setSideState("translate(-80%, -50%)");
    side === "right" && setSideState("translate(-20%, -50%)");
  }, [side]);
  return (
    <div className={styles.box} style={divStyle}>
      {withMask ? (
        <BoxMask
          shadow={shadow}
          header={header}
          text={text}
          buttonLink={buttonLink}
          buttonText={buttonText}
          sideStyle={sideStyle}
        />
      ) : (
        <div className="textContainer-center" style={sideStyle}>
          <h1 className="headers-text">{header}</h1>
          <p className="sub-header-text">{text}</p>
          {buttonLink ? (
            <Link className="box-link" to={buttonLink}>
              {buttonText}
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Box;
