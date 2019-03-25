import React, { Component } from "react";
import TopCollapsable from "./Landing/TopCollapsable";
import HomeSlider from "./Landing/HomeSlider";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { logoutUser } from "../../actions/authActions";
import { getToatalCartQty } from "../../actions/cartActions";

class Navbar extends Component {
  componentDidMount() {
    this.props.getToatalCartQty();
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    if (typeof this.props.cart_qty === undefined) this.props.cart_qty = "0";
    const searchStyle = {
      width: "80%",
      float: "left",
      padding: "13px"
    };
    const searchBtnStyle = {
      marginBottom: " 0",
      marginRight: "0",
      marginLeft: "-7px"
    };

    const { isAuthenticated, user } = this.props.auth;
    const { cart_qty } = this.props.cart;
    const guestLinks = (
      <ul id="menu-secondary-menu" className="secondary-menu">
        <li className="menu-item-1568">
          <Link to="/login">Login</Link>
        </li>
        <li className="menu-item-1573">
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    );

    const authLinks = (
      <ul id="menu-secondary-menu " className="secondary-menu">
        <li className="menu">
          <Link to="#">
            <i style={{ fontSize: 128 + "%" }} className="icon-bell" />{" "}
          </Link>
        </li>
        <li className="menu-item-1573">
          <a href="#" onClick={this.onLogoutClick.bind(this)}>
            Logout
          </a>
        </li>

        <li className="menu-item-1574 submenu ">
          <Link to="/profile">
            {" "}
            <i
              style={{
                padding: "2px"
              }}
              className="icon-user"
            />{" "}
            {user.firstname} <i className="icon-down-open-mini" />
          </Link>
          <ul className="sub-menu" />
        </li>
      </ul>
    );

    const profileLink = (
      <Link
        className="menu-item-1573"
        style={{ fontSize: "15" + "px", textDecoration: "none", outline: 0 }}
        id="header_cart"
        to="#"
      >
        My orders
      </Link>
    );
    return (
      <div>
        <TopCollapsable />
        <div id="Wrapper">
          {/* Header Wrapper  */}
          <div id="Header_wrapper">
            {/*  Header */}
            <header id="Header">
              <div id="Top_bar">
                <div className="container">
                  <div className="column one">
                    <div className="top_bar_left clearfix">
                      {/* Logo */}
                      <div className="logo" id="logo">
                        <div className="column one-forth column_column">
                          <Link
                            style={{ float: "left" }}
                            to="/"
                            title="BeTheme - Best Html Theme Ever"
                          >
                            <img
                              className="scale-with-grid"
                              src="images/logo1.png"
                              alt="BeTheme - Best Html Theme Ever"
                            />
                          </Link>
                        </div>
                        <div className="column one-second column_column">
                          <div className="clearfix">
                            <input
                              type="text"
                              style={searchStyle}
                              placeholder="search"
                            />
                            <Link
                              className="button button_left button_theme button_js "
                              style={searchBtnStyle}
                              to="/search"
                              target="_blank"
                            >
                              <span className="button_icon">
                                <i className="icon-search" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Main menu */}
                    <div className="menu_wrapper">
                      <nav id="menu">
                        <ul id="menu-main-menu" className="menu">
                          <li>
                            <Link to="#" target="_blank">
                              <span>Departments</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/departments" target="_blank">
                              <span>Featured</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/discount">
                              <span>Discount Window</span>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="sell">
                              <span>Sell</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/services">
                              <span>Our services</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about-us">
                              <span>About Us</span>
                            </Link>
                          </li>

                          <li>
                            <Link to="faq">
                              <span>FAQ</span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                      <Link className="responsive-menu-toggle" to="#">
                        <i className="icon-menu" />
                      </Link>
                    </div>
                    {/* Secondary menu area - only for certain pages */}
                    <div className="secondary_menu_wrapper">
                      <nav
                        id="secondary-menu"
                        className="menu-secondary-menu-container"
                      >
                        {isAuthenticated ? authLinks : guestLinks}
                      </nav>
                    </div>
                    {/* Banner area - only for certain pages */}
                    <div className="banner_wrapper">
                      <Link to="#" target="_blank">
                        <img src="images/468x60.gif" alt="" />
                      </Link>
                    </div>
                    {/* Header Searchform area */}
                  </div>
                  <div className="top_bar_right">
                    <div className="top_bar_right_wrapper">
                      {/* Shopping cart icon */}
                      <div className="wpml-languages enabled" />
                      {isAuthenticated ? profileLink : ""}
                      <Link id="header_cart" to="#">
                        <i className="icon-basket" />
                        <span>{cart_qty}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getToatalCartQty: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, getToatalCartQty }
)(Navbar);
