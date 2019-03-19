import React, { Component } from "react";

export default class ForgetPass extends Component {
  render() {
    return (
      <div>
        <div class="flv_sections_16 section" id="hoverbox">
          <div class="section_wrapper clearfix">
            <div class="items_group clearfix">
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
                  <p>
                    An email with a varification code will be sent to this
                    email. Confurm that and we'll set you up ;) this link will
                    only be avilable for 24 hours.
                  </p>

                  <div id="contactWrapper_popup">
                    <form id="contactform_popup" class="flv_fullwidth">
                      <br />

                      <span>
                        {" "}
                        <label class="form_lable" for="email">
                          Email
                        </label>
                      </span>
                      <span>
                        <input
                          type="email"
                          class="form_input_full"
                          name="email_popup"
                          id="email_popup"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </span>
                      <span>
                        <input
                          type="button"
                          class="button button_large button_theme button_js"
                          value="SEND"
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
              </div>

              <div class="column one-third column_hover_box" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
