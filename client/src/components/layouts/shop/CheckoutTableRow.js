import React, { Component } from "react";

export default class CheckoutTableRow extends Component {
  render() {
    const { product } = this.props;
    return (
      <tr class="cart_item">
        <td class="product-name">
          {" "}
          {product.item.pname}&nbsp;{" "}
          <strong class="product-quantity">&times; {product.qty}</strong>
        </td>
        <td class="product-total">
          <span class="woocommerce-Price-amount amount">
            {product.price}
            <span class="woocommerce-Price-currencySymbol"> Birr</span>
          </span>
        </td>
      </tr>
    );
  }
}
