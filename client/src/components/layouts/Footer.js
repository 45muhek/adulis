import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="Footer" class="clearfix">
        {/*    Footer - First area */}
        <div class="footer_action">
          <div class="container">
            {/*    One full width row*/}
            <div class="column one column_column">
              <a
                href="http://bit.ly/1M6lijQ"
                class="flv_footer_grey"
                target="_blank"
              >
                <span class="flv_font_18">
                  If you hava any question on{" "}
                  <span class="themecolor">Adulis</span> ,feel free to check our
                  <span class="flv_color_white"> FAQ </span> or
                  <span class="flv_color_white"> CONTACT US NOW!</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="widgets_wrapper">
          <div class="container">
            <div class="one-fourth column">
              {/* Text Area */}
              <aside id="text-7" class="widget widget_text">
                <div class="textwidget">
                  <img src="images/logo_footer.png" alt="" />
                  <p>
                    <span class="big">
                      We want to make marketing simple and accessable across
                      Ethiopia, in a way of preventing inflation.
                    </span>
                  </p>
                  <p>
                    Along with the cash on delivery option, we support
                    <span
                      class="tooltip"
                      data-tooltip="mobile based transaction"
                    >
                      USSD based mobile banking
                    </span>{" "}
                    mechanism of these banks
                  </p>
                  <a href="#" class="icon_bar icon_bar_facebook icon_bar_small">
                    <span class="t">
                      <i class="icon-facebook" />
                    </span>
                    <span class="b">
                      <i class="icon-facebook" />
                    </span>
                  </a>
                  <a href="#" class="icon_bar icon_bar_google icon_bar_small">
                    <span class="t">
                      <i class="icon-gplus" />
                    </span>
                    <span class="b">
                      <i class="icon-gplus" />
                    </span>
                  </a>
                  <a href="#" class="icon_bar icon_bar_twitter icon_bar_small">
                    <span class="t">
                      <i class="icon-twitter" />
                    </span>
                    <span class="b">
                      <i class="icon-twitter" />
                    </span>
                  </a>
                  <a href="#" class="icon_bar icon_bar_vimeo icon_bar_small">
                    <span class="t">
                      <i class="icon-vimeo" />
                    </span>
                    <span class="b">
                      <i class="icon-vimeo" />
                    </span>
                  </a>
                  <a href="#" class="icon_bar icon_bar_youtube icon_bar_small">
                    <span class="t">
                      <i class="icon-play" />
                    </span>
                    <span class="b">
                      <i class="icon-play" />
                    </span>
                  </a>
                </div>
              </aside>
            </div>
            <div class="one-fourth column">
              {/*    Recent Comments Area */}
              <aside class="widget widget_mfn_recent_comments">
                <h4>Commng soon</h4>
                <div class="Recent_comments">
                  <ul>
                    <li>
                      <span class="date_label">Augest 31, 2019</span>
                      <p>
                        <i class="icon-user" />
                        <strong>king size bedshits</strong> - full cotton
                        <a
                          href="blog-single-content-builder.html#comment-7"
                          title="For 1200 birr"
                        >
                          &nbsp;For 1200 birr
                        </a>
                      </p>
                    </li>
                    <li>
                      <span class="date_label">September 1, 2019</span>
                      <p>
                        <i class="icon-user" />
                        <strong>Gamming pc</strong> - Dell
                        <a
                          href="blog-single-content-builder.html#comment-6"
                          title="Dell core I5, 1TB, Nvdiea GTX - 4GB"
                        >
                          &nbsp; For 19000 birr
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div class="one-fourth column">
              {/*    Recent posts */}
              <aside class="widget widget_mfn_recent_posts">
                <h4>Featured products</h4>
                <div class="Recent_posts">
                  <ul>
                    <li class="post-175 post  format-standard has-post-thumbnail  category-motion category-photography category-uncategorized tag-eclipse tag-grid tag-mysql">
                      <a href="blog-single-content-builder.html">
                        <div class="photo">
                          <img
                            width="80"
                            height="80"
                            src="images/beauty_portfolio_2-80x80.jpg"
                            class="scale-with-grid wp-post-image"
                            alt="beauty_portfolio_2"
                          />
                          <span class="c">4</span>
                        </div>
                        <div class="desc">
                          <h6>Product 1</h6>
                          <span class="date">
                            <i class="icon-clock" />
                            3900 Birr
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="post-186 post  format-image has-post-thumbnail  category-mobile category-photography category-uncategorized tag-design tag-html5 ">
                      <a href="blog-single-vertical-photo.html">
                        <div class="photo">
                          <img
                            width="80"
                            height="80"
                            src="images/blog_vertical-80x80.jpg"
                            class="scale-with-grid wp-post-image"
                            alt="blog_vertical"
                          />
                          <span class="c">10</span>
                        </div>
                        <div class="desc">
                          <h6>Product 2</h6>
                          <span class="date">
                            <i class="icon-clock" />
                            50 birr
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div class="one-fourth column">
              {/*    Text Area */}
              <aside id="text-8" class="widget widget_text">
                <h4>Shortcut links</h4>
                <div class="textwidget">
                  <ul class="list_mixed">
                    <li class="list_check">
                      <a href="#">Women Clothing</a> - scarfs, cots, habesha
                      clothes
                    </li>
                    <li class="list_star">
                      <a href="#">Shoes For Men</a> Boots, Nikies, Adidas
                    </li>
                    <li class="list_idea">
                      <a href="#">For your bedroom</a> Bedsheets, comforts
                    </li>
                    <li class="list_check">
                      <a href="#">Kitchen accessory</a> pan, pizza cooker,
                      elecronic kittle
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/*    Footer copyright*/}
        <div class="footer_copy">
          <div class="container">
            <div class="column one">
              <a id="back_to_top" href="#" class="button button_left button_js">
                {" "}
                <span class="button_icon">
                  {" "}
                  <i class="icon-up-open-big" />{" "}
                </span>{" "}
              </a>
              <div class="copyright">
                &copy; 2019 Adulis - All rights Reserved &nbsp;
                <a href="#" target="_blank">
                  Tearms and policy
                </a>{" "}
                &nbsp;
                <a href="#" target="_blank">
                  Privacy statment
                </a>
              </div>
              {/*   Social info area*/}
              <ul class="social">
                <li class="skype">
                  <a href="#" title="Skype">
                    <i class="icon-skype" />
                  </a>
                </li>
                <li class="facebook">
                  <a
                    href="http://www.facebook.com/Beantown-Themes-653197714728193"
                    title="Facebook"
                  >
                    <i class="icon-facebook" />
                  </a>
                </li>
                <li class="googleplus">
                  <a href="http://plus.google.com/" title="Google+">
                    <i class="icon-gplus" />
                  </a>
                </li>
                <li class="twitter">
                  <a href="http://twitter.com/Muffin_Group" title="Twitter">
                    <i class="icon-twitter" />
                  </a>
                </li>
                <li class="vimeo">
                  <a href="http://vimeo.com/" title="Vimeo">
                    <i class="icon-vimeo" />
                  </a>
                </li>
                <li class="youtube">
                  <a href="#" title="Dribbble">
                    <i class="icon-play" />
                  </a>
                </li>
                <li class="flickr">
                  <a href="http://www.flickr.com/" title="Flickr">
                    <i class="icon-flickr" />
                  </a>
                </li>
                <li class="pinterest">
                  <a href="http://www.pinterest.com/" title="Pinterest">
                    <i class="icon-pinterest" />
                  </a>
                </li>
                <li class="dribbble">
                  <a href="https://dribbble.com" title="Dribbble">
                    <i class="icon-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
