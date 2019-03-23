import React, { Component } from "react";

export default class PopUpContactForm extends Component {
  render() {
    return (
      <div>
        {/* Popup contact form */}
        <div id="popup_contact">
          <a className="button button_js" href="#">
            <i className="icon-mail-line" />
          </a>
          <div className="popup_contact_wrapper">
            <div id="contactWrapper_popup">
              {/* Contact form area */}
              <form id="contactform_popup">
                <h4>Send us a message</h4>
                <p>
                  <span>
                    <input
                      type="text"
                      name="name_popup"
                      id="name_popup"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your name"
                    />
                  </span>
                  <span>
                    <input
                      type="email"
                      name="email_popup"
                      id="email_popup"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your email"
                    />
                  </span>
                  <span>
                    <input
                      type="text"
                      name="subject_popup"
                      id="subject_popup"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Subject"
                    />
                  </span>
                  <span>
                    {" "}
                    <textarea
                      name="body_popup"
                      cols="40"
                      id="body_popup"
                      rows="2"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Message"
                    />
                  </span>

                  <input type="button" value="Send Message" id="submit_popup" />
                </p>
              </form>
              <div id="confirmation_popup" />
            </div>

            <span className="arrow" />
          </div>
        </div>
      </div>
    );
  }
}
