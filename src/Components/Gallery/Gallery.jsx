import React from "react";
import { Container } from "react-bootstrap";

import BoxMask from "../Box/BoxMask";
import GalleryLower from "./GalleryLower";
import "./Gallery.scss";

const Gallery = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.mainImage})`,
  };

  return (
    <Container fluid={true} className="gallery-container">
      <div className="headerContainer" style={divStyle}></div>
      <BoxMask header={props.mainHeader} text={props.mainText} />
      <GalleryLower galleryItems={props.galleryItems} />
    </Container>
  );
};

export default Gallery;
