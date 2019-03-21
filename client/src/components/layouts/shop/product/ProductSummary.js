import React, { Component } from "react";
import ProductMeta from "./ProductMeta";

class ProductSummary extends Component {
  render() {
    return (
      <div class="column one-second summary entry-summary">
        <h1 class="product_title entry-title">Flying Ninja</h1>
        <div
          class="woocommerce-product-rating"
          itemscope
          itemtype="http://schema.org/AggregateRating"
        >
          <div class="star-rating" title="Rated 4.00 out of 5">
            <span style={{ width: "80" + "%" }}>
              {" "}
              <strong class="rating">4.00</strong> out of{" "}
              <span itemprop="bestRating">5</span> based on{" "}
              <span class="rating">4</span> customer ratings{" "}
            </span>
          </div>
          <a href="#reviews" class="woocommerce-review-link" rel="nofollow">
            (
            <span itemprop="reviewCount" class="count">
              4
            </span>{" "}
            customer reviews)
          </a>
        </div>
        <div itemscope itemtype="http://schema.org/Offer">
          <p class="price">
            <del>
              <span class="amount">&#36;15.00</span>
            </del>
            <ins>
              <span class="amount">&#36;12.00</span>
            </ins>
          </p>
          <meta itemprop="content" content="12" />
          <meta itemprop="content" content="USD" />
          <link itemprop="link" href="http://schema.org/InStock" />
        </div>
        <br class="flv_style_25" />
        <div>
          <p>
            Vestibulum eget risus lacinia, semper tellus at, euismod leo.
            Phasellus ut imperdiet dolor. Duis quis mollis elit.
          </p>
        </div>
        <form class="cart" method="post" enctype="multipart/form-data">
          <div class="quantity">
            <input
              type="number"
              step="1"
              min="1"
              name="quantity"
              value="1"
              title="Qty"
              class="input-text qty text"
              size="4"
            />
          </div>
          <input type="hidden" name="add-to-cart" value="70" />
          <button type="submit" class="single_add_to_cart_button button alt">
            Add to cart
          </button>
        </form>
        <div class="product_meta">
          <span class="posted_in">
            Category:{" "}
            <a href="shop.html" rel="tag">
              Posters
            </a>
            .
          </span>
        </div>
        <ProductMeta />
      </div>
    );
  }
}
export default ProductSummary;
