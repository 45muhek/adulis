import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { registerUser } from "../../actions/authActions";
import { stat } from "fs";
import TextFieldGroup from "../common/TextFieldGroup";

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
                      <TextFieldGroup
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={this.state.firstname}
                        onChange={this.onChange}
                        error={errors.firstname}
                      />

                      <span>
                        {" "}
                        <label className="form_lable" for="email">
                          Last name
                        </label>
                      </span>
                      <TextFieldGroup
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={this.state.lastname}
                        onChange={this.onChange}
                        error={errors.lastname}
                      />

                      <span>
                        {" "}
                        <label className="form_lable" for="email">
                          Email
                        </label>
                      </span>
                      <TextFieldGroup
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      />

                      <span>
                        <label className="form_lable" for="password">
                          Password
                        </label>
                      </span>
                      <TextFieldGroup
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />

                      <span>
                        {" "}
                        <label className="form_lable" for="password">
                          Confirm Password
                        </label>
                      </span>
                      <TextFieldGroup
                        type="password"
                        name="password2"
                        id="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />

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
