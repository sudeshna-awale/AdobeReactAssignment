import "./css/Productlist.css";
import React, { useState } from "react";
import timesIcon from "../../assets/Icons/x.svg";
import check from "../../assets/Icons/check.svg";
import { useSelector } from "react-redux/es/exports";

const ProductFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const data = useSelector((state) => state.cart_reducer);
  console.log(data);
  const handleClick = () => {
    showFilter === true ? setShowFilter(false) : setShowFilter(true);
  };

  return (
    <>
      <aside className="filter-product-card aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--1">
        <div className="category">
          <ul>
            <li>
              <a href="/">Clothing</a>
            </li>
            <li>
              <a href="/"> / </a>
            </li>
            <li>
              <a href="/">Women's</a>
            </li>
            <li>
              <a href="/"> / </a>
            </li>
            <li>
              <a href="/" className="outwear">
                Outerwear
              </a>
            </li>
          </ul>
        </div>

        <h2 onClick={handleClick}>Filters</h2>

        <div className={showFilter ? "filter-list active" : "filter-list"}>
          <div className="btn-close">
            <h2>Filters</h2>
            <img
              onClick={handleClick}
              src={timesIcon}
              alt="Button to close fliter bar"
            />
          </div>

          <div className="btn-top">
            <a href="/" className="btn-black">
              X Black
            </a>
            <a href="/" className="btn-clear">
              Clear all
            </a>
          </div>
          <hr />
          <div className="color">
            <h3>Color</h3>
            <ul>
              <li style={{ backgroundColor: "Black" }}>
                <button></button>
                <img src={check} alt="check icon on hover" />
              </li>
              <li style={{ backgroundColor: "White" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "#2D9D78" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "#FDBA5E" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "Black" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "#E34850" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "#6408D3" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "#F9009A" }}>
                <button></button>
              </li>
              <li style={{ backgroundColor: "#EB7327" }}>
                <button></button>
              </li>
              <li className="multicolor">
                <button></button>
              </li>
            </ul>
          </div>

          <hr />

          <div className="size">
            <h3>Size</h3>
            <ul>
              <li>
                <input type="checkbox" />
                <label>X-Small</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Small</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Medium</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Large</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>X-Large</label>
              </li>
            </ul>
          </div>

          <hr />

          <div className="style">
            <h3>Style</h3>
            <ul>
              <li>
                <input type="checkbox" />
                <label>Outdoor</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Casual</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Athleisure</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Running</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Active</label>
              </li>
            </ul>
          </div>

          <hr />

          <div className="brand">
            <h3>Brand</h3>
            <ul>
              <li>
                <input type="checkbox" />
                <label>Calvin Klein</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Dolce & Gabbana </label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Miu Miu </label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Prada </label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Gucci </label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Chanel </label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Saivator Ferrogamo </label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Marni </label>
              </li>
              <li>
                <a href="/">Show more</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductFilter;
