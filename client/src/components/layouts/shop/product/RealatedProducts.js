import React, { Component } from "react";

class RealatedProducts extends Component {
  render() {
    return (
      <div class="related products">
        <h2>Related Products</h2>
        <div class="products_wrapper isotope_wrapper">
          <ul class="products ">
            <li class="post-296 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-posters instock">
              <div class="image_frame scale-with-grid product-loop-thumb">
                <div class="image_wrapper">
                  <a href="product-page.html">
                    <div class="mask" />{" "}
                    <img
                      width="500"
                      height="500"
                      src="images/poster_5_up-500x500.jpg"
                      class="scale-with-grid wp-post-image"
                      alt="poster_5_up"
                    />{" "}
                  </a>
                  <div class="image_links double">
                    <a
                      href="product-page.html"
                      rel="nofollow"
                      data-product_id="296"
                      class="add_to_cart_button product_type_simple"
                    >
                      <i class="icon-basket" />
                    </a>
                    <a class="link" href="product-page.html">
                      <i class="icon-link" />
                    </a>
                  </div>
                </div>
                <a href="product-page.html">
                  <span class="product-loading-icon added-cart" />
                </a>
              </div>
              <div class="desc">
                <h4>
                  <a href="product-page.html">Woo Logo</a>
                </h4>
                <span class="price">
                  <span class="amount">&#36;15.00</span>
                </span>
              </div>
            </li>
            <li class="post-290 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-posters instock">
              <div class="image_frame scale-with-grid product-loop-thumb">
                <div class="image_wrapper">
                  <a href="product-page.html">
                    <div class="mask" />{" "}
                    <img
                      width="500"
                      height="500"
                      src="images/poster_1_up-500x500.jpg"
                      class="scale-with-grid wp-post-image"
                      alt="poster_1_up"
                    />{" "}
                  </a>
                  <div class="image_links double">
                    <a
                      href="product-page.html"
                      rel="nofollow"
                      data-product_id="290"
                      class="add_to_cart_button product_type_simple"
                    >
                      <i class="icon-basket" />
                    </a>
                    <a class="link" href="product-page.html">
                      <i class="icon-link" />
                    </a>
                  </div>
                </div>
                <a href="product-page.html">
                  <span class="product-loading-icon added-cart" />
                </a>
              </div>
              <div class="desc">
                <h4>
                  <a href="product-page.html">Ship Your Idea</a>
                </h4>
                <span class="price">
                  <span class="amount">&#36;15.00</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RealatedProducts;
