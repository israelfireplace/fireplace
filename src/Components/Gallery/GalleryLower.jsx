import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import GalleryItem from './GalleryItem'
import { Link } from 'react-router-dom';
import './Gallery.scss'

const GalleryLower = ({galleryItems}) => {
    return (
        <div className="gallery-lower_container lower-section">
        <Container>
          <Row>
            {galleryItems.map((item, index) => {
              return (
                <Col md={4} key={Math.random(10)}>
                  <Link to={item.url}>
                    <GalleryItem image={item.imageSm} text={item.shortText} />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    )
}

export default GalleryLower
