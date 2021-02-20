import React, { useEffect, useState } from "react";
import Gallery from "../../Components/Gallery/Gallery";
import { useLocation } from "react-router-dom";

import fireplace1 from "../../images/fireplace1lg.jpg";

import  productsListCSM from "../../products.json";

const mainHeader = "קונדימנטום קורוס בליקרה נונסט";
const mainText = (
  <span>
    גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן לורם איפסום דולור
    סיט אמט,
    <br />
    <br /> קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת
    לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק
    לרטי.
  </span>
);

const MainGallery = () => {
  const location = useLocation();
  const [galleryItemsCate, setGalleryItemsCate] = useState(productsListCSM);

  useEffect(() => {
    const currLocation = location.pathname.split("/")[location.pathname.split("/").length - 1];

    if (currLocation.includes("variant")) {
      const variantId = currLocation.replace("variant", "");
      setGalleryItemsCate(productsListCSM.filter((variant) => `${variant.categorie.id}` === variantId));
    } else {
      setGalleryItemsCate(productsListCSM);
    }
  }, [location.pathname]);

  return <Gallery mainHeader={mainHeader} mainText={mainText} mainImage={fireplace1} galleryItems={galleryItemsCate} />;
};

export default MainGallery;
