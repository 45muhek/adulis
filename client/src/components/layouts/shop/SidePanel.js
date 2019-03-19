import React, { Component } from "react";

export default class SidePanel extends Component {
  render() {
    return (
      <div>
        <div class="four columns">
          <div class="widget-area clearfix ">
            <aside class="widget woocommerce widget_products" class="mrb-40">
              <h3>My cart</h3>
              <ul class="product_list_widget">
                <li>
                  <a href="product-page.html" title="Woo Logo">
                    {" "}
                    <img
                      width="200"
                      height="200"
                      src="images/poster_5_up-200x200.jpg"
                      class="attachment-shop_thumbnail wp-post-image"
                      alt="poster_5_up"
                    />{" "}
                    Woo Logo{" "}
                  </a>
                  <span class="amount">&#36;15.00</span>
                </li>
                <li>
                  <a href="product-page.html" title="Premium Quality">
                    {" "}
                    <img
                      width="200"
                      height="200"
                      src="images/poster_3_up-200x200.jpg"
                      class="attachment-shop_thumbnail wp-post-image"
                      alt="poster_3_up"
                    />{" "}
                    Premium Quality{" "}
                  </a>
                  <del>
                    <span class="amount">&#36;15.00</span>
                  </del>
                  <ins>
                    <span class="amount">&#36;12.00</span>
                  </ins>
                </li>
                <li>
                  <a href="product-page.html" title="Flying Ninja">
                    {" "}
                    <img
                      width="200"
                      height="200"
                      src="images/poster_2_up-200x200.jpg"
                      class="attachment-shop_thumbnail wp-post-image"
                      alt="poster_2_up"
                    />{" "}
                    Flying Ninja{" "}
                  </a>
                  <del>
                    <span class="amount">&#36;15.00</span>
                  </del>
                  <ins>
                    <span class="amount">&#36;12.00</span>
                  </ins>
                </li>
                <li>
                  <a href="product-page.html" title="Ship Your Idea">
                    {" "}
                    <img
                      width="200"
                      height="200"
                      src="images/poster_1_up-200x200.jpg"
                      class="attachment-shop_thumbnail wp-post-image"
                      alt="poster_1_up"
                    />{" "}
                    Ship Your Idea{" "}
                  </a>
                  <span class="amount">&#36;15.00</span>
                </li>
                <li>
                  <a href="product-page.html" title="Woo Logo">
                    {" "}
                    <img
                      width="200"
                      height="200"
                      src="images/hoodie_6_front-200x200.jpg"
                      class="attachment-shop_thumbnail wp-post-image"
                      alt="hoodie_6_front"
                    />{" "}
                    Woo Logo{" "}
                  </a>
                  <span class="amount">&#36;35.00</span>
                </li>
              </ul>
              <div>
                <div class="column one-fourth column_column" />
                <a class="mfn-link mfn-link-5 " href="#" data-hover="Checkout">
                  <span data-hover="Aliquam">Proceed To Checkout </span>
                </a>
                <div class="column one-fourth column_column" />
              </div>
            </aside>

            <aside
              id="woocommerce_layered_nav-2"
              class="widget woocommerce widget_layered_nav"
            >
              <h3>Filter by</h3>
              <ul>
                <li>
                  <a href="#">Black</a>
                  <small class="count">23</small>
                </li>
                <li>
                  <a href="#">White</a>
                  <small class="count">32</small>
                </li>
                <li>
                  <a href="#">Phone</a>
                  <small class="count">45</small>
                </li>
                <li>
                  <a href="#">Electronics</a>
                  <small class="count">41</small>
                </li>
              </ul>
            </aside>

            <aside class="widget woocommerce widget_product_categories">
              <h3>Product Categories</h3>
              <ul class="product-categories">
                <li class="cat-item cat-item-35">
                  <a href="shop.html">Clothing</a>
                </li>
                <li class="cat-item cat-item-36">
                  <a href="shop.html">Shoes</a>
                </li>
                <li class="cat-item cat-item-45">
                  <a href="shop.html">Electronics</a>
                </li>
                <li class="cat-item cat-item-41">
                  <a href="shop.html">Bedroom Solutions</a>
                </li>
                <li class="cat-item cat-item-41">
                  <a href="shop.html">Vehicles</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}
