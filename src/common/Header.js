import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    render(){
        let {socialNav, sectionNav} = this.props.header;
        return(
            <header className="header">
                <div className="top clearfix">
                    <Link to="/contact"  className="available"><i className="ion-ios-email-outline" /><span>Available Now</span></Link>
                    <div className="right-icons">
                        <a href className="open-search header-open-search"><i className="md md-search" /></a>
                        <a href className="download"><i className="md md-file-download" /></a>
                        <a href className="share"><i className="md md-more-vert" /></a>
                    </div> {/* end .right-icons */}
                    {/* Popup */}
                    <div className="popup">
                        <nav className="social-nav">
                            <ul className="list-unstyled">
                                {socialNav.map((each, index) =>   <li key={index}><a href = {each.href}>{each.name}</a></li>)}
                            </ul> {/* end .list-unstyled */}
                        </nav> {/* end .social-nav */}
                    </div> {/* end .popup */}
                </div> {/* end .top */}
                <div className="bottom clearfix">
                    <div className="title"><a href="/">Wind Blade</a></div>
                    <div className="header-action-button-wrapper">
                        <a href className="header-action-button action-button"><i className="md md-add" /></a>
                    </div> {/* end .header-action-button-wrapper */}
                    <a href className="responsive-menu-open">Menu <i className="fa fa-bars" /></a>
                    <nav className="main-nav">
                        <ul className="list-unstyled">
                            {sectionNav.map((each, index) => <li className={index === 0? "active" :""} key={index}> <Link to={each.href}>{each.name}</Link></li>)}
                        </ul>
                    </nav> {/* end .main-nav */}
                </div> {/* end .bottom */}
            </header>
        )
    }
}


export default Header;