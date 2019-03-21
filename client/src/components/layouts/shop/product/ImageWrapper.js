import React, { Component } from "react";

class ImageWrapper extends Component {
  render() {
    const { products } = this.props;
    console.log(products.pname);

    return (
      /*  <div class="flexslider">
        <ul class="slides">
          <li data-thumb="<%=products.image%>">
            <div class="thumb-image detail_images">
              <img
                src={products.image}
                data-imagezoom="true"
                class="img-responsive"
                alt="Groovy Apparel"
              />
            </div>
          </li>
          <li data-thumb="<%=products.image%>">
            <div class="thumb-image">
              <img
                src={products.image}
                data-imagezoom="true"
                class="img-responsive"
                alt="Groovy Apparel"
              />
            </div>
          </li>
          <li data-thumb="<%=product.image%>">
            <div class="thumb-image">
              <img
                src={products.image}
                data-imagezoom="true"
                class="img-responsive"
                alt="Groovy Apparel"
              />
            </div>
          </li>
        </ul>
      </div> */
      <div class="column one-second product_image_wrapper">
        <div class="image_frame scale-with-grid">
          <span class="onsale">
            <i class="icon-star" />
          </span>
          <div class="images image_wrapper">
            <div
              class="image_frame scale-with-grid"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="image_wrapper">
                <a
                  href="images/poster_2_up.jpg"
                  class="woocommerce-main-image zoom"
                  title=""
                  data-rel="prettyPhoto[product-gallery]"
                >
                  <div class="thumb-image  detail_images" />
                  <img
                    src={products.image}
                    width="500"
                    height="500"
                    data-imagezoom="true"
                    class="scale-with-grid wp-post-image"
                    alt="poster_2_up"
                    title="poster_2_up"
                  />
                </a>
              </div>
            </div>
            <div class="thumbnails columns-3" />
          </div>
        </div>
        <div class="thumbnails columns-3">
          <div class="image_frame scale-with-grid">
            <div class="image_wrapper">
              <a
                href="images/poster_3_up.jpg"
                class="woocommerce-main-image zoom"
                title=""
                data-rel="prettyPhoto[product-gallery]"
              >
                <div class="mask" />
                <img
                  width="200"
                  height="200"
                  src={products.image}
                  class="attachment-shop_thumbnail size-shop_thumbnail"
                  alt="poster_3_up"
                  title="poster_3_up"
                  caption=""
                />
              </a>
            </div>
          </div>
          <div
            class="image_frame scale-with-grid"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="image_wrapper">
              <a
                href="images/poster_1_up.jpg"
                class="woocommerce-main-image zoom"
                title=""
                data-rel="prettyPhoto[product-gallery]"
              >
                <div class="mask" />
                <img
                  width="200"
                  height="200"
                  src={products.image}
                  class="attachment-shop_thumbnail size-shop_thumbnail"
                  alt="poster_1_up"
                  title="poster_1_up"
                  caption=""
                />
              </a>
            </div>
          </div>
          <div
            class="image_frame scale-with-grid"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="image_wrapper">
              <a
                href="images/poster_5_up.jpg"
                class="woocommerce-main-image zoom"
                title=""
                data-rel="prettyPhoto[product-gallery]"
              >
                <div class="mask" />
                <img
                  width="200"
                  height="200"
                  src={products.image}
                  class="attachment-shop_thumbnail size-shop_thumbnail"
                  alt="poster_5_up"
                  title="poster_5_up"
                  caption=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageWrapper;
