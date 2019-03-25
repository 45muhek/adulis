import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import CartTableRow from "./CartTableRow";
import Spinner from "../../common/Spinner";
import { getMyOrders } from "../../../actions/orderAction";
import MYOrdersTableRow from "./MYOrdersTableRow";

class MyOrders extends Component {
  componentDidMount() {
    this.props.getMyOrders();
  }
  render() {
    let myOrdersContent;
    const { userOrders, loading } = this.props.orders;

    if (userOrders === null || loading) {
      myOrdersContent = <Spinner />;
    } else {
      if (Object.keys(userOrders).length > 0) {
        myOrdersContent = (
          <div className="section_wrapper">
            <div className="the_content_wrapper">
              <div className="woocommerce">
                <form
                  action="http://themes.muffingroup.com/be/theme/cart/"
                  method="post"
                >
                  <table className="shop_table cart" cellSpacing="0">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">deliver to</th>
                        <th className="product-price">phone</th>
                        <th className="product-quantity">delivery date</th>
                        <th className="product-subtotal">total price</th>
                        <th className="product-remove">status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        (myOrdersContent = userOrders.map(order => (
                          <MYOrdersTableRow key={order._id} order={order} />
                        )))
                      }
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div>
        <div className="column one column_column" />
        <div id="Content">
          <div className="content_wrapper clearfix">
            <div className="sections_group">
              <div className="entry-content">
                <div className="section the_content has_content">
                  {/*  */}
                  {myOrdersContent}
                </div>
                <div className="section section-page-footer">
                  <div className="section_wrapper clearfix">
                    <div className="column one page-pager" />
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

MyOrders.propTypes = {
  getMyOrders: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};
const mapStaeToProps = state => ({
  auth: state.auth,
  orders: state.orders
});
export default connect(
  mapStaeToProps,
  { getMyOrders }
)(MyOrders);
