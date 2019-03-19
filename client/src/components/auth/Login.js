import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
  }
  render() {
    const { errors } = this.state;
    console.log(errors);
    return (
      <div>
        <div class="flv_sections_16 section" id="hoverbox">
          <div class="section_wrapper clearfix">
            <div class="items_group clearfix">
              {/* One full width row */}
              <div class="column one column_column">
                <div class="column_attr " />
              </div>
              {/* One Third (1/3) Column */}
              <div class="column one-third column_hover_box" />
              {/* One Third (1/3) Column */}
              <div class="column one-third column_hover_box login_panel">
                <div class="hover_box">
                  <div class="logo_header">
                    <img
                      src="./images/logo_footer.png"
                      width="50%"
                      height="30px;"
                    />
                  </div>

                  <div id="contactWrapper_popup">
                    <form
                      id="contactform_popup"
                      onSubmit={this.onSubmit}
                      class="flv_fullwidth"
                    >
                      <span>
                        {" "}
                        <label class="form_lable" for="email">
                          Email
                        </label>
                      </span>
                      <span>
                        <input
                          type="email"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                          'invalid': errors.email
                        })}
                          name="email"
                          id="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.email && (
                        <label generated="true" className="error-label">
                          {errors.email}
                        </label>
                      )}
                      <span>
                        {" "}
                        <label class="form_lable" for="password">
                          Password
                        </label>
                      </span>
                      <span>
                        <input
                          type="password"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                            'invalid': errors.password
                          })}
                          name="password"
                          id="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.password && (
                        <label generated="true" className="error-label">
                          {errors.password}
                        </label>
                      )}
                      <span>
                        <input
                          type="submit"
                          className="button button_large button_theme button_js"
                          value="LOGIN"
                          id="submit_popup"
                          onClick="return check_values_popup();"
                        />
                      </span>
                    </form>
                    <a href="#" class="forgot_pass_txt">
                      Forget password?
                    </a>
                    <br />
                    <div id="confirmation_popup" />
                  </div>
                </div>

                <br />
                <br />
                <a
                  class="button button_left button_red button_js kill_the_icon btn_full_width"
                  href="#"
                  target="_blank"
                >
                  <span class="button_icon">
                    <i class="icon-google" />
                  </span>
                  <span class="button_label">Login with google</span>
                </a>

                <a
                  class="button button_left button_blue button_js kill_the_icon btn_full_width"
                  href="#"
                  target="_blank"
                >
                  <span class="button_icon">
                    <i class="icon-facebook" />
                  </span>
                  <span class="button_label">Login with facebook</span>
                </a>

                <p>
                  Don't have an account? <a href="#">Register Now! </a>
                </p>
              </div>
              {/* One Third (1/3) Column */}
              <div class="column one-third column_hover_box" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
