import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../../../actions/cartActions";

class AddToCart extends Component {
  handleClick(id) {
    this.props.addToCart(id, this.props.history);
  }
  render() {
    const { pid } = this.props;
    return (
      <div class="column three-fourth column_column">
        <Link
          class="button button_left button_theme button_js kill_the_icon mybutton"
          to="#"
          onClick={this.handleClick.bind(this, pid)}
        >
          <span class="button_icon adulis_cart_icon">
            <i class="icon-basket" />
          </span>
          <span class="button_label cart_btn">Add to cart</span>
        </Link>
      </div>
    );
  }
}
AddToCart.propTypes = {
  addToCart: PropTypes.func.isRequired
};
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { addToCart }
)(withRouter(AddToCart));
