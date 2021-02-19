import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import "./ProductPage.scss";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Box from "../../Components/Box/Box";
import InfoStripe from "../../Components/InfoStripe/InfoStripe";
import GalleryLower from "../../Components/Gallery/GalleryLower";

import { productsList } from "../../JsonLists/itemsList";
import productsListCSM from "../../products.json";

const ProductPage = () => {
  const location = useLocation();
  const [currentProduct, setCurrentProduct] = useState();
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    const index = productsListCSM.findIndex(
      (item) => `${item.id}` === location.pathname.split("/")[location.pathname.split("/").length - 1]
    );
    setCurrentProduct(productsListCSM[index]);
    setSuggestionList(
      productsListCSM.slice(Math.min(index, productsListCSM.length - 2), (index + 3) % productsListCSM.length)
    );
  }, [location.pathname]);
  return (
    <>
      {!!currentProduct ? (
        <Container fluid={true}>
          <Box withMask={false} image={currentProduct.imageLg} />
          <InfoStripe header={currentProduct.header} />
          <div className="product-lower-section">
            <Row className="product-text-row">
              <Col md={7} className="product-lower-right-col">
                <Link to="/contact" className="product-contact-button">
                  צור קשר
                </Link>
                <h3 className="product-lower-header">{currentProduct.header}</h3>
                <br />
                <Markdown source={currentProduct.content} escapeHtml={false} />
                <p>
                  <br />
                  <Link to="/contact" className="bold-link">
                    צרו איתנו קשר
                  </Link>{" "}
                  לכל שאלה.
                </p>
                <p>
                  <br />
                  צפו גם
                </p>
                <ul>
                  {suggestionList.map((item) => {
                    return (
                      <li key={Math.random(10)}>
                        <Link className="bold-link" to={item.url}>
                          {item.header}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col md={5} className="product-lower-left-col">
                <h5 className="product-features-list-header">סגנונות</h5>
                <ul className="product-features-list">
                  {currentProduct.styleList.map((item) => {
                    return <li key={Math.random(10)}>{item}</li>;
                  })}
                </ul>
                <h5 className="product-features-list-header">אפשרויות</h5>
                <ul className="product-features-list">
                  {currentProduct.typeOptionsList.map((item) => {
                    return <li key={Math.random(10)}>{item}</li>;
                  })}
                </ul>
                <h5 className="product-features-list-header">תכונות</h5>
                <ul className="product-features-list">
                  {currentProduct.featuresList.map((item) => {
                    return <li key={Math.random(10)}>{item}</li>;
                  })}
                </ul>
              </Col>
            </Row>
            <GalleryLower galleryItems={suggestionList} />
          </div>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductPage;
