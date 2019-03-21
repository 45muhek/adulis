import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCart } from "../../../actions/productActions";
import CartTableRow from "./CartTableRow";
import Spinner from "../../common/Spinner";
import CartTotals from "./CartTotals";
 
 
class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    let cartContents;
     
    const { cart, loading } = this.props.cart;
    // const { totalPrice } = this.props.cart.cart;
    /*  this.props.cart.forEach(function(product) {
      console.log(product.qty);
    }); */
    if (cart === null || loading|| cart ==='undefined' ) {
      cartContents = <Spinner />;
    }
    else if ( 3   > 0) {
      cartContents = (
        <div class="section_wrapper">
                      <div class="the_content_wrapper">
                        <div class="woocommerce">
                          <form
                            action="http://themes.muffingroup.com/be/theme/cart/"
                            method="post"
                          >
                            <table class="shop_table cart" cellspacing="0">
                              <thead>
                                <tr>
                                  <th class="product-thumbnail">&nbsp;</th>
                                  <th class="product-name">Product</th>
                                  <th class="product-price">Price</th>
                                  <th class="product-quantity">Quantity</th>
                                  <th class="product-subtotal">Total</th>
                                  <th class="product-remove">&nbsp;</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cartContents = cart.map(product => (
                              
                                 <CartTableRow key={product.item._id} product={product} />
                                
                                ))}
                              </tbody>
                            </table>
                          </form>
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
                                          <img
                                            width="500"
                                            height="500"
                                            src="images/T_4_front-500x500.jpg"
                                            class="scale-with-grid wp-post-image"
                                            alt=""
                                          />
                                        </a>
                                        <div class="image_links ">
                                          <a
                                            class="link"
                                            href="product_page.html"
                                          >
                                            <i class="icon-link" />
                                          </a>
                                        </div>
                                      </div>
                                      <a href="product_page.html">
                                        <span class="product-loading-icon added-cart" />
                                      </a>
                                    </div>
                                    <div class="desc">
                                      <h4>
                                        <a href="product_page.html">
                                          Ship Your Idea
                                        </a>
                                      </h4>
                                      <div
                                        class="star-rating"
                                        title="Rated 4.33 out of 5"
                                      >
                                        <span style={{ width: "86.6" + "%" }}>
                                          <strong class="rating">4.33</strong>{" "}
                                          out of 5
                                        </span>
                                      </div>
                                      <span class="price">
                                        <span class="woocommerce-Price-amount amount">
                                          <span class="woocommerce-Price-currencySymbol">
                                            &#36;
                                          </span>
                                          20.00
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                  <li class="isotope-item product type-product has-post-thumbnail product_cat-clothing product_cat-hoodies last instock sale shipping-taxable purchasable product-type-variable has-children">
                                    <div
                                      class="image_frame scale-with-grid product-loop-thumb"
                                      ontouchstart="this.classList.toggle('hover');"
                                    >
                                      <div class="image_wrapper">
                                        <a href="product_page.html">
                                          <div class="mask" />
                                          <img
                                            width="500"
                                            height="500"
                                            src="images/hoodie_7_front-500x500.jpg"
                                            class="scale-with-grid wp-post-image"
                                            alt=""
                                          />
                                        </a>
                                        <div class="image_links ">
                                          <a
                                            class="link"
                                            href="product_page.html"
                                          >
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
                                        <a href="product_page.html">
                                          Ship Your Idea
                                        </a>
                                      </h4>
                                      <div
                                        class="star-rating"
                                        title="Rated 4 out of 5"
                                      >
                                        <span style={{ width: "80" + "%" }}>
                                          <strong class="rating">4</strong> out
                                          of 5
                                        </span>
                                      </div>
                                      <span class="price">
                                        <del>
                                          <span class="woocommerce-Price-amount amount">
                                            <span class="woocommerce-Price-currencySymbol">
                                              &#36;
                                            </span>
                                            35.00
                                          </span>
                                        </del>{" "}
                                        <ins>
                                          <span class="woocommerce-Price-amount amount">
                                            <span class="woocommerce-Price-currencySymbol">
                                              &#36;
                                            </span>
                                            30.00
                                          </span>
                                          &ndash;
                                          <span class="woocommerce-Price-amount amount">
                                            <span class="woocommerce-Price-currencySymbol">
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
                            <div class="cart_totals">
                              <h2>Cart Totals</h2>
                                < CartTotals />
                               <div class="button button_large button_theme button_js">
                                <a
                                  class="button button_large button_theme button_js"
                                  href="#"
                                  target="_blank"
                                >
                                  <span class="button_label">
                                    {" "}
                                    Proceed to Checkout
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      )
    }
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
Cart.protoTypes = {
  getCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps,
  { getCart }
)(Cart);
