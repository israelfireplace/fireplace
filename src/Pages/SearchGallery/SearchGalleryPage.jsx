import React, { useState, useEffect } from "react";
import GallerySearch from "../../Components/Gallery/GallerySearch";
import  productsListCSM from "../../products.json";
import { useLocation } from "react-router-dom";

const SearchGalleryPage = () => {
  const location = useLocation();
  const [galleryItemsCate, setGalleryItemsCate] = useState(productsListCSM);
  const [searchText, setSearchText] = useState(location.pathname.split("/")[location.pathname.split("/").length - 1]);

  useEffect(() => {
    const currSearchText = location.pathname.split("/")[location.pathname.split("/").length - 1];
    setSearchText(currSearchText);
    const filtredList = productsListCSM.filter((item) => {
      return (
        item.tags.includes(currSearchText) ||
        item.tags.some((v) => currSearchText.includes(v)) ||
        item.header.includes(currSearchText) ||
        currSearchText.includes(item.header) ||
        JSON.stringify(item.text.props.children).includes(currSearchText) ||
        // item.shortText.includs(currSearchText) ||
        item.featuresList.includes(currSearchText) ||
        item.featuresList.some((v) => currSearchText.includes(v)) ||
        item.styleList.includes(currSearchText) ||
        item.styleList.some((v) => currSearchText.includes(v)) ||
        item.typeOptionsList.includes(currSearchText) ||
        item.typeOptionsList.some((v) => currSearchText.includes(v))
      );
    });
    setGalleryItemsCate(filtredList);
  }, [location.pathname]);
  return <GallerySearch galleryItems={galleryItemsCate} searchText={searchText} />;
};

export default SearchGalleryPage;
