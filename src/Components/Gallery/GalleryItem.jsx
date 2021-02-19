import React from "react";
import "./Gallery.scss";

const GalleryItem = (props) => {
  return (
    <div className="gallery-item">
      <img src={props.image} alt="gallery"></img>
      <div className="item-overlay">
        <div className="item-text-container">
          <div className="item-text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
