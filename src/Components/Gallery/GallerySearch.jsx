import React from "react";
import { Container } from "react-bootstrap";

import GalleryLower from "./GalleryLower";
import "./Gallery.scss";

const GallerySearch = ({ galleryItems, searchText }) => {
  return (
    <Container fluid={true} className="gallery-container search-gallery-container">
      <div className="page-header-stripe">
        <p className="search-results">תוצאות חיפוש</p>
        <h1 className="page-header-stripe-text">{searchText}</h1>
      </div>
      {galleryItems.length > 0 ? (
        <GalleryLower galleryItems={galleryItems} />
      ) : (
        <div>
          <h3 className="search-noResultFound">לא נמצאו תוצאות לחיפוש המבוקש</h3>
        </div>
      )}
    </Container>
  );
};

export default GallerySearch;
