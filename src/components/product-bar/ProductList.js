import "./css/Productlist.css";
import heart from "../../assets/Icons/heart.svg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { setAllitem, setLoading } from "../../redux/actions";

const ProductList = () => {
  const { loading, allProduct } = useSelector((state) => state.cart_reducer);
  const dispatch = useDispatch();

  console.log(allProduct);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch(setAllitem(data));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getProducts();
  });

  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProducts = () => {
    return (
      <>
        {allProduct.map((product) => {
          return (
            <article className="card" key={product.id}>
              <Link to={`/${product.id}`}>
                <img
                  className="cart-img"
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%" }}
                />
              </Link>
              <h5>{product.title.substring(0, 15)}</h5>
              <p className="price">${product.price}</p>
              <img
                className="heart-img"
                src={heart}
                alt="heart icon to save product"
              />
            </article>
          );
        })}
      </>
    );
  };

  return (
    <>
      <main className="product-card-wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--12 aem-GridColumn--phone--1">
        <div className="product-grid">
          <div className="top-filter">
            <div>38 Results</div>
            <select>
              <option>Sort By Latest</option>
            </select>
          </div>
          <section className="cards">
            {loading ? <Loading /> : <ShowProducts />}
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductList;
