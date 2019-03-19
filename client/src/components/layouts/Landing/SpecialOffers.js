import React, { Component } from "react";

class SpecialOffers extends Component {
  render() {
    return (
      <div>
        <div class="column one-third column_icon_box">
          <div class="trailer_box">
            <div class="animate" data-anim-type="fadeInLeft">
              <a href="#">
                <img
                  class="scale-with-grid"
                  src="images/home_shop_box_1.jpg"
                  alt="Spring<br>Summer '14"
                />
                <div class="desc">
                  <div class="subtitle">Armani</div>
                  <h2>
                    Spring
                    <br />
                    Summer '14
                  </h2>
                  <div class="line" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="column one-third column_icon_box">
          <div class="trailer_box">
            <div class="animate" data-anim-type="fadeInUp">
              <a href="#">
                <img
                  class="scale-with-grid"
                  src="images/home_shop_box_2.jpg"
                  alt="Fall<br>Winter '13/14"
                />
                <div class="desc">
                  <div class="subtitle">Dolce &amp; Gabbana</div>
                  <h2>
                    Fall
                    <br />
                    Winter '13/14
                  </h2>
                  <div class="line" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="column one-third column_icon_box">
          <div class="animate" data-anim-type="fadeInRightLarge">
            <div class="trailer_box">
              <div class="animate" data-anim-type="fadeInRight">
                <img
                  class="scale-with-grid"
                  src="images/home_shop_box_3.jpg"
                  alt="Prices cut<br>Up to 70%"
                />
                <div class="desc">
                  <div class="subtitle">Sale</div>
                  <h2>
                    Prices cut
                    <br />
                    Up to 70%
                  </h2>
                  <div class="line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SpecialOffers;
