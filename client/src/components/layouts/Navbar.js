import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                {/* Hidden Top Area */}
                <div id="Sliding-top">
                    <div className="widgets_wrapper">
                        <div className="container">
                            <div className="one-fourth column">
                                {/* Login form */}
                                <aside id="widget_mfn_login-2" className="widget widget_mfn_login">
                                    <div className="mfn-login">
                                        <h4>Login | Register</h4>
                                        <form name="loginform" id="loginform" action="#" method="post">
                                            <p className="login-username">
                                                <label htmlFor="user_login">Username</label>
                                                <input type="text" name="log" id="user_login" className="input" defaultValue size={20} />
                                            </p>
                                            <p className="login-password">
                                                <label htmlFor="user_pass">Password</label>
                                                <input type="password" name="pwd" id="user_pass" className="input" defaultValue size={20} />
                                            </p>
                                            <p className="login-submit">
                                                <input type="submit" name="wp-submit" id="wp-submit" className="button-primary" defaultValue="Log In" />
                                                <input type="hidden" name="redirect_to" defaultValue="#" />
                                            </p>
                                        </form>
                                        <div className="links">
                                            <a href="#">Register</a><span className="sep">|</span><a href="#">Lost your password?</a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="one-fourth column">
                                {/* Text Area */}
                                <aside id="text-10" className="widget widget_text">
                                    <div className="textwidget">
                                        <p>
                                            <span className="big">We reply on all questions within</span>
                                        </p><span className="themecolor flv_header_number">24 h</span>
                                        <div className="hr_dots flv_dots">
                                            <span /><span /><span />
                                        </div>
                                        <p className="flv_center">
                                            <span className="flv_grey">We offer support for our customers</span>
                                            <br />
                                            <b><i className="icon-clock" /> Mon - Fri 8:00am - 6:00pm <span className="tooltip" data-tooltip="we are located in Europe">(GMT +1)</span> </b>
                                        </p>
                                    </div>
                                </aside>
                            </div>
                            <div className="one-fourth column">
                                {/* Text Area */}
                                <aside id="text-11" className="widget widget_text">
                                    <div className="textwidget">
                                        <h5 className="flv_margin_b_5"><i className="icon-mail-line" /> Our address:</h5>
                                        <p className="flv_margin_l_26">
                                            <strong>Envato</strong>
                                            <br /> Level 13, 2 Elizabeth St,
                    <br /> Melbourne, Victoria 3000 Australia
                  </p>
                                        <h5 className="flv_margin_b_5"><i className="icon-phone" /> Have any questions?</h5>
                                        <p className="flv_margin_l_26">
                                            <a href="mailto:noreply@envato.com">noreply@envato.com</a>
                                        </p>
                                        <h5 className="flv_margin_b_5"><i className="icon-comment-line" /> Call us:</h5>
                                        <p className="flv_margin_l_26">
                                            <a href="tel:+61791803458">+61 (0) 7 9180 3458</a>
                                        </p>
                                    </div>
                                </aside>
                            </div>
                            <div className="one-fourth column">
                                {/* Text Area */}
                                <aside id="text-12" className="widget widget_text">
                                    <div className="textwidget"><img src="images/logo_footer.png" alt />
                                        <p>
                                            <span className="big">We love who we are and we are very proud to be the part of your business</span>
                                        </p>
                                        <p>
                                            Curabitur sit amet magna quam. Praesent in libero vel <span className="tooltip" data-tooltip="Quis accumsan dolor">turpis pellentesque</span> egestas sit amet vel nunc. Nunc lobortis
                                            dui neque quis.
                  </p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="sliding-top-control"><span><i className="plus icon-down-open-mini" /><i className="minus icon-up-open-mini" /></span></a>
                </div>
            </div>
        )
    }
}
export default Navbar;
