import React , {Component} from 'react';

class FooterPage extends Component{
    render() {
        return (
            <footer className="footer">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h4>Address</h4>
                                <p>123 Sility, South Corner Street,<br />Melbornem Australia.</p>
                            </div> {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <h4>Connect</h4>
                                <div className="social-icons">
                                    <a href={"/xxxx"} className="social-icon"><i className="fa fa-facebook" /></a>
                                    <a href={"/xxxx"} className="social-icon"><i className="fa fa-twitter" /></a>
                                    <a href={"/xxxx"} className="social-icon"><i className="fa fa-google-plus" /></a>
                                    <a href={"/xxxx"} className="social-icon"><i className="fa fa-behance" /></a>
                                    <a href={"/xxxx"} className="social-icon"><i className="fa fa-dribbble" /></a>
                                </div> {/* end .social-icons */}
                            </div> {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <h4>Contact</h4>
                                <p>Tel: +61 123-456-7890<br />Mail: Sility@example.com</p>
                            </div> {/* end .col-sm-4 */}
                        </div> {/* end .row */}
                    </div> {/* end .container */}
                </div> {/* end .footer */}
                <div className="bottom">Copyright © Sility. All Rights Reserved.</div> {/* end .bottom */}
            </footer>
        );
    }
}
export default FooterPage;