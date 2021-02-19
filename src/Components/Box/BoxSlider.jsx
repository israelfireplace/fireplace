import React from "react";
import "./BoxSlider.scss";
import BoxMask from "../Box/BoxMask";
import fireplace1 from "../../images/fireplace1lg.jpg";
import fireplace2 from "../../images/fireplace2lg.jpg";
import fireplace3 from "../../images/fireplace3lg.jpg";

const BoxSlider = (props) => {
  return (
    <div className="slider">
      {[fireplace1, fireplace2, fireplace3].map((img, index) => {
        return (
          <div
            className="slide"
            style={{
              backgroundImage: `url(${img})`,
            }}
            key={index}
          >
            <BoxMask shadow={"0.4"} header={props.header} text={props.text} />
          </div>
        );
      })}
    </div>
  );
};

export default BoxSlider;
