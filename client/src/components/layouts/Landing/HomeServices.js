import React, { Component } from "react";
class HomeServices extends Component {
  render() {
    return (
      <div>
        <div class="column one-fourth column_icon_box">
          <div class="icon_box icon_position_top no_border">
            <a href="#">
              <div class="image_wrapper">
                <img
                  src="images/landing_box_1.png"
                  alt="Aenean fermen"
                  class="scale-with-grid"
                />
              </div>
              <div class="desc_wrapper">
                <h4>Aenean fermen</h4>
                <div class="desc">
                  Vitae adipiscing turpis. Aenean ligula nibo molestie id
                  vivide.
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*One Fourth (1/4) Column */}
        <div class="column one-fourth column_icon_box">
          <div class="icon_box icon_position_top no_border">
            <a href="#">
              <div class="image_wrapper">
                <img
                  src="images/landing_box_2.png"
                  alt="Quisque lorem"
                  class="scale-with-grid"
                />
              </div>
              <div class="desc_wrapper">
                <h4>Quisque lorem</h4>
                <div class="desc">
                  Vitae adipiscing turpis. Aenean ligula nibo molestie id
                  vivide.
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*  One Fourth (1/4) Column  */}
        <div class="column one-fourth column_icon_box">
          <div class="icon_box icon_position_top no_border">
            <a href="#">
              <div class="image_wrapper">
                <img
                  src="images/landing_box_3.png"
                  alt="Gravida vitae"
                  class="scale-with-grid"
                />
              </div>
              <div class="desc_wrapper">
                <h4>Gravida vitae</h4>
                <div class="desc">
                  Vitae adipiscing turpis. Aenean ligula nibo molestie id
                  vivide.
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*One Fourth (1/4) Column */}
        <div class="column one-fourth column_icon_box">
          <div class="icon_box icon_position_top no_border">
            <a href="#">
              <div class="image_wrapper">
                <img
                  src="images/landing_box_4.png"
                  alt="Sapien massa"
                  class="scale-with-grid"
                />
              </div>
              <div class="desc_wrapper">
                <h4>Sapien massa</h4>
                <div class="desc">
                  Vitae adipiscing turpis. Aenean ligula nibo molestie id
                  vivide.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeServices;
