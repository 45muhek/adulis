import React, { Component } from "react";

import SpecialOffers from "./SpecialOffers";
import PopularProducts from "./PopularProducts";
import HomeServices from "./HomeServices";
import CatagorySlider from "./CatagorySlider";
import Recomended from "./Recomended";
import ComingSoon from "./ComingSoon";
import HomeSlider from "./HomeSlider";

export default class landing extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <div id="Content">
          <div class="content_wrapper clearfix">
            <div class="sections_group">
              <div class="entry-content">
                <div class="section flv_sections_6" id="start">
                  <div class="section_wrapper clearfix">
                    <div class="items_group clearfix">
                      <SpecialOffers />
                      {/* Populaar products section */}
                      <div class="column one column_fancy_heading ">
                        <div class="fancy_heading fancy_heading_arrows">
                          <div class="animate" data-anim-type="zoomIn">
                            <h2 class="title">
                              <i class="icon-right-dir" />
                              Our Popular Products
                              <i class="icon-left-dir" />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <PopularProducts />

                      <div class="column one column_column">
                        <div class="column_attr ">
                          <h5 class="flv_style_4">Our Services</h5>
                          <HomeServices />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column one column_fancy_heading">
              <div class="fancy_heading fancy_heading_icon">
                <div class="animate" data-anim-type="zoomInLeftLarge">
                  <h2 class="title">
                    Still not sure? See our{" "}
                    <span id="thematic-websites" class="themecolor">
                      catagory list
                    </span>
                  </h2>
                </div>
                <div class="inside">
                  <span class="big">
                    We have more than 30+ product catagories that perfectly fit
                    to your type of needs. Choose a catagorry and buy the
                    product of your need.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <CatagorySlider />
          <div class="column one column_fancy_heading ">
            <div class="fancy_heading fancy_heading_arrows">
              <div class="animate" data-anim-type="zoomIn">
                <h2 class="title">
                  <i class="icon-right-dir" />
                  Recomended for you
                  <i class="icon-left-dir" />
                </h2>
              </div>
            </div>
          </div>
          {/* RECOMENDED PRODUCTS SECTION */}
          <div style={{ marginBottom: "30px" }}>
            <Recomended />
          </div>
        </div>
        <ComingSoon />
      </div>
    );
  }
}
