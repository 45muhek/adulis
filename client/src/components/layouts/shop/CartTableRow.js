import React, { Component } from "react";

export default class CartTableRow extends Component {
  render() {
    const { product } = this.props;

    return (
      <tr class="cart_item">
        <td class="product-thumbnail">
          <a href="product_page.html">
            <img
              width="200"
              height="200"
              src={product.item.image}
              class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
              alt=""
            />
          </a>
        </td>
        <td class="product-name">
          <a href="product_page.html">{product.item.pname}</a>
        </td>
        <td class="product-price">
          <span class="woocommerce-Price-amount amount">
            {product.item.price}
            <span class="woocommerce-Price-currencySymbol"> Birr</span>
          </span>
        </td>
        <td class="product-quantity">
          <div class="quantity">
            <input
              type="number"
              step="1"
              min="0"
              max=""
              name="cart[c06d06da9666a219db15cf575aff2824][qty]"
              value={product.qty}
              title="Qty"
              class="input-text qty text"
              size="4"
              pattern="[0-9]*"
              inputmode="numeric"
            />
          </div>
        </td>
        <td class="product-subtotal">
          <span class="woocommerce-Price-amount amount">
            <span class="woocommerce-Price-currencySymbol">&#36;</span>
            {product.price}
          </span>
        </td>
        <td class="product-remove">
          <a href="#" class="button button_js remove" title="Remove this item">
            <span class="button_icon">&times;</span>
          </a>
        </td>
      </tr>
    );
  }
}
