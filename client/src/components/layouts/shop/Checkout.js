import PropTypes from "prop-types";
import { connect } from "react-redux";

import CartTableRow from "./CartTableRow";
import Spinner from "../../common/Spinner";

import { getCart, getCartTotalPrice } from "../../../actions/cartActions";
import React, { Component } from "react";
import CheckoutTableRow from "./CheckoutTableRow";
import TextFieldGroup from "../../common/TextFieldGroup";
import { placeOrder } from "../../../actions/orderAction";
import SelectListGroup from "../../common/SelectListGroup";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      companyname: "",
      streetname: "",
      housenumber: "",
      city: "",
      phone: "",
      email: "",
      deliverydate: "",
      transportationtype: "",
      transactionmethod: "",
      deliverydate: "",
      note: "",
      transactionmethod: "",
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
  componentDidMount() {
    this.props.getCart();
    this.props.getCartTotalPrice();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newOrder = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      companyname: this.state.companyname,
      streetname: this.state.streetname,
      housenumber: this.state.housenumber,
      city: this.state.city,
      phone: this.state.phone,
      email: this.state.email,
      deliverydate: this.state.deliverydate,
      transportationtype: this.state.transportationtype,
      transactionmethod: this.state.transactionmethod,
      deliverydate: this.state.deliverydate,
      paymentm: this.state.paymentm,
      note: this.state.note
    };
    this.props.placeOrder(newOrder, this.props.history);
  }
  render() {
    //PAYMENT OPTIONS
    const options = [
      {
        label: "Select payment method",
        value: ""
      },
      { label: "Cash on delivery", value: "cash on delivery" }
    ];
    //ASSIGNING ERRORS
    const { errors } = this.state;

    let orderContent;
    const { cart, loading } = this.props.cart;
    const { cart_total_price } = this.props.cart;

    if (cart === null || loading) {
      orderContent = <Spinner />;
    } else {
      orderContent = (
        <div id="order_review" class="woocommerce-checkout-review-order">
          <table class="shop_table woocommerce-checkout-review-order-table">
            <thead>
              <tr>
                <th class="product-name">Product</th>
                <th class="product-total">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                (orderContent = cart.map(product => (
                  <CheckoutTableRow key={product.item._id} product={product} />
                )))
              }
            </tbody>
            <tfoot>
              <tr class="cart-subtotal">
                <th>Subtotal</th>
                <td>
                  <span class="woocommerce-Price-amount amount">
                    0<span class="woocommerce-Price-currencySymbol"> Birr</span>
                  </span>
                </td>
              </tr>
              <tr class="cart-subtotal">
                <th>Transportation</th>
                <td>
                  <span class="woocommerce-Price-amount amount">
                    0<span class="woocommerce-Price-currencySymbol"> Birr</span>
                  </span>
                </td>
              </tr>
              <tr class="order-total">
                <th>Total</th>
                <td>
                  <strong>
                    <span class="woocommerce-Price-amount amount">
                      {cart_total_price}
                      <span class="woocommerce-Price-currencySymbol">
                        {" "}
                        Birr
                      </span>
                    </span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
    return (
      <div>
        <div class="column one column_column">
          <div class="column_attr " />
        </div>
        <div id="Content">
          <div class="content_wrapper clearfix">
            <div class="sections_group">
              <div class="entry-content" itemprop="mainContentOfPage">
                <div class="section the_content has_content">
                  <div class="section_wrapper">
                    <div class="the_content_wrapper">
                      <div class="woocommerce">
                        <form
                          name="checkout"
                          method="post"
                          class="checkout woocommerce-checkout"
                          onSubmit={this.onSubmit}
                          enctype="multipart/form-data"
                        >
                          <div class="col2-set" id="customer_details">
                            <div class="column col-1">
                              <div class="woocommerce-billing-fields">
                                <h3>Billing details</h3>
                                <div class="woocommerce-billing-fields__field-wrapper">
                                  <p
                                    class="form-row form-row-first validate-required"
                                    id="firstname"
                                    data-priority="10"
                                  >
                                    <label for="billing_first_name" class="">
                                      First name{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="text"
                                      class="input-text "
                                      name="firstname"
                                      id="firstname"
                                      value={this.state.firstname}
                                      onChange={this.onChange}
                                      error={errors.firstname}
                                      autocomplete="given-name"
                                      autofocus="autofocus"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-last validate-required"
                                    id="billing_last_name_field"
                                    data-priority="20"
                                  >
                                    <label for="billing_last_name" class="">
                                      Last name{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="text"
                                      class="input-text "
                                      name="lastname"
                                      id="lastname"
                                      value={this.state.lastname}
                                      onChange={this.onChange}
                                      error={errors.lastname}
                                      autocomplete="family-name"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-wide"
                                    id="billing_company_field"
                                    data-priority="30"
                                  >
                                    <label for="billing_company" class="">
                                      Company name
                                    </label>

                                    <TextFieldGroup
                                      type="text"
                                      class="input-text "
                                      name="companyname"
                                      id="companyname"
                                      value={this.state.companyname}
                                      onChange={this.onChange}
                                      error={errors.companyname}
                                      autocomplete="organization"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field update_totals_on_change validate-required"
                                    id="billing_country_field"
                                    data-priority="40"
                                  >
                                    <label for="billing_country" class="">
                                      Country{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <select
                                      name="billing_country"
                                      id="billing_country"
                                      class="country_to_state country_select "
                                      autocomplete="country"
                                    >
                                      <option value="">
                                        Select a country&hellip;
                                      </option>
                                      <option value="AX">
                                        &#197;land Islands
                                      </option>
                                      <option value="AF">Afghanistan</option>
                                      <option value="AL">Albania</option>
                                      <option value="DZ">Algeria</option>
                                      <option value="AS">American Samoa</option>
                                      <option value="AD">Andorra</option>
                                      <option value="AO">Angola</option>
                                      <option value="AI">Anguilla</option>
                                      <option value="AQ">Antarctica</option>
                                      <option value="AG">
                                        Antigua and Barbuda
                                      </option>
                                      <option value="AR">Argentina</option>
                                      <option value="AM">Armenia</option>
                                      <option value="AW">Aruba</option>
                                      <option value="AU">Australia</option>
                                      <option value="AT">Austria</option>
                                      <option value="AZ">Azerbaijan</option>
                                      <option value="BS">Bahamas</option>
                                      <option value="BH">Bahrain</option>
                                      <option value="BD">Bangladesh</option>
                                      <option value="BB">Barbados</option>
                                      <option value="BY">Belarus</option>
                                      <option value="PW">Belau</option>
                                      <option value="BE">Belgium</option>
                                      <option value="BZ">Belize</option>
                                      <option value="BJ">Benin</option>
                                      <option value="BM">Bermuda</option>
                                      <option value="BT">Bhutan</option>
                                      <option value="BO">Bolivia</option>
                                      <option value="BQ">
                                        Bonaire, Saint Eustatius and Saba
                                      </option>
                                      <option value="BA">
                                        Bosnia and Herzegovina
                                      </option>
                                      <option value="BW">Botswana</option>
                                      <option value="BV">Bouvet Island</option>
                                      <option value="BR">Brazil</option>
                                      <option value="IO">
                                        British Indian Ocean Territory
                                      </option>
                                      <option value="VG">
                                        British Virgin Islands
                                      </option>
                                      <option value="BN">Brunei</option>
                                      <option value="BG">Bulgaria</option>
                                      <option value="BF">Burkina Faso</option>
                                      <option value="BI">Burundi</option>
                                      <option value="KH">Cambodia</option>
                                      <option value="CM">Cameroon</option>
                                      <option value="CA">Canada</option>
                                      <option value="CV">Cape Verde</option>
                                      <option value="KY">Cayman Islands</option>
                                      <option value="CF">
                                        Central African Republic
                                      </option>
                                      <option value="TD">Chad</option>
                                      <option value="CL">Chile</option>
                                      <option value="CN">China</option>
                                      <option value="CX">
                                        Christmas Island
                                      </option>
                                      <option value="CC">
                                        Cocos (Keeling) Islands
                                      </option>
                                      <option value="CO">Colombia</option>
                                      <option value="KM">Comoros</option>
                                      <option value="CG">
                                        Congo (Brazzaville)
                                      </option>
                                      <option value="CD">
                                        Congo (Kinshasa)
                                      </option>
                                      <option value="CK">Cook Islands</option>
                                      <option value="CR">Costa Rica</option>
                                      <option value="HR">Croatia</option>
                                      <option value="CU">Cuba</option>
                                      <option value="CW">Cura&ccedil;ao</option>
                                      <option value="CY">Cyprus</option>
                                      <option value="CZ">Czech Republic</option>
                                      <option value="DK">Denmark</option>
                                      <option value="DJ">Djibouti</option>
                                      <option value="DM">Dominica</option>
                                      <option value="DO">
                                        Dominican Republic
                                      </option>
                                      <option value="EC">Ecuador</option>
                                      <option value="EG">Egypt</option>
                                      <option value="SV">El Salvador</option>
                                      <option value="GQ">
                                        Equatorial Guinea
                                      </option>
                                      <option value="ER">Eritrea</option>
                                      <option value="EE">Estonia</option>
                                      <option value="ET" selected="selected">
                                        Ethiopia
                                      </option>
                                      <option value="FK">
                                        Falkland Islands
                                      </option>
                                      <option value="FO">Faroe Islands</option>
                                      <option value="FJ">Fiji</option>
                                      <option value="FI">Finland</option>
                                      <option value="FR">France</option>
                                      <option value="GF">French Guiana</option>
                                      <option value="PF">
                                        French Polynesia
                                      </option>
                                      <option value="TF">
                                        French Southern Territories
                                      </option>
                                      <option value="GA">Gabon</option>
                                      <option value="GM">Gambia</option>
                                      <option value="GE">Georgia</option>
                                      <option value="DE">Germany</option>
                                      <option value="GH">Ghana</option>
                                      <option value="GI">Gibraltar</option>
                                      <option value="GR">Greece</option>
                                      <option value="GL">Greenland</option>
                                      <option value="GD">Grenada</option>
                                      <option value="GP">Guadeloupe</option>
                                      <option value="GU">Guam</option>
                                      <option value="GT">Guatemala</option>
                                      <option value="GG">Guernsey</option>
                                      <option value="GN">Guinea</option>
                                      <option value="GW">Guinea-Bissau</option>
                                      <option value="GY">Guyana</option>
                                      <option value="HT">Haiti</option>
                                      <option value="HM">
                                        Heard Island and McDonald Islands
                                      </option>
                                      <option value="HN">Honduras</option>
                                      <option value="HK">Hong Kong</option>
                                      <option value="HU">Hungary</option>
                                      <option value="IS">Iceland</option>
                                      <option value="IN">India</option>
                                      <option value="ID">Indonesia</option>
                                      <option value="IR">Iran</option>
                                      <option value="IQ">Iraq</option>
                                      <option value="IE">Ireland</option>
                                      <option value="IM">Isle of Man</option>
                                      <option value="IL">Israel</option>
                                      <option value="IT">Italy</option>
                                      <option value="CI">Ivory Coast</option>
                                      <option value="JM">Jamaica</option>
                                      <option value="JP">Japan</option>
                                      <option value="JE">Jersey</option>
                                      <option value="JO">Jordan</option>
                                      <option value="KZ">Kazakhstan</option>
                                      <option value="KE">Kenya</option>
                                      <option value="KI">Kiribati</option>
                                      <option value="KW">Kuwait</option>
                                      <option value="KG">Kyrgyzstan</option>
                                      <option value="LA">Laos</option>
                                      <option value="LV">Latvia</option>
                                      <option value="LB">Lebanon</option>
                                      <option value="LS">Lesotho</option>
                                      <option value="LR">Liberia</option>
                                      <option value="LY">Libya</option>
                                      <option value="LI">Liechtenstein</option>
                                      <option value="LT">Lithuania</option>
                                      <option value="LU">Luxembourg</option>
                                      <option value="MO">
                                        Macao S.A.R., China
                                      </option>
                                      <option value="MK">Macedonia</option>
                                      <option value="MG">Madagascar</option>
                                      <option value="MW">Malawi</option>
                                      <option value="MY">Malaysia</option>
                                      <option value="MV">Maldives</option>
                                      <option value="ML">Mali</option>
                                      <option value="MT">Malta</option>
                                      <option value="MH">
                                        Marshall Islands
                                      </option>
                                      <option value="MQ">Martinique</option>
                                      <option value="MR">Mauritania</option>
                                      <option value="MU">Mauritius</option>
                                      <option value="YT">Mayotte</option>
                                      <option value="MX">Mexico</option>
                                      <option value="FM">Micronesia</option>
                                      <option value="MD">Moldova</option>
                                      <option value="MC">Monaco</option>
                                      <option value="MN">Mongolia</option>
                                      <option value="ME">Montenegro</option>
                                      <option value="MS">Montserrat</option>
                                      <option value="MA">Morocco</option>
                                      <option value="MZ">Mozambique</option>
                                      <option value="MM">Myanmar</option>
                                      <option value="NA">Namibia</option>
                                      <option value="NR">Nauru</option>
                                      <option value="NP">Nepal</option>
                                      <option value="NL">Netherlands</option>
                                      <option value="NC">New Caledonia</option>
                                      <option value="NZ">New Zealand</option>
                                      <option value="NI">Nicaragua</option>
                                      <option value="NE">Niger</option>
                                      <option value="NG">Nigeria</option>
                                      <option value="NU">Niue</option>
                                      <option value="NF">Norfolk Island</option>
                                      <option value="KP">North Korea</option>
                                      <option value="MP">
                                        Northern Mariana Islands
                                      </option>
                                      <option value="NO">Norway</option>
                                      <option value="OM">Oman</option>
                                      <option value="PK">Pakistan</option>
                                      <option value="PS">
                                        Palestinian Territory
                                      </option>
                                      <option value="PA">Panama</option>
                                      <option value="PG">
                                        Papua New Guinea
                                      </option>
                                      <option value="PY">Paraguay</option>
                                      <option value="PE">Peru</option>
                                      <option value="PH">Philippines</option>
                                      <option value="PN">Pitcairn</option>
                                      <option value="PL">Poland</option>
                                      <option value="PT">Portugal</option>
                                      <option value="PR">Puerto Rico</option>
                                      <option value="QA">Qatar</option>
                                      <option value="RE">Reunion</option>
                                      <option value="RO">Romania</option>
                                      <option value="RU">Russia</option>
                                      <option value="RW">Rwanda</option>
                                      <option value="ST">
                                        S&atilde;o Tom&eacute; and
                                        Pr&iacute;ncipe
                                      </option>
                                      <option value="BL">
                                        Saint Barth&eacute;lemy
                                      </option>
                                      <option value="SH">Saint Helena</option>
                                      <option value="KN">
                                        Saint Kitts and Nevis
                                      </option>
                                      <option value="LC">Saint Lucia</option>
                                      <option value="SX">
                                        Saint Martin (Dutch part)
                                      </option>
                                      <option value="MF">
                                        Saint Martin (French part)
                                      </option>
                                      <option value="PM">
                                        Saint Pierre and Miquelon
                                      </option>
                                      <option value="VC">
                                        Saint Vincent and the Grenadines
                                      </option>
                                      <option value="WS">Samoa</option>
                                      <option value="SM">San Marino</option>
                                      <option value="SA">Saudi Arabia</option>
                                      <option value="SN">Senegal</option>
                                      <option value="RS">Serbia</option>
                                      <option value="SC">Seychelles</option>
                                      <option value="SL">Sierra Leone</option>
                                      <option value="SG">Singapore</option>
                                      <option value="SK">Slovakia</option>
                                      <option value="SI">Slovenia</option>
                                      <option value="SB">
                                        Solomon Islands
                                      </option>
                                      <option value="SO">Somalia</option>
                                      <option value="ZA">South Africa</option>
                                      <option value="GS">
                                        South Georgia/Sandwich Islands
                                      </option>
                                      <option value="KR">South Korea</option>
                                      <option value="SS">South Sudan</option>
                                      <option value="ES">Spain</option>
                                      <option value="LK">Sri Lanka</option>
                                      <option value="SD">Sudan</option>
                                      <option value="SR">Suriname</option>
                                      <option value="SJ">
                                        Svalbard and Jan Mayen
                                      </option>
                                      <option value="SZ">Swaziland</option>
                                      <option value="SE">Sweden</option>
                                      <option value="CH">Switzerland</option>
                                      <option value="SY">Syria</option>
                                      <option value="TW">Taiwan</option>
                                      <option value="TJ">Tajikistan</option>
                                      <option value="TZ">Tanzania</option>
                                      <option value="TH">Thailand</option>
                                      <option value="TL">Timor-Leste</option>
                                      <option value="TG">Togo</option>
                                      <option value="TK">Tokelau</option>
                                      <option value="TO">Tonga</option>
                                      <option value="TT">
                                        Trinidad and Tobago
                                      </option>
                                      <option value="TN">Tunisia</option>
                                      <option value="TR">Turkey</option>
                                      <option value="TM">Turkmenistan</option>
                                      <option value="TC">
                                        Turks and Caicos Islands
                                      </option>
                                      <option value="TV">Tuvalu</option>
                                      <option value="UG">Uganda</option>
                                      <option value="UA">Ukraine</option>
                                      <option value="AE">
                                        United Arab Emirates
                                      </option>
                                      <option value="GB">
                                        United Kingdom (UK)
                                      </option>
                                      <option value="US">
                                        United States (US)
                                      </option>
                                      <option value="UM">
                                        United States (US) Minor Outlying
                                        Islands
                                      </option>
                                      <option value="VI">
                                        United States (US) Virgin Islands
                                      </option>
                                      <option value="UY">Uruguay</option>
                                      <option value="UZ">Uzbekistan</option>
                                      <option value="VU">Vanuatu</option>
                                      <option value="VA">Vatican</option>
                                      <option value="VE">Venezuela</option>
                                      <option value="VN">Vietnam</option>
                                      <option value="WF">
                                        Wallis and Futuna
                                      </option>
                                      <option value="EH">Western Sahara</option>
                                      <option value="YE">Yemen</option>
                                      <option value="ZM">Zambia</option>
                                      <option value="ZW">Zimbabwe</option>
                                    </select>
                                    <noscript>
                                      <input
                                        type="submit"
                                        name="woocommerce_checkout_update_totals"
                                        value="Update country"
                                      />
                                    </noscript>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required"
                                    id="billing_address_1_field"
                                    data-priority="50"
                                  >
                                    <label for="billing_address_1" class="">
                                      Address{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="text"
                                      class="input-text "
                                      name="streetname"
                                      id="streetname"
                                      placeholder="Street address"
                                      value={this.state.streetname}
                                      onChange={this.onChange}
                                      error={errors.streetname}
                                      autocomplete="address-line1"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field"
                                    id="billing_address_2_field"
                                    data-priority="60"
                                  >
                                    <TextFieldGroup
                                      type="text"
                                      class="input-text "
                                      name="housenumber"
                                      id="housenumber"
                                      placeholder="Apartment, suite, unit etc. (optional)"
                                      value={this.state.housenumber}
                                      onChange={this.onChange}
                                      error={errors.housenumber}
                                      autocomplete="address-line2"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required"
                                    id="billing_city_field"
                                    data-priority="70"
                                  >
                                    <label for="billing_city" class="">
                                      Town / City{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="text"
                                      class="input-text "
                                      name="city"
                                      id="city"
                                      value={this.state.city}
                                      onChange={this.onChange}
                                      error={errors.city}
                                      autocomplete="address-level2"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required"
                                    id="billing_city_field"
                                    data-priority="70"
                                  >
                                    <label for="billing_city" class="">
                                      Delivery date{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="date"
                                      class="input-text "
                                      name="deliverydate"
                                      id="deliverydate"
                                      value={this.state.deliverydate}
                                      onChange={this.onChange}
                                      error={errors.deliverydate}
                                    />
                                  </p>

                                  {/*         <p
                                    class="form-row form-row-wide address-field validate-required validate-postcode"
                                    id="billing_postcode_field"
                                    data-priority="90"
                                  >
                                    <label for="billing_postcode" class="">
                                      Postcode / ZIP{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_postcode"
                                      id="billing_postcode"
                                      placeholder=""
                                      value=""
                                      autocomplete="postal-code"
                                    />
                                  </p> */}
                                  <p
                                    class="form-row form-row-first validate-required validate-phone"
                                    id="billing_phone_field"
                                    data-priority="100"
                                  >
                                    <label for="billing_phone" class="">
                                      Phone{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="tel"
                                      class="input-text "
                                      name="phone"
                                      id="phone"
                                      value={this.state.phone}
                                      onChange={this.onChange}
                                      error={errors.phone}
                                      autocomplete="tel"
                                    />
                                  </p>
                                  <p
                                    class="form-row form-row-last validate-required validate-email"
                                    id="billing_email_field"
                                    data-priority="110"
                                  >
                                    <label for="billing_email" class="">
                                      Email address{" "}
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>

                                    <TextFieldGroup
                                      type="email"
                                      name="email"
                                      id="email"
                                      value={this.state.email}
                                      onChange={this.onChange}
                                      error={errors.email}
                                      autocomplete="email username"
                                    />
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="column col-2">
                              <div class="woocommerce-shipping-fields" />
                              <div class="woocommerce-additional-fields">
                                <h3>Additional information</h3>
                                <div class="woocommerce-additional-fields__field-wrapper">
                                  <p
                                    class="form-row notes"
                                    id="order_comments_field"
                                    data-priority=""
                                  >
                                    <label for="order_comments" class="">
                                      Order notes
                                    </label>
                                    <textarea
                                      name="note"
                                      class="input-text "
                                      id="note"
                                      value={this.state.note}
                                      onChange={this.onChange}
                                      placeholder="Notes about your order, e.g. special notes for delivery."
                                      rows="2"
                                      cols="5"
                                    />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3 id="order_review_heading">Your order</h3>
                          {orderContent}
                          <div
                            id="payment"
                            class="woocommerce-checkout-payment"
                          >
                            <ul class="wc_payment_methods payment_methods methods">
                              <li class="woocommerce-notice woocommerce-notice--info woocommerce-info">
                                <SelectListGroup
                                  name="transactionmethod"
                                  id="transactionmethod"
                                  value={this.state.transactionmethod}
                                  onChange={this.onChange}
                                  options={options}
                                  error={errors.transactionmethod}
                                />
                              </li>
                            </ul>

                            <div class="form-row place-order">
                              <input
                                type="submit"
                                name="woocommerce_checkout_place_order"
                                id="place_order"
                                value="Place order"
                                data-value="Place order"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section section-page-footer">
                  <div class="section_wrapper clearfix">
                    <div class="column one page-pager" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

Checkout.propTypes = {
  getCart: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  getCartTotalPrice: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStaeToProps = state => ({
  cart: state.cart,
  cart_total_price: state.cart_total_price,
  errors: state.errors
});
export default connect(
  mapStaeToProps,
  { getCart, getCartTotalPrice, placeOrder }
)(Checkout);
