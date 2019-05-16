import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="page-footer center-on-small-only">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 ml-auto">
                            <h5 className="title social-section-title">Social Media</h5>
                            <div className="social-section text-md-left">
                                <ul className="text-center">
                                    <li>
                                        <span className="btn-floating  btn-fb waves-effect waves-light">
                                            <i className="fa fa-facebook"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-ins waves-effect waves-light">
                                            <i className="fa fa-instagram"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-tw waves-effect waves-light">
                                            <i className="fa fa-twitter"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-yt waves-effect waves-light">
                                            <i className="fa fa-youtube"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-li waves-effect waves-light">
                                            <i className="fa fa-linkedin"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-dribbble waves-effect waves-light">
                                            <i className="fa fa-dribbble left"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-pin waves-effect waves-light">
                                            <i className="fa fa-pinterest"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="btn-floating  btn-gplus waves-effect waves-light">
                                            <i className="fa fa-google-plus"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Delivery</h5>
                            <ul>
                                <li>
                                    <span>Store Delivery</span>
                                </li>
                                <li>
                                    <span>Online Delivery</span>
                                </li>
                                <li>
                                    <span>Delivery Terms &amp; Conditions</span>
                                </li>
                                <li>
                                    <span>Tracking</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Need help?</h5>
                            <ul>
                                <li>
                                    <span>FAQ</span>
                                </li>
                                <li>
                                    <span>Contact Us</span>
                                </li>
                                <li>
                                    <span>Return Policy</span>
                                </li>
                                <li>
                                    <span>Product Registration</span>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-4">
                            <h5 className="title">Instagram Photos</h5>
                            <ul className="instagram-photos">
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="view overlay hm-white-slight z-depth-1">
                                        <img alt='' className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" />
                                        <span>
                                            <div className="mask waves-light waves-effect waves-light"></div>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container-fluid">
                        © 2016 Copyright:
            <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
