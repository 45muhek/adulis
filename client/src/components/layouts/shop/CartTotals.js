import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CartTableRow from "./CartTableRow";
import Spinner from "../../common/Spinner";

import { getCartTotalPrice } from "../../../actions/cartActions";

class CartTotals extends Component {
  componentDidMount() {
    this.props.getCartTotalPrice();
  }
  render() {
    return <div />;
  }
}
CartTotals.propTypes = {
  getCartTotalPrice: PropTypes.func.isRequired
};
const mapStaeToProps = state => ({
  cart_total_price: state.cart_total_price
});
export default connect(
  mapStaeToProps,
  { getCartTotalPrice }
)(CartTotals);
