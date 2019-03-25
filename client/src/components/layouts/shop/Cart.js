import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import CartTableRow from "./CartTableRow";
import Spinner from "../../common/Spinner";
<<<<<<< HEAD
import CartTotals from "./CartTotals";
=======

import { getCart, getCartTotalPrice } from "../../../actions/cartActions";
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
    this.props.getCartTotalPrice();
  }

  render() {
    let cartContents;
<<<<<<< HEAD

    const { cart, loading } = this.props.cart;
    // const { totalPrice } = this.props.cart.cart;
    /*  this.props.cart.forEach(function(product) {
      console.log(product.qty);
    }); */
    if (cart === null || loading || cart === "undefined") {
      cartContents = <Spinner />;
    } else if (3 > 0) {
      cartContents = (
        <div class="section_wrapper">
          <div class="the_content_wrapper">
            <div class="woocommerce">
=======
    const { cart, loading } = this.props.cart;
    const { cart_total_price } = this.props.cart;

    let productsContent;
    if (cart === null || loading) {
      cartContents = <Spinner />;
    } else {
      cartContents = (
        <div className="section_wrapper">
          <div className="the_content_wrapper">
            <div className="woocommerce">
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
              <form
                action="http://themes.muffingroup.com/be/theme/cart/"
                method="post"
              >
<<<<<<< HEAD
                <table class="shop_table cart" cellspacing="0">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">&nbsp;</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-subtotal">Total</th>
                      <th class="product-remove">&nbsp;</th>
=======
                <table className="shop_table cart" cellSpacing="0">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">&nbsp;</th>
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (cartContents = cart.map(product => (
                        <CartTableRow
                          key={product.item._id}
                          product={product}
                        />
                      )))
                    }
                  </tbody>
                </table>
              </form>
<<<<<<< HEAD
              <div class="cart-collaterals">
                <div class="cross-sells">
                  <h2>You may be interested in&hellip;</h2>
                  <div class="products_wrapper isotope_wrapper">
                    <ul class="products ">
                      <li class="isotope-item product type-product has-post-thumbnail product_cat-clothing product_cat-t-shirts first product-type-variable has-default-attributes has-children">
                        <div
                          class="image_frame scale-with-grid product-loop-thumb"
                          ontouchstart="this.classList.toggle('hover');"
                        >
                          <div class="image_wrapper">
                            <a href="product_page.html">
                              <div class="mask" />
=======
              <div className="cart-collaterals">
                <div className="cross-sells">
                  <h2>You may be interested in&hellip;</h2>
                  <div className="products_wrapper isotope_wrapper">
                    <ul className="products ">
                      <li className="isotope-item product type-product has-post-thumbnail product_cat-clothing product_cat-t-shirts first product-type-variable has-default-attributes has-children">
                        <div className="image_frame scale-with-grid product-loop-thumb">
                          <div className="image_wrapper">
                            <a href="product_page.html">
                              <div className="mask" />
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                              <img
                                width="500"
                                height="500"
                                src="images/T_4_front-500x500.jpg"
<<<<<<< HEAD
                                class="scale-with-grid wp-post-image"
                                alt=""
                              />
                            </a>
                            <div class="image_links ">
                              <a class="link" href="product_page.html">
                                <i class="icon-link" />
=======
                                className="scale-with-grid wp-post-image"
                                alt=""
                              />
                            </a>
                            <div className="image_links ">
                              <a className="link" href="product_page.html">
                                <i className="icon-link" />
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                              </a>
                            </div>
                          </div>
                          <a href="product_page.html">
<<<<<<< HEAD
                            <span class="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div class="desc">
                          <h4>
                            <a href="product_page.html">Ship Your Idea</a>
                          </h4>
                          <div class="star-rating" title="Rated 4.33 out of 5">
                            <span style={{ width: "86.6" + "%" }}>
                              <strong class="rating">4.33</strong> out of 5
                            </span>
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <span class="woocommerce-Price-currencySymbol">
=======
                            <span className="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div className="desc">
                          <h4>
                            <a href="product_page.html">Ship Your Idea</a>
                          </h4>
                          <div
                            className="star-rating"
                            title="Rated 4.33 out of 5"
                          >
                            <span style={{ width: "86.6" + "%" }}>
                              <strong className="rating">4.33</strong> out of 5
                            </span>
                          </div>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                                &#36;
                              </span>
                              20.00
                            </span>
                          </span>
                        </div>
                      </li>
<<<<<<< HEAD
                      <li class="isotope-item product type-product has-post-thumbnail product_cat-clothing product_cat-hoodies last instock sale shipping-taxable purchasable product-type-variable has-children">
                        <div
                          class="image_frame scale-with-grid product-loop-thumb"
                          ontouchstart="this.classList.toggle('hover');"
                        >
                          <div class="image_wrapper">
                            <a href="product_page.html">
                              <div class="mask" />
=======
                      <li className="isotope-item product type-product has-post-thumbnail product_cat-clothing product_cat-hoodies last instock sale shipping-taxable purchasable product-type-variable has-children">
                        <div className="image_frame scale-with-grid product-loop-thumb">
                          <div className="image_wrapper">
                            <a href="product_page.html">
                              <div className="mask" />
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                              <img
                                width="500"
                                height="500"
                                src="images/hoodie_7_front-500x500.jpg"
<<<<<<< HEAD
                                class="scale-with-grid wp-post-image"
                                alt=""
                              />
                            </a>
                            <div class="image_links ">
                              <a class="link" href="product_page.html">
                                <i class="icon-link" />
                              </a>
                            </div>
                          </div>
                          <span class="onsale">
                            <i class="icon-star" />
                          </span>
                          <a href="product_page.html">
                            <span class="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div class="desc">
                          <h4>
                            <a href="product_page.html">Ship Your Idea</a>
                          </h4>
                          <div class="star-rating" title="Rated 4 out of 5">
                            <span style={{ width: "80" + "%" }}>
                              <strong class="rating">4</strong> out of 5
                            </span>
                          </div>
                          <span class="price">
                            <del>
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
=======
                                className="scale-with-grid wp-post-image"
                                alt=""
                              />
                            </a>
                            <div className="image_links ">
                              <a className="link" href="product_page.html">
                                <i className="icon-link" />
                              </a>
                            </div>
                          </div>
                          <span className="onsale">
                            <i className="icon-star" />
                          </span>
                          <a href="product_page.html">
                            <span className="product-loading-icon added-cart" />
                          </a>
                        </div>
                        <div className="desc">
                          <h4>
                            <a href="product_page.html">Ship Your Idea</a>
                          </h4>
                          <div className="star-rating" title="Rated 4 out of 5">
                            <span style={{ width: "80" + "%" }}>
                              <strong className="rating">4</strong> out of 5
                            </span>
                          </div>
                          <span className="price">
                            <del>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                                  &#36;
                                </span>
                                35.00
                              </span>
                            </del>{" "}
                            <ins>
<<<<<<< HEAD
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
=======
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                                  &#36;
                                </span>
                                30.00
                              </span>
                              &ndash;
<<<<<<< HEAD
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
=======
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                                  &#36;
                                </span>
                                35.00
                              </span>
                            </ins>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
<<<<<<< HEAD
                <div class="cart_totals">
                  <h2>Cart Totals</h2>
                  <CartTotals />
                  <div class="button button_large button_theme button_js">
                    <a
                      class="button button_large button_theme button_js"
                      href="#"
                      target="_blank"
                    >
                      <span class="button_label"> Proceed to Checkout</span>
=======
                <div className="cart_totals">
                  <h2>Cart Totals</h2>
                  <table
                    cellSpacing="0"
                    class="shop_table shop_table_responsive"
                  >
                    <tr class="cart-subtotal">
                      <th>Subtotal before tax</th>
                      <td data-title="Subtotal">
                        <span class="woocommerce-Price-amount amount">
                          {cart_total_price}{" "}
                          <span class="woocommerce-Price-currencySymbol" />
                          ETB
                        </span>
                      </td>
                    </tr>

                    <tr class="cart-subtotal">
                      <th>Estimated tax to be collected</th>
                      <td data-title="Subtotal">
                        <span class="woocommerce-Price-amount amount">
                          0{" "}
                          <span class="woocommerce-Price-currencySymbol">
                            ETB
                          </span>
                        </span>
                      </td>
                    </tr>

                    <tr class="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong>
                          <span class="woocommerce-Price-amount amount">
                            {cart_total_price}{" "}
                            <span class="woocommerce-Price-currencySymbol">
                              ETB
                            </span>
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </table>

                  <div className="button button_large button_theme button_js">
                    <a
                      className="button button_large button_theme button_js"
                      href="#"
                      target="_blank"
                    >
                      <span className="button_label"> Proceed to Checkout</span>
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
<<<<<<< HEAD
    return (
      <div>
        <div class="column one column_column" />
        <div id="Content">
          <div class="content_wrapper clearfix">
            <div class="sections_group">
              <div class="entry-content">
                <div class="section the_content has_content">
                  {/*  */}
                  {cartContents}
                </div>
                <div class="section section-page-footer">
                  <div class="section_wrapper clearfix">
                    <div class="column one page-pager" />
=======

    return (
      <div>
        <div className="column one column_column" />
        <div id="Content">
          <div className="content_wrapper clearfix">
            <div className="sections_group">
              <div className="entry-content">
                <div className="section the_content has_content">
                  {/*  */}
                  {cartContents}
                </div>
                <div className="section section-page-footer">
                  <div className="section_wrapper clearfix">
                    <div className="column one page-pager" />
>>>>>>> 8abaf74808f16be5f1cc18197d0faa9d1358a485
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  getCartTotalPrice: PropTypes.func.isRequired
};
const mapStaeToProps = state => ({
  cart: state.cart,
  cart_total_price: state.cart_total_price
});
export default connect(
  mapStaeToProps,
  { getCart, getCartTotalPrice }
)(Cart);
