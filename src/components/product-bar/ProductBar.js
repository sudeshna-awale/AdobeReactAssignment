import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import "./css/Productlist.css";

const Productlist = () => {
  return (
    <>
      <section className="product-container aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <ProductFilter />
        <ProductList />
      </section>
    </>
  );
};

export default Productlist;
