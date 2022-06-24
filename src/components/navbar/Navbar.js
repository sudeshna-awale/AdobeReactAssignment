import React, { useState } from "react";
import "./Navbar.css";
import shoppingBag from "../../assets/Icons/shopping-bag.svg";
import hamburgerIcon from "../../assets/Icons/align-justify.svg";
import user from "../../assets/Icons/user.svg";
import searchIcon from "../../assets/Icons/search.svg";
import timesIcon from "../../assets/Icons/x.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.cart_reducer.cart);

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu === true ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <header className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <nav className="navbar" role="navigation" aria-label="main menu">
          <button
            className="hamburger"
            onClick={handleClick}
            aria-expanded="true"
          >
            <img src={hamburgerIcon} alt="hamburger" aria-hidden="true" />
          </button>
          <div className="logo" aria-labelledby="nav-title">
            <h1 tabIndex={0}>
              <Link to="/">
                <span>V</span>ENIA
              </Link>
            </h1>
          </div>
          <div className={showMenu ? "menu-link active" : "menu-link"}>
            <div className="btn-close">
              <h2>Shop Categories</h2>
              <img
                onClick={handleClick}
                src={timesIcon}
                alt="Button to close fliter bar"
              />
            </div>
            <ul tabIndex={0} role="listbox">
              <li>
                <Link to="/" target="_self">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/" target="_self">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/" target="_self">
                  Smart Gear
                </Link>
              </li>
              <li>
                <Link to="/" target="_self">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="search-bar">
            <ul tabIndex={0} role="searchbox">
              <li className="search">
                <Link to="/" target="_self">
                  <img src={searchIcon} alt="search icon" />
                  <span>Search</span>
                </Link>
              </li>
              <li>
                <Link to="/" target="_self" className="signin">
                  <img src={user} alt="signin" />
                  <span>Sign in</span>
                </Link>
              </li>
              <li className="shopping-cart">
                <Link to="/Cart">
                  <img src={shoppingBag} alt="shopping cart" />
                  <span>({state.length})</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
