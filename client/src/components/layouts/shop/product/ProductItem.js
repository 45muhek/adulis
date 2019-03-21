import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, addToCart } from "../../../../actions/productActions";
import Spinner from "../../../common/Spinner";
import AddToCart from "./AddToCart";

class ProductItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { product } = this.props;
    const rateIndex = (parseInt(product.rating.averge) * 100) / 5;
    return (
      <li class="post-288 product type-product has-post-thumbnail isotope-item featured shipping-taxable product-type-external product-cat-clothing product-cat-hoodies instock">
        <div class="image_frame scale-with-grid product-loop-thumb">
          <div class="image_wrapper">
            <Link to={`/product/${product._id}`}>
              <div class="mask" />{" "}
              <img
                width="500"
                height="500"
                src={product.image}
                class="scale-with-grid wp-post-image"
                alt="hoodie_4_front"
              />{" "}
            </Link>
            <div
              style={{
                position: "absolute",
                bottom: "10" + "px",
                right: "14" + "px"
              }}
            >
              <i class="icon-eye"> {product.view}</i>
            </div>
          </div>
          <a href="product-page.html">
            <span class="product-loading-icon added-cart" />
          </a>
        </div>
        <div class="desc">
          <h4>
            <a href="product-page.html">{product.pname}</a>
          </h4>
          <div
            class="star-rating"
            title={"Rated " + product.rating.averge + " out of 5"}
          >
            {/* Ratting logic */}

            <span style={{ width: rateIndex + "%" }}>
              <strong class="rating">product.rating.averge</strong> out of 5
            </span>
          </div>
          <div class="column one-fourth column_column">
            <span class="price">
              <span class="amount">{product.price}</span>
              <span style={{ fontSize: "15" + "px", marginLeft: "2" + "px" }}>
                birr
              </span>
            </span>
          </div>

          <AddToCart pid={product._id} />
        </div>
      </li>
    );
  }
}
export default ProductItem;
