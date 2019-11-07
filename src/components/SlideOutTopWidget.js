import React , {Component} from  'react';
class SlideOutTopWidget extends Component{
    render() {
        return (
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
                        <a href={"/xxxx"}><img src="images/instagram01.jpg" alt="alt text" className="img-responsive" /></a>
                        <a href={"/xxxx"}><img src="images/instagram02.jpg" alt="alt text" className="img-responsive" /></a>
                        <a href={"/xxxx"}><img src="images/instagram03.jpg" alt="alt text" className="img-responsive" /></a>
                        <a href={"/xxxx"}><img src="images/instagram04.jpg" alt="alt text" className="img-responsive" /></a>
                        <a href={"/xxxx"}><img src="images/instagram05.jpg" alt="alt text" className="img-responsive" /></a>
                        <a href={"/xxxx"}><img src="images/instagram06.jpg" alt="alt text" className="img-responsive" /></a>
                    </div> {/* end .instagram */}
                </div> {/* end .slide-out-widget */}
            </div>
    );
    }
};

export default SlideOutTopWidget;