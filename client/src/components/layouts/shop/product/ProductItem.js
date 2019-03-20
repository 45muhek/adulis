import React, { Component } from "react";

import { getAllProducts } from "../../../../actions/productActions";
import Spinner from "../../../common/Spinner";

class ProductItem extends Component {
  render() {
    console.log(this.props);
    const { product } = this.props;
    const rateIndex = (parseInt(product.rating.averge) * 100) / 5;
    return (
      <li class="post-288 product type-product has-post-thumbnail isotope-item featured shipping-taxable product-type-external product-cat-clothing product-cat-hoodies instock">
        <div class="image_frame scale-with-grid product-loop-thumb">
          <div class="image_wrapper">
            <a href="product-page.html">
              <div class="mask" />{" "}
              <img
                width="500"
                height="500"
                src="images/hoodie_4_front-500x500.jpg"
                class="scale-with-grid wp-post-image"
                alt="hoodie_4_front"
              />{" "}
            </a>
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
          <div class="column three-fourth column_column">
            <a
              class="button button_left button_theme button_js kill_the_icon mybutton"
              href="#"
              target="_blank"
            >
              <span class="button_icon adulis_cart_icon">
                <i class="icon-basket" />
              </span>
              <span class="button_label cart_btn">Add to cart</span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}
export default ProductItem;
