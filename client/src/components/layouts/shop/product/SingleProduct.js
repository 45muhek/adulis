import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SidePanel from "../SidePanel";
import ImageWrapper from "./ImageWrapper";
import ProductSummary from "./ProductSummary";
import RealatedProducts from "./RealatedProducts";
import { getProductById } from "../../../../actions/productActions";
import Spinner from "../../../common/Spinner";

class SingleProduct extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getProductById(this.props.match.params.id);
    }
  }

  render() {
    console.log(this.props.products);
    const { products, loading } = this.props.products;

    let productContent;

    if (products === null || loading) {
      productContent = <Spinner />;
    } else {
      productContent = (
        <div class="column one woocommerce-content">
          <div
            itemscope
            itemtype="http://schema.org/Product"
            id="product-70"
            class="post-70 product type-product has-post-thumbnail sale shipping-taxable purchasable product-type-simple product-cat-posters instock"
          >
            <div class="post-nav">
              <a class="fixed-nav fixed-nav-prev " href="product-page.html">
                <span class="arrow">
                  <i class="icon-left-open-big" />
                </span>
                <div class="photo">
                  <img
                    width="80"
                    height="80"
                    src="images/poster_1_up-80x80.jpg"
                    class="attachment-blog-navi wp-post-image"
                    alt="poster_1_up"
                  />
                </div>
                <div class="desc">
                  <h6>Ship Your Idea</h6>
                  <span class="date">
                    <i class="icon-clock" />
                    June 7, 2013
                  </span>
                </div>
              </a>
              <a class="fixed-nav fixed-nav-next " href="product-page.html">
                <span class="arrow">
                  <i class="icon-right-open-big" />
                </span>
                <div class="photo">
                  <img
                    width="80"
                    height="80"
                    src="images/poster_3_up-80x80.jpg"
                    class="attachment-blog-navi wp-post-image"
                    alt="poster_3_up"
                  />
                </div>
                <div class="desc">
                  <h6>Premium Quality</h6>
                  <span class="date">
                    <i class="icon-clock" />
                    June 7, 2013
                  </span>
                </div>
              </a>
              <ul class="next-prev-nav">
                <li class="prev">
                  <a class="button button_js" href="product-page.html">
                    <span class="button_icon">
                      <i class="icon-left-open" />
                    </span>
                  </a>
                </li>
                <li class="next">
                  <a class="button button_js" href="product-page.html">
                    <span class="button_icon">
                      <i class="icon-right-open" />
                    </span>
                  </a>
                </li>
              </ul>
              <a class="list-nav" href="shop.html">
                <i class="icon-layout" />
                Show all
              </a>
            </div>
            <div class="product_wrapper clearfix">
              <ImageWrapper products={products} />
              <ProductSummary />
            </div>
            <RealatedProducts />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div class="woocommerce woocommerce-page with_aside aside_right color-custom style-default layout-full-width header-plain header-fw minimalist-header sticky-header sticky-white ab-hide subheader-both-center menuo-last menuo-right mm-vertical mobile-tb-hide mobile-mini-mr-ll">
          <div id="Content">
            <div class="content_wrapper clearfix">
              <div class="sections_group">
                <div class="section">
                  <div class="section_wrapper clearfix">
                    <div class="items_group clearfix"> {productContent}</div>
                  </div>
                </div>
              </div>
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SingleProduct.propTypes = {
  getProductById: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  products: state.products
});
export default connect(
  mapStateToProps,
  { getProductById }
)(SingleProduct);
