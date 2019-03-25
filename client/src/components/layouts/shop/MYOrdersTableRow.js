import React, { Component } from "react";

export default class MYOrdersTableRow extends Component {
  render() {
    const { order } = this.props;

    return (
      <tr class="cart_item">
        <td class="product-name">
          {" "}
          &nbsp; <strong class="product-quantity"> {order.name}</strong>
        </td>
        <td class="product-total">
          <span class="woocommerce-Price-amount amount">
            <span class="woocommerce-Price-currencySymbol">
              {" "}
              {order.deliveryadress}
            </span>
          </span>
        </td>
        <td>{order.phone}</td>
        <td>{order.deliverydate} </td>
        <td>{order.cart.totalPrice} Birr</td>

        <td>
          <span class="highlight" style={{ background: "#ffbf00" }}>
            <strong> {order.status}</strong>
          </span>
        </td>
      </tr>
    );
  }
}
