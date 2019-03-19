import React, { Component } from "react";
import SidePanel from "./SidePanel";
import BannerSlider from "./BannerSlider";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner";
import { getAllProducts } from "../../../actions/productActions";

class ShopMain extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const { products, loading } = this.props.products;

    let productsContent;
    if (products === null || loading) {
      productsContent = <Spinner />;
    } else {
      //CHECK IF PRODUCTS EXIST

      if (Object.keys(products).length > 0) {
        productsContent = <h4> do display profile</h4>;
      } else {
        productsContent = (
          <div>
            {" "}
            <h1> no products</h1>
          </div>
        );
      }
      /*  productsContent = (
        <div class="sections_group">
          <div class="section">
            <div class="section_wrapper clearfix">
              <div class="items_group clearfix">
                <div class="column one woocommerce-content">
                  <div class="shop-filters">
                    <p class="woocommerce-result-count">
                      Showing 1–12 of 15 results
                    </p>
                    <form class="woocommerce-ordering" method="get">
                      <select name="orderby" class="orderby">
                        <option value="menu_order" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div>
                  <div class="products_wrapper isotope_wrapper">
                    <ul class="products grid">
                      <li class="product isotope-item sale">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/poster_2_up-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="poster_2_up"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="70"
                                class="add_to_cart_button product_type_simple"
                              >
                                <i class="icon-basket" />
                              </a>
                              <a class="link" href="product-page.html">
                                <i class="icon-link" />
                              </a>
                            </div>
                          </div>
                          <span class="onsale">
                            <i class="icon-star" />
                          </span>
                          <a href="product-page.html">
                            <span class="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div class="desc">
                          <h4>
                            <a href="product-page.html">Flying Ninja</a>
                          </h4>

                          <div class="star-rating" title="Rated 4.00 out of 5">
                            <span style={{ width: "80" + "%" }}>
                              <strong class="rating">4.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <del>
                                <span class="amount">&#36;15.00</span>
                              </del>{" "}
                              <ins>
                                <span class="amount">&#36;12000.00</span>
                              </ins>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-284 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-t-shirts outofstock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/T_7_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="T_7_front"
                              />{" "}
                            </a>
                            <div class="image_links ">
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
                            <a href="product-page.html">Happy Ninja</a>
                          </h4>
                          <div class="star-rating" title="Rated 5.00 out of 5">
                            <span style={{ width: "100" + "%" }}>
                              <strong class="rating">5.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;18.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
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
                            <div class="image_links ">
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
                            <a href="product-page.html">Happy Ninja 2</a>
                          </h4>
                          <div class="star-rating" title="Rated 3.00 out of 5">
                            <span style={{ width: "60" + "%" }}>
                              <strong class="rating">3.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;35.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-282 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-t-shirts instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/T_5_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="T_5_front"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="282"
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
                            <a href="product-page.html">Ninja Silhouette</a>
                          </h4>
                          <div class="star-rating" title="Rated 5.00 out of 5">
                            <span style={{ width: "100" + "%" }}>
                              <strong class="rating">5.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;20.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-289 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-hoodies instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/hoodie_5_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="hoodie_5_front"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="289"
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
                            <a href="product-page.html">Ninja Silhouette</a>
                          </h4>
                          <div class="star-rating" title="Rated 4.00 out of 5">
                            <span style={{ width: "80" + "%" }}>
                              <strong class="rating">4.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;35.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-287 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-hoodies instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/hoodie_3_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="hoodie_3_front"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="287"
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
                            <a href="product-page.html">Patient Ninja</a>
                          </h4>
                          <div class="star-rating" title="Rated 4.67 out of 5">
                            <span style={{ width: "93.4" + "%" }}>
                              <strong class="rating">4.67</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;35.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-280 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-t-shirts instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/T_2_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="T_2_front"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="280"
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
                            <a href="product-page.html">Premium Quality</a>
                          </h4>
                          <div class="star-rating" title="Rated 4.50 out of 5">
                            <span style={{ width: "90" + "%" }}>
                              <strong class="rating">4.50</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;20.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-291 product type-product has-post-thumbnail isotope-item sale shipping-taxable purchasable product-type-simple product-cat-posters instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/poster_3_up-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="poster_3_up"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="291"
                                class="add_to_cart_button product_type_simple"
                              >
                                <i class="icon-basket" />
                              </a>
                              <a class="link" href="product-page.html">
                                <i class="icon-link" />
                              </a>
                            </div>
                          </div>
                          <span class="onsale">
                            <i class="icon-star" />
                          </span>
                          <a href="product-page.html">
                            <span class="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div class="desc">
                          <h4>
                            <a href="product-page.html">Premium Quality</a>
                          </h4>
                          <div class="star-rating" title="Rated 2.00 out of 5">
                            <span style={{ width: "40" + "%" }}>
                              <strong class="rating">2.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <del>
                                <span class="amount">&#36;15.00</span>
                              </del>{" "}
                              <ins>
                                <span class="amount">&#36;12.00</span>
                              </ins>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-281 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-variable product-cat-clothing product-cat-t-shirts instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/T_4_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="T_4_front"
                              />{" "}
                            </a>
                            <div class="image_links ">
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
                          <div class="star-rating" title="Rated 4.33 out of 5">
                            <span style={{ width: "86.6" + "%" }}>
                              <strong class="rating">4.33</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;20.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-285 product type-product has-post-thumbnail isotope-item sale shipping-taxable purchasable product-type-variable product-cat-clothing product-cat-hoodies instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/hoodie_7_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="hoodie_7_front"
                              />{" "}
                            </a>
                            <div class="image_links ">
                              <a class="link" href="product-page.html">
                                <i class="icon-link" />
                              </a>
                            </div>
                          </div>
                          <span class="onsale">
                            <i class="icon-star" />
                          </span>
                          <a href="product-page.html">
                            <span class="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div class="desc">
                          <h4>
                            <a href="product-page.html">Ship Your Idea</a>
                          </h4>
                          <div class="star-rating" title="Rated 4.00 out of 5">
                            <span style={{ width: "80" + "%" }}>
                              <strong class="rating">4.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <del>
                                <span class="amount">&#36;35.00</span>
                              </del>{" "}
                              <ins>
                                <span class="amount">&#36;30.00</span>
                                &ndash;
                                <span class="amount">&#36;35.00</span>
                              </ins>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
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
                                href="#"
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
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;15.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="post-1171 product type-product has-post-thumbnail isotope-item shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-hoodies instock">
                        <div class="image_frame scale-with-grid product-loop-thumb">
                          <div class="image_wrapper">
                            <a href="product-page.html">
                              <div class="mask" />{" "}
                              <img
                                width="500"
                                height="500"
                                src="images/hoodie_6_front-500x500.jpg"
                                class="scale-with-grid wp-post-image"
                                alt="hoodie_6_front"
                              />{" "}
                            </a>
                            <div class="image_links double">
                              <a
                                href="#"
                                rel="nofollow"
                                data-product_id="1171"
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
                          <div class="star-rating" title="Rated 4.00 out of 5">
                            <span style={{ width: "80" + "%" }}>
                              <strong class="rating">4.00</strong> out of 5
                            </span>
                          </div>
                          <div class="column one-fourth column_column">
                            <span class="price">
                              <span class="amount">&#36;35.00</span>
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
                              <span class="button_label cart_btn">
                                Add to cart
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="column one pager_wrapper">
                    <div class="pager">
                      <div class="pages">
                        <span class="page-numbers current">1</span>
                        <a class="page-numbers" href="#">
                          2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ); */
    }
    return (
      <div>
        {/* Banner slider missing */}
        <div
          class="archive-product with_aside aside_right woocommerce
       woocommerce-page color-blue layout-full-width header-modern sticky-header sticky-white subheader-title-left"
        >
          <div id="Content">
            <div class="content_wrapper clearfix">
              {productsContent}
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ShopMain.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStaeToProps = state => ({
  products: state.products,
  auth: state.auth
});
export default connect(
  mapStaeToProps,
  { getAllProducts }
)(ShopMain);
