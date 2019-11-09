import React , {Component} from 'react';

class Footer extends Component{

    render() {
        let {socialNav, contact, address} = this.props.footer;
        return (
            <footer className="footer">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h4>Address</h4>
                                <p>{address}</p>
                            </div> {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <h4>Connect</h4>
                                <div className="social-icons">
                                    {socialNav.map((each, index) =>  <a href={each.href} className="social-icon" key={index}><i className={each.className}/></a> )}
                                </div> {/* end .social-icons */}
                            </div> {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <h4>Contact</h4>
                                <p>{contact}</p>
                            </div> {/* end .col-sm-4 */}
                        </div> {/* end .row */}
                    </div> {/* end .container */}
                </div> {/* end .footer */}
                <div className="bottom">Copyright © Sility. All Rights Reserved.</div> {/* end .bottom */}
            </footer>
        );
    }
}
export default Footer;