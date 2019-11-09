import React, {Component} from 'react';

class Education extends Component {
    render() {
        return (
            <section id="section8">
                <div className="container">
                    <h2>Get In Touch With Me</h2>
                    <div className="row">
                        <div className="col-sm-5">
                            <h5>Contact Address</h5>
                            <ul className="list-icons list-unstyled">
                                <li><i className="ion-ios-location-outline"/>123 Sility, South Corner
                                    Street,<br/>Melbornem Australia.
                                </li>
                                <li><i className="ion-iphone"/>Phone: +61 012 345 6789</li>
                                <li><i className="ion-ios-email-outline"/>Email: <a
                                    href="mailto:example@gmail.com">example@gmail.com</a></li>
                                <li><i className="ion-ios-home-outline"/>Website: <a href>info@sility.com</a>
                                </li>
                            </ul>
                            <div className="spacer"/>
                            <div className="social-icons">
                                <a href={"/xxxx"} className="social-icon"><i className="fa fa-facebook"/></a>
                                <a href={"/xxxx"} className="social-icon"><i className="fa fa-twitter"/></a>
                                <a href={"/xxxx"} className="social-icon"><i className="fa fa-google-plus"/></a>
                                <a href={"/xxxx"} className="social-icon"><i className="fa fa-behance"/></a>
                                <a href={"/xxxx"} className="social-icon"><i className="fa fa-dribbble"/></a>
                            </div>
                            {/* end .social-icons */}
                            <div className="spacer"/>
                        </div>
                        <div className="col-sm-7">
                            <h5>Contact Form</h5>
                            <form action="scripts/contact.php" method="post"
                                  className="form-horizontal contact-form">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="contact-name" name="contact-name"/>
                                    </div>
                                    {/* end .col-sm-10 */}
                                </div>
                                {/* end .form-group */}
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="contact-email" name="contact-email"/>
                                    </div>
                                    {/* end .col-sm-10 */}
                                </div>
                                {/* end .form-group */}
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Message</label>
                                    <div className="col-sm-10">
                                                <textarea name="contact-message" className="contact-message" rows={3}
                                                          defaultValue={""}/>
                                    </div>
                                    {/* end .col-sm-10 */}
                                </div>
                                {/* end .form-group */}
                                <div className="form-group">
                                    <div className="col-sm-10 col-sm-offset-2">
                                        <button type="submit" className="button solid-button purple">Send
                                            Message
                                        </button>
                                    </div>
                                    {/* end .col-sm-10 */}
                                </div>
                                {/* end .form-group */}
                                <div className="contact-loading alert alert-info form-alert">
                                    <span className="message">Loading...</span>
                                    <button type="button" className="close" data-hide="alert"
                                            aria-label="Close"><i className="fa fa-times"/></button>
                                </div>
                                <div className="contact-success alert alert-success form-alert">
                                    <span className="message">Success!</span>
                                    <button type="button" className="close" data-hide="alert"
                                            aria-label="Close"><i className="fa fa-times"/></button>
                                </div>
                                <div className="contact-error alert alert-danger form-alert">
                                    <span className="message">Error!</span>
                                    <button type="button" className="close" data-hide="alert"
                                            aria-label="Close"><i className="fa fa-times"/></button>
                                </div>
                            </form>
                            {/* end contact-form */}
                        </div>
                    </div>
                    <div className="map" id="map"/>
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Education;