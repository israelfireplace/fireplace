import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/hoc/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Components/Contact/Contact";
import MainGallery from "./Pages/MainGallery/MainGallery";
import ProductPage from "./Pages/Product/ProductPage";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre";
import SearchGalleryPage from "./Pages/SearchGallery/SearchGalleryPage";
import FAQ from "./Pages/FAQ/FAQ";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Route
          render={({ location }) => (
            <>
              <NavBar />
              <Switch location={location}>
                <Route path="/" exact component={Landing} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/gallery/search/*" exact component={SearchGalleryPage} />
                <Route path="/gallery" exact component={MainGallery} />
                <Route path="/gallery/*" exact component={MainGallery} />
                <Route path="/itempage/*" exact component={ProductPage} />
                <Route path="/whoweare" exact component={WhoWeAre} />
                <Route path="/faq" exact component={FAQ} />
                {/* <Route path="/linkedinauth" component={Linkedinauth} /> */}
              </Switch>

              <Footer />
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
