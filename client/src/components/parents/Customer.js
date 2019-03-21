import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import PopUpContactForm from "../layouts/Landing/PopUpContactForm";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Landing from "../layouts/Landing/Landing";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgetPass from "../auth/ForgetPass";
import ShopMain from "../layouts/shop/product/ShopMain";
import Cart from "../layouts/shop/Cart";
import Checkout from "../layouts/shop/Checkout";
import SingleProduct from "../layouts/shop/product/SingleProduct";

/* import "../../css/global.css";
import "../../css/structure.css";
import "../../css/be_style.css";
import "../../css/custom.css";
import "../../css/auth_style.css";
import "../../css/shop_style.css";
import "../../plugins/rs-plugin/css/settings.css"; */

export class Customer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forget_pass" component={ForgetPass} />
          <Route exact path="/shop" component={ShopMain} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/product/:id" component={SingleProduct} />
          <Footer />
          <PopUpContactForm />
        </div>
      </Router>
    );
  }
}

export default Customer;
