import React, { Component } from "react";

export default class ComingSoon extends Component {
  render() {
    return (
      <div>
        <div class="section dark flv_section">
          <div class="section_wrapper clearfix">
            <div class="items_group clearfix">
              <div class="column one column_fancy_heading">
                <div class="fancy_heading fancy_heading_line">
                  <span class="slogan">That's not all ...</span>
                  <h2 class="title">Comming soon in Adulis</h2>
                </div>
              </div>

              <div class="flv_sections_16 section" id="slidingbox">
                <div class="section_wrapper clearfix">
                  <div class="items_group clearfix">
                    {/* One Third (1/3) Column */}
                    <div class="column one-third column_sliding_box">
                      <div class="sliding_box">
                        <a href="#">
                          <div class="photo_wrapper">
                            <img
                              class="scale-with-grid"
                              src="images/beautician_box_1.jpg"
                              alt="Aenean ligula"
                            />{" "}
                          </div>
                          <div class="desc_wrapper">
                            <h4>Aenean ligula</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* One Third (1/3) Column */}
                    <div class="column one-third column_sliding_box">
                      <div class="sliding_box">
                        <a href="#">
                          <div class="photo_wrapper">
                            <img
                              class="scale-with-grid"
                              src="images/beautician_box_2.jpg"
                              alt="Commodo volutpat"
                            />{" "}
                          </div>
                          <div class="desc_wrapper">
                            <h4>Commodo volutpat</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* One Third (1/3) Column */}
                    <div class="column one-third column_sliding_box">
                      <div class="sliding_box">
                        <a href="#">
                          <div class="photo_wrapper">
                            <img
                              class="scale-with-grid"
                              src="images/beautician_box_3.jpg"
                              alt="Quisque cursus"
                            />{" "}
                          </div>
                          <div class="desc_wrapper">
                            <h4>Quisque cursus</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
