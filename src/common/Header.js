import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <header className="header">
                <div className="top clearfix">
                    <a href="#section8" className="available"><i className="ion-ios-email-outline" /><span>Available For Freelance</span></a>
                    <div className="right-icons">
                        <a href className="open-search header-open-search"><i className="md md-search" /></a>
                        <a href className="download"><i className="md md-file-download" /></a>
                        <a href className="share"><i className="md md-more-vert" /></a>
                    </div> {/* end .right-icons */}
                    {/* Popup */}
                    <div className="popup">
                        <nav className="social-nav">
                            <ul className="list-unstyled">
                                <li><a href>Facebook</a></li>
                                <li><a href>Twitter</a></li>
                                <li><a href>Linkedin</a></li>
                                <li><a href>Google+</a></li>
                                <li><a href>Behance</a></li>
                            </ul> {/* end .list-unstyled */}
                        </nav> {/* end .social-nav */}
                    </div> {/* end .popup */}
                </div> {/* end .top */}
                <div className="bottom clearfix">
                    <div className="title"><a href="index2.html">Sility</a></div>
                    <div className="header-action-button-wrapper">
                        <a href className="header-action-button action-button"><i className="md md-add" /></a>
                    </div> {/* end .header-action-button-wrapper */}
                    <a href className="responsive-menu-open">Menu <i className="fa fa-bars" /></a>
                    <nav className="main-nav">
                        <ul className="list-unstyled">
                            <li className="active"><a href="#section1">Home</a></li>
                            <li><a href="#section2">About</a></li>
                            <li><a href="#section3">Skill</a></li>
                            <li><a href="#section4">Experience</a></li>
                            <li><a href="#section5">Education</a></li>
                            <li><a href="#section6">Work</a></li>
                            <li><a href="#section7">Blog</a></li>
                            <li><a href="#section8">Contact</a></li>
                        </ul>
                    </nav> {/* end .main-nav */}
                </div> {/* end .bottom */}
            </header> 
        )
    }
}


export default Header;