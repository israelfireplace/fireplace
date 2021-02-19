import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import staticContent from "../../staticContent/staticContent";
import { useHistory } from "react-router-dom";
import "./NavBar.scss";
import styles from "./NavBar.module.css";

import searchIcon from "../../images/icons/search-icon.png";

import { categorie } from "../../JsonLists/itemsList";

const NavBar = () => {
  const history = useHistory();
  const [scrolled, setScrolled] = useState();
  const [y, setY] = useState(0);
  const [sideDrawer, setSideDrawer] = useState();
  const [mobileButtonClass, setMobileButtonClass] = useState("");
  const [categoriesExpand, setCategoriesExpant] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrolled(styles.slideDown);
        setMobileButtonClass("");
      } else if (y < window.scrollY) {
        if (sideDrawer !== styles.slideInRight) {
          setMobileButtonClass("");
          setScrolled(styles.slideUp);
        }
      }
      setY(window.scrollY);
    },
    [y, sideDrawer]
  );

  const mobileNavButtonClickHandler = () => {
    setSideDrawer(sideDrawer === styles.slideInRight ? styles.slideOutRight : styles.slideInRight);
    setMobileButtonClass(mobileButtonClass === "opened" ? "" : "opened");
  };

  const closeSideDrawer = (e) => {
    setSideDrawer(styles.slideOutRight);
    setMobileButtonClass("");
  };

  useEffect(() => {
    if (sideDrawer !== styles.slideInRight) {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
    }

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation, sideDrawer]);

  const expantCategiriesNav = () => {
    return categoriesExpand && typeof window !== "undefined" && window.innerWidth > 768 ? "flex" : "none";
  };

  const searchAction = (e) => {
    setSearchValue(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    closeSideDrawer();
    setSearchValue("");
    history.push(`/gallery/search/${searchValue}`);
  };

  return (
    <div className={`${scrolled} navBar`}>
      <div className={`${mobileButtonClass} navMobileButton`} onClick={mobileNavButtonClickHandler}>
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
      <div className="nav-link-container logo-container-mobile" onClick={closeSideDrawer}>
        <Link className="nav-link logo" to="/">
          FirePlace
        </Link>
      </div>
      <div className={`${sideDrawer} nav-items-container`}>
        <div className={`${scrolled} nav-items-container-inner`}>
          <Row className="nav-link-row">
            <Col md={5}>
              <div className="nav-link-group nav-link-group-right">
                <div className="nav-link-container nav-search">
                  <form onSubmit={searchSubmit} className="nav-search-form">
                    <img alt="SEARCH" src={searchIcon}></img>
                    <input placeholder="חיפוש" type="text" value={searchValue} onChange={searchAction}></input>
                  </form>
                </div>
                <div
                  className="nav-link-container nav-link-expand"
                  onMouseEnter={() => {
                    setCategoriesExpant(true);
                  }}
                  onMouseLeave={() => {
                    setCategoriesExpant(false);
                  }}
                  onClick={closeSideDrawer}
                >
                  <div className="nav-link">קטגוריות</div>
                  <div className="arrow"></div>
                </div>
                <div className="nav-link-container" onClick={closeSideDrawer}>
                  <Link className="nav-link" to="/gallery">
                    גלריה
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={2} className="logo-col" >
              <div className="nav-link-container logo-container" onClick={closeSideDrawer}>
                <Link className="nav-link logo" to="/">
                  {staticContent.websiteName}
                </Link>
              </div>
            </Col>
            <Col md={5}>
              <div className="nav-link-group nav-link-group-left">
                <div className="nav-link-container" onClick={closeSideDrawer}>
                  <Link className="nav-link" to="/contact">
                    צור קשר
                  </Link>
                </div>
                <div className="nav-link-container" onClick={closeSideDrawer}>
                  <Link className="nav-link" to="/whoweare">
                    מי אנחנו
                  </Link>
                </div>
                <div className="nav-link-container" onClick={closeSideDrawer}>
                  <Link className="nav-link" to="/faq">
                    שאלות נפוצות
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className="categories-nav"
        style={{ display: `${expantCategiriesNav()}` }}
        onMouseEnter={() => {
          setCategoriesExpant(true);
        }}
        onMouseLeave={() => {
          setCategoriesExpant(false);
        }}
      >
        <div className="categories-nav-inner">
          {categorie.map((item) => {
            return (
              <Link to={`/gallery/variant${item.id}`} className="categories-nav-link" key={Math.random()}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
