import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCartTotalPrice } from "../../../actions/productActions";
import Spinner from "../../common/Spinner";

class CartTotals extends Component {
  componentDidMount() {
    this.props.getCartTotalPrice();
  }
  render() {
    let cartTotlasContents;
    const { cart_total_price, loading } = this.props;
    if (cart_total_price === null || loading) {
      cartTotlasContents = <Spinner />;
    } else if (Object.keys(cart_total_price).length > 0) {
      cartTotlasContents = (
        <table cellspacing="0" class="shop_table shop_table_responsive">
          <tr class="cart-subtotal">
            <th>Subtotal before tax</th>
            <td data-title="Subtotal">
              <span class="woocommerce-Price-amount amount">
                <span class="woocommerce-Price-currencySymbol">&#36;</span>
                715.00
              </span>
            </td>
          </tr>

          <tr class="cart-subtotal">
            <th>Estimated tax to be collected</th>
            <td data-title="Subtotal">
              <span class="woocommerce-Price-amount amount">
                <span class="woocommerce-Price-currencySymbol">&#36;</span>
                715.00
              </span>
            </td>
          </tr>

          <tr class="order-total">
            <th>Total</th>
            <td data-title="Total">
              <strong>
                <span class="woocommerce-Price-amount amount">
                  <span class="woocommerce-Price-currencySymbol">&#36;</span>
                  715.00
                </span>
              </strong>
            </td>
          </tr>
        </table>
      );
      return { cartTotlasContents };
    }
  }
}
CartTotals.protoTypes = {
  getCartTotalPrice: PropTypes.func.isRequired,
  cart_total_price: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  cart_total_price: state.cart_total_price
});
export default connect(
  mapStateToProps,
  { getCartTotalPrice }
)(CartTotals);
