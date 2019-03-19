import React, { Component } from "react";

class TopCollapsable extends Component {
  render() {
    return (
      <div>
        {/* Hidden Top Area */}
        <div id="Sliding-top">
          <div className="widgets_wrapper">
            <div className="container">
              <div className="one-fourth column">
                {/* Login form */}
                <aside
                  id="widget_mfn_login-2"
                  className="widget widget_mfn_login"
                >
                  <div className="mfn-login">
                    <h4>Login | Register</h4>
                    <form
                      name="loginform"
                      id="loginform"
                      action="#"
                      method="post"
                    >
                      <p className="login-username">
                        <label htmlFor="user_login">Username</label>
                        <input
                          type="text"
                          name="log"
                          id="user_login"
                          className="input"
                          defaultValue
                          size={20}
                        />
                      </p>
                      <p className="login-password">
                        <label htmlFor="user_pass">Password</label>
                        <input
                          type="password"
                          name="pwd"
                          id="user_pass"
                          className="input"
                          defaultValue
                          size={20}
                        />
                      </p>
                      <p className="login-submit">
                        <input
                          type="submit"
                          name="wp-submit"
                          id="wp-submit"
                          className="button-primary"
                          defaultValue="Log In"
                        />
                        <input
                          type="hidden"
                          name="redirect_to"
                          defaultValue="#"
                        />
                      </p>
                    </form>
                    <div className="links">
                      <a href="#">Register</a>
                      <span className="sep">|</span>
                      <a href="#">Lost your password?</a>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="one-fourth column">
                {/* Text Area */}
                <aside id="text-10" className="widget widget_text">
                  <div className="textwidget">
                    <p>
                      <span className="big">
                        <i class="icon-location-line" />
                        We deliver <span class="themecolor">1 million </span>
                        products to
                      </span>
                    </p>
                    <span className="themecolor flv_header_number">24</span>

                    <h3 className="flv_center">
                      <span className="flv_grey">Countries</span>
                    </h3>
                    <br />
                    <div className="hr_dots flv_dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <p>
                      Use our delivery support and get your products to your
                      door steps right away
                      <a href="#"> Learn more</a>
                    </p>
                  </div>
                </aside>
              </div>
              <div className="one-fourth column">
                {/* Text Area */}
                <aside id="text-11" class="widget widget_text">
                  <div class="textwidget">
                    <h5 class="flv_margin_b_5">
                      <i class="icon-mail-line" /> Our address:
                    </h5>
                    <p class="flv_margin_l_26">
                      <strong>Adulis HQ</strong>
                      <br />
                      Building floor, Bole Roads,
                      <br /> Addis Adbeba, Ethiopia
                    </p>
                    <h5 class="flv_margin_b_5">
                      <i class="icon-comment-line" /> Have any questions?
                    </h5>
                    <p class="flv_margin_l_26">
                      <a href="mailto:noreply@Adu.com">ask@Adulis.com</a>
                    </p>
                    <h5 class="flv_margin_b_5">
                      <i class="icon-phone " /> Call us:
                    </h5>
                    <p class="flv_margin_l_26">
                      <a href="tel:+251932441545">+251 932 441 545</a>
                    </p>
                  </div>
                </aside>
              </div>
              <div className="one-fourth column">
                {/* Text Area */}

                <aside id="text-12" class="widget widget_text">
                  <div class="textwidget">
                    <img
                      src="images/logo_header_dark.png"
                      height={"40"}
                      alt=""
                    />
                    <p>Download the app on your phone now</p>
                    <p>
                      <a href="#">
                        <img
                          src="images/home-app-store.png"
                          height="40px"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="images/home-google-play.png"
                          height="40px"
                          alt=""
                        />
                      </a>
                    </p>
                    <p>
                      Special mobile app features includes:
                      <span
                        class="tooltip"
                        data-tooltip="You can pay via ussd based mobile banking"
                      >
                        {" "}
                        Mobile banking payment
                      </span>
                      , Get your accureate delivery location on realtime and
                      much more
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <a href="#" className="sliding-top-control">
            <span>
              <i className="plus icon-down-open-mini" />
              <i className="minus icon-up-open-mini" />
            </span>
          </a>
        </div>
      </div>
    );
  }
}
export default TopCollapsable;
