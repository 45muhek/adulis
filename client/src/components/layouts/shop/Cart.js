import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div id="Content">
          <div class="content_wrapper clearfix">
            <div class="sections_group">
              <div class="entry-content">
                <div class="section the_content has_content">
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
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/poster_2_up-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Flying Ninja</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    12.00
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
                                      value="4"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    48.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/T_7_front-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Happy Ninja</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    18.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[556f391937dfd4398cbac35e050a2177][qty]"
                                      value="2"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    36.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/hoodie_4_front-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Happy Ninja</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    35.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[d82c8d1619ad8176d665453cfb2e55f0][qty]"
                                      value="3"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    105.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/T_5_front-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">
                                    Ninja Silhouette
                                  </a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    20.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[08d98638c6fcd194a4b1e6992063e944][qty]"
                                      value="2"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    40.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/hoodie_3_front-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Patient Ninja</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    35.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[109a0ca3bc27f3e96597370d5c8cf03d][qty]"
                                      value="3"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    105.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/hoodie_5_front-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">
                                    Ninja Silhouette
                                  </a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    35.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[7f5d04d189dfb634e6a85bb9d9adf21e][qty]"
                                      value="4"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    140.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/T_2_front-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">
                                    Premium Quality
                                  </a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    20.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[1595af6435015c77a7149e92a551338e][qty]"
                                      value="4"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    80.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/poster_3_up-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">
                                    Premium Quality
                                  </a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    12.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[d2ddea18f00665ce8623e36bd4e3c7c5][qty]"
                                      value="3"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    36.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/poster_1_up-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Ship Your Idea</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    15.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[07a96b1f61097ccb54be14d6a47439b0][qty]"
                                      value="3"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    45.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/cd_1_angle-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Woo Album #1</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    9.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[0cb929eae7a499e50248a3a78f7acfc7][qty]"
                                      value="4"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    36.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/poster_5_up-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Woo Logo</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    15.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[e4bb4c5173c2ce17fd8fcd40041c068f][qty]"
                                      value="1"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    15.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/cd_2_angle-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Woo Album #2</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    9.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[8a0e1141fd37fa5b98d5bb769ba1a7cc][qty]"
                                      value="2"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    18.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/cd_6_angle-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Woo Single #2</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    2.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[e5841df2166dd424a57127423d276bbe][qty]"
                                      value="1"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    2.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr class="cart_item">
                                <td class="product-thumbnail">
                                  <a href="product_page.html">
                                    <img
                                      width="200"
                                      height="200"
                                      src="images/cd_5_angle-200x200.jpg"
                                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td class="product-name">
                                  <a href="product_page.html">Woo Album #4</a>
                                </td>
                                <td class="product-price">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    9.00
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="quantity">
                                    <input
                                      type="number"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="cart[afd4836712c5e77550897e25711e1d96][qty]"
                                      value="1"
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
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    9.00
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a
                                    href="#"
                                    class="button button_js remove"
                                    title="Remove this item"
                                  >
                                    <span class="button_icon">&times;</span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="6" class="actions">
                                  <div class="coupon">
                                    <label for="coupon_code">Coupon:</label>
                                    <input
                                      type="text"
                                      name="coupon_code"
                                      class="input-text"
                                      id="coupon_code"
                                      value=""
                                      placeholder="Coupon code"
                                    />
                                    <input
                                      type="submit"
                                      class="button"
                                      name="apply_coupon"
                                      value="Apply Coupon"
                                    />
                                  </div>
                                  <input
                                    type="submit"
                                    class="button"
                                    name="update_cart"
                                    value="Update Cart"
                                  />
                                  <input
                                    type="hidden"
                                    id="_wpnonce"
                                    name="_wpnonce"
                                    value="2914ef1620"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/be/theme/cart/"
                                  />
                                </td>
                              </tr>
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
                                        <strong class="rating">4.33</strong> out
                                        of 5
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
                                        <strong class="rating">4</strong> out of
                                        5
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
                            <table
                              cellspacing="0"
                              class="shop_table shop_table_responsive"
                            >
                              <tr class="cart-subtotal">
                                <th>Subtotal</th>
                                <td data-title="Subtotal">
                                  <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    715.00
                                  </span>
                                </td>
                              </tr>
                              <tr class="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span class="woocommerce-Price-amount amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        &#36;
                                      </span>
                                      715.00
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </table>
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
