import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { registerUser } from "../../actions/authActions";
import { stat } from "fs";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="flv_sections_16 section" id="hoverbox">
          <div className="section_wrapper clearfix">
            <div className="items_group clearfix">
              {/*  One full width row
               */}

              <div className="column one column_column">
                <div className="column_attr " />
              </div>
              {/* One Third (1/3) Column */}
              <div className="column one-third column_hover_box" />
              {/* One Third (1/3) Column */}
              <div className="column one-third column_hover_box login_panel">
                <div className="hover_box">
                  <div className="logo_header">
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
                      className="flv_fullwidth"
                    >
                      <span>
                        <label className="form_lable" for="email">
                          First Name
                        </label>
                      </span>
                      <span>
                        <input
                          type="text"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                            invalid: errors.firstname
                          })}
                          name="firstname"
                          value={this.state.firstname}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.firstname && (
                        <label generated="true" className="error-label">
                          {errors.firstname}
                        </label>
                      )}

                      <span>
                        {" "}
                        <label className="form_lable" for="email">
                          Last name
                        </label>
                      </span>
                      <span>
                        <input
                          type="text"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                            invalid: errors.lastname
                          })}
                          name="lastname"
                          value={this.state.lastname}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.lastname && (
                        <label generated="true" className="error-label">
                          {errors.lastname}
                        </label>
                      )}

                      <span>
                        {" "}
                        <label className="form_lable" for="email">
                          Email
                        </label>
                      </span>
                      <span>
                        <input
                          type="email"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                            invalid: errors.email
                          })}
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.email && (
                        <label
                          for="contactname"
                          generated="true"
                          className="error-label"
                        >
                          {errors.email}
                        </label>
                      )}

                      <span>
                        <label className="form_lable" for="password">
                          Password
                        </label>
                      </span>
                      <span>
                        <input
                          type="password"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                            invalid: errors.password
                          })}
                          name="password"
                          id="password"
                          aria-required="true"
                          aria-invalid="false"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.password && (
                        <label
                          for="contactname"
                          generated="true"
                          className="error-label"
                        >
                          {errors.password}
                        </label>
                      )}

                      <span>
                        {" "}
                        <label className="form_lable" for="password">
                          Confirm Password
                        </label>
                      </span>
                      <span>
                        <input
                          type="password"
                          /* prettier-ignore */

                          className={classnames("form_input_full", {
                            'invalid': errors.password2
                          })}
                          name="password2"
                          id="password2"
                          aria-required="true"
                          aria-invalid="false"
                          value={this.state.password2}
                          onChange={this.onChange}
                        />
                      </span>
                      {errors.password2 && (
                        <label
                          for="contactname"
                          generated="true"
                          className="error-label"
                        >
                          {errors.password2}
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

                    <div id="confirmation_popup" />
                  </div>
                </div>

                <br />
                <br />
                <a
                  className="button button_left button_red button_js kill_the_icon btn_full_width"
                  href="#"
                  target="_blank"
                >
                  <span className="button_icon">
                    <i className="icon-google" />
                  </span>
                  <span className="button_label">Register with google</span>
                </a>

                <a
                  className="button button_left button_blue button_js kill_the_icon btn_full_width"
                  href="#"
                  target="_blank"
                >
                  <span className="button_icon">
                    <i className="icon-facebook" />
                  </span>
                  <span className="button_label">Register with facebook</span>
                </a>

                <p>
                  Already have an account? <a href="#">Login </a>
                </p>
              </div>
              {/* One Third (1/3) Column */}
              <div className="column one-third column_hover_box" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
