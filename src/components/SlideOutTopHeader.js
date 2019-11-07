import React, {Component} from 'react';

class SlideOutTopHeader extends Component{
    render() {
        return (
            <div>
                <header className="slide-out-header clearfix">
                    <div className="clearfix">
                        <a href={"/xxxx"} className="slide-out-close pull-left"><i className="md md-close" /></a>
                        <a href={"/xxxx"} className="open-search pull-right"><i className="md md-search" /></a>
                        <a href={"/xxxx"} className="slide-out-share pull-right"><i className="md md-more-vert" /></a>
                    </div> {/* end .clearfix */}
                    {/* Popup */}
                    <div className="slide-out-popup">
                        <nav className="social-nav">
                            <ul className="list-unstyled">
                                <li><a href={"/xxxx"}>Facebook</a></li>
                                <li><a href={"/xxxx"}>Twitter</a></li>
                                <li><a href={"/xxxx"}>Linkedin</a></li>
                                <li><a href={"/xxxx"}>Google+</a></li>
                                <li><a href={"/xxxx"}>Behance</a></li>
                            </ul> {/* end .list-unstyled */}
                        </nav> {/* end .social-nav */}
                    </div> {/* end .slide-out-popup */}
                    <div className="image"><img src="images/head01.png" alt="alt text" className="img-responsive" /></div>
                    <div className="content">
                        <h5>Benjamin Thomson</h5>
                        <span>Web &amp; UX Designer</span>
                    </div> {/* end .content */}
                    <div className="text-right">
                        <a href={"/xxxx"} className="button link-button white icon-left"><i className="md md-file-download" />Download Resume</a>
                    </div> {/* end .text-right */}
                </header> {/* end .slide-out-header */}
            </div>
        )
    }
}
export default SlideOutTopHeader;