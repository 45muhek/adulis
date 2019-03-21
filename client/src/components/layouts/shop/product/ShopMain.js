import React, { Component } from "react";
import SidePanel from "../SidePanel";
import BannerSlider from "../BannerSlider";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../../common/Spinner";
import { getAllProducts } from "../../../../actions/productActions";
import ProductItem from "./ProductItem";

class ShopMain extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const { products, loading } = this.props.products;

    let productsContent;
    if (products === null || loading) {
      productsContent = <Spinner />;
    } else {
      //CHECK IF PRODUCTS EXIST

      if (Object.keys(products).length > 0) {
        productsContent = (
          <div class="sections_group">
            <div class="section">
              <div class="section_wrapper clearfix">
                <div class="items_group clearfix">
                  <div class="column one woocommerce-content">
                    <div class="shop-filters">
                      <p class="woocommerce-result-count">
                        Showing 1–12 of 15 results
                      </p>
                      <form class="woocommerce-ordering" method="get">
                        <select name="orderby" class="orderby">
                          <option value="menu_order" selected="selected">
                            Default sorting
                          </option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="rating">Sort by average rating</option>
                          <option value="date">Sort by newness</option>
                          <option value="price">
                            Sort by price: low to high
                          </option>
                          <option value="price-desc">
                            Sort by price: high to low
                          </option>
                        </select>
                      </form>
                    </div>
                    <div class="products_wrapper isotope_wrapper">
                      <ul class="products grid">
                        {
                          (productsContent = products.map(product => (
                            <ProductItem key={product._id} product={product} />
                          )))
                        }
                      </ul>
                    </div>

                    <div class="column one pager_wrapper">
                      <div class="pager">
                        <div class="pages">
                          <span class="page-numbers current">1</span>
                          <a class="page-numbers" href="#">
                            2
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        productsContent = (
          <div>
            {" "}
            <h1> no products</h1>
          </div>
        );
      }
    }
    return (
      <div>
        {/* Banner slider missing */}
        <div
          class="archive-product with_aside aside_right woocommerce
       woocommerce-page color-blue layout-full-width header-modern sticky-header sticky-white subheader-title-left"
        >
          <div id="Content">
            <div class="content_wrapper clearfix">
              {productsContent}
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ShopMain.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStaeToProps = state => ({
  products: state.products,
  auth: state.auth
});
export default connect(
  mapStaeToProps,
  { getAllProducts }
)(ShopMain);
