import React, {Component} from 'react';

class SlideOut extends Component{
    render() {
        return(
            <div className="slide-out">
                <header className="slide-out-header clearfix">
                    <div className="clearfix">
                        <a href className="slide-out-close pull-left"><i className="md md-close" /></a>
                        <a href className="open-search pull-right"><i className="md md-search" /></a>
                        <a href className="slide-out-share pull-right"><i className="md md-more-vert" /></a>
                    </div> {/* end .clearfix */}
                    {/* Popup */}
                    <div className="slide-out-popup">
                        <nav className="social-nav">
                            <ul className="list-unstyled">
                                <li><a href>Facebook</a></li>
                                <li><a href>Twitter</a></li>
                                <li><a href>Linkedin</a></li>
                                <li><a href>Google+</a></li>
                                <li><a href>Behance</a></li>
                            </ul> {/* end .list-unstyled */}
                        </nav> {/* end .social-nav */}
                    </div> {/* end .slide-out-popup */}
                    <div className="image"><img src="images/head01.png" alt="alt text" className="img-responsive" /></div>
                    <div className="content">
                        <h5>Benjamin Thomson</h5>
                        <span>Web &amp; UX Designer</span>
                    </div> {/* end .content */}
                    <div className="text-right">
                        <a href className="button link-button white icon-left"><i className="md md-file-download" />Download Resume</a>
                    </div> {/* end .text-right */}
                </header> {/* end .slide-out-header */}
                <div className="slide-out-widgets">
                    <div className="slide-out-widget">
                        <h4>Drink A Coffee With Me Today</h4>
                        <form action="scripts/contact.php" method="post" className="form-horizontal contact-form">
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="contact-name" name="contact-name" />
                                </div> {/* end .col-sm-9 */}
                            </div> {/* end .form-group */}
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Email</label>
                                <div className="col-sm-9">
                                    <input type="email" className="contact-email" name="contact-email" />
                                </div> {/* end .col-sm-9 */}
                            </div> {/* end .form-group */}
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Message</label>
                                <div className="col-sm-9">
                                    <textarea name="contact-message" className="contact-message" rows={3} defaultValue={""} />
                                </div> {/* end .col-sm-9 */}
                            </div> {/* end .form-group */}
                            <div className="form-group">
                                <div className="col-sm-9 col-sm-offset-3">
                                    <button type="submit" className="button solid-button purple">Send Message</button>
                                </div> {/* end .col-sm-9 */}
                            </div> {/* end .form-group */}
                            <div className="contact-loading alert alert-info form-alert">
                                <span className="message">Loading...</span>
                                <button type="button" className="close" data-hide="alert" aria-label="Close"><i className="fa fa-times" /></button>
                            </div>
                            <div className="contact-success alert alert-success form-alert">
                                <span className="message">Success!</span>
                                <button type="button" className="close" data-hide="alert" aria-label="Close"><i className="fa fa-times" /></button>
                            </div>
                            <div className="contact-error alert alert-danger form-alert">
                                <span className="message">Error!</span>
                                <button type="button" className="close" data-hide="alert" aria-label="Close"><i className="fa fa-times" /></button>
                            </div>
                        </form> {/* end contact-form */}
                    </div> {/* end .slide-out-widget */}
                    <div className="slide-out-widget">
                        <h4>Follow On Instagram</h4>
                        <div className="instagram">
                            <a href><img src="images/instagram01.jpg" alt="alt text" className="img-responsive" /></a>
                            <a href><img src="images/instagram02.jpg" alt="alt text" className="img-responsive" /></a>
                            <a href><img src="images/instagram03.jpg" alt="alt text" className="img-responsive" /></a>
                            <a href><img src="images/instagram04.jpg" alt="alt text" className="img-responsive" /></a>
                            <a href><img src="images/instagram05.jpg" alt="alt text" className="img-responsive" /></a>
                            <a href><img src="images/instagram06.jpg" alt="alt text" className="img-responsive" /></a>
                        </div> {/* end .instagram */}
                    </div> {/* end .slide-out-widget */}
                </div> {/* end .slide-out-widgets */}
            </div>
        )
    }
}

export default SlideOut;