import React, { Component } from "react";
import TopCollapsable from "./Landing/TopCollapsable";
import HomeSlider from "./Landing/HomeSlider";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

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
          <a href="#">Login</a>
        </li>
        <li className="menu-item-1573">
          <a href="contact.html">Sign Up</a>
        </li>
        <li className="menu-item-1574">
          <a href="shop.html">Get The App!</a>
        </li>
      </ul>
    );

    const authLinks = (
      <ul id="menu-secondary-menu" className="secondary-menu">
        <li className="menu-item-1573">
          <a href="#" onClick={this.onLogoutClick.bind(this)}>
            Logout
          </a>
        </li>
        <li className="menu-item-1574">
          <a href="shop.html">Get The App!</a>
        </li>
      </ul>
    );

    const profileLink = (
      <div className="wpml-languages enabled">
        <a className="active">
          <img
            src="css/images/user_3.png"
            alt={user.firstname}
            style={{ width: "25px", marginRight: "5x" }}
            title="set your profile picture to get a higher varification rate"
          />
          <span style={{ textAlign: "center", marginRight: "5" + "px" }}>
            {user.firstname}
          </span>
        </a>
      </div>
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
                          <a
                            style={{ float: "left" }}
                            href="index.html"
                            title="BeTheme - Best Html Theme Ever"
                          >
                            <img
                              className="scale-with-grid"
                              src="images/logo1.png"
                              alt="BeTheme - Best Html Theme Ever"
                            />
                          </a>
                        </div>
                        <div className="column one-second column_column">
                          <div className="clearfix">
                            <input
                              type="text"
                              style={searchStyle}
                              placeholder="search"
                            />
                            <a
                              className="button button_left button_theme button_js "
                              style={searchBtnStyle}
                              href="#"
                              target="_blank"
                            >
                              <span className="button_icon">
                                <i className="icon-search" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Main menu */}
                    <div className="menu_wrapper">
                      <nav id="menu">
                        <ul id="menu-main-menu" className="menu">
                          <li>
                            <a
                              href="http://be.BeantownThemes.com/intro/be-intro/be/splash/index.html"
                              target="_blank"
                            >
                              <span>Departments</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://be.BeantownThemes.com/intro/be-intro/be/splash/index.html"
                              target="_blank"
                            >
                              <span>Featured</span>
                            </a>
                          </li>
                          <li>
                            <a href="features-color-skins.html">
                              <span>Discount Window</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="home-modern-header.html">
                              <span>Sell</span>
                            </a>
                          </li>
                          <li>
                            <a href="typography.html">
                              <span>Our services</span>
                            </a>
                          </li>
                          <li>
                            <a href="about.html">
                              <span>About Us</span>
                            </a>
                          </li>

                          <li>
                            <a href="blog-sidebar-classNameic.html">
                              <span>FAQ</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <a className="responsive-menu-toggle" href="#">
                        <i className="icon-menu" />
                      </a>
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
                      <a href="#" target="_blank">
                        <img src="images/468x60.gif" alt="" />
                      </a>
                    </div>
                    {/* Header Searchform area */}
                  </div>
                  <div className="top_bar_right">
                    <div className="top_bar_right_wrapper">
                      {/* Shopping cart icon */}
                      <div className="wpml-languages enabled">
                        {isAuthenticated ? profileLink : ""}
                      </div>
                      <a id="header_cart" href="#">
                        <i className="icon-basket" />
                        <span>{cart_qty}</span>
                      </a>
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
