import React, {Component} from 'react';

class Education extends Component {
    render() {
        return (
            <section id="section6">
                <div className="container">
                    <h2>Portfolio</h2>
                    <div className="portfolio-wrapper">
                        <div id="portfolio-filters" className="portfolio-filters">
                            <button className="button solid-button white-purple small" data-filter="*">Show
                                All
                            </button>
                            <button className="button solid-button white-purple small"
                                    data-filter=".branding">Branding
                            </button>
                            <button className="button solid-button white-purple small"
                                    data-filter=".print">Print
                            </button>
                            <button className="button solid-button white-purple small"
                                    data-filter=".motion">Motion
                            </button>
                            <button className="button solid-button white-purple small"
                                    data-filter=".websites">Websites
                            </button>
                        </div>
                        <div id="portfolio" className="portfolio">
                            <div className="item branding print">
                                <img src="images/portfolio01.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 01</span>
                                        <span className="category">Branding, Print</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item motion">
                                <img src="images/portfolio02.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 02</span>
                                        <span className="category">Motion</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item print">
                                <img src="images/portfolio03.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 03</span>
                                        <span className="category">Print</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item print branding websites">
                                <img src="images/portfolio04.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 04</span>
                                        <span className="category">Branding, Websites</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item print branding">
                                <img src="images/portfolio05.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 05</span>
                                        <span className="category">Print, Branding</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item motion">
                                <img src="images/portfolio06.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 06</span>
                                        <span className="category">Motion</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item motion">
                                <img src="images/portfolio07.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 07</span>
                                        <span className="category">Motion</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item print">
                                <img src="images/portfolio08.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 08</span>
                                        <span className="category">Print</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item motion">
                                <img src="images/portfolio09.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 09</span>
                                        <span className="category">Motion</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                            <div className="item websites">
                                <img src="images/portfolio10.jpg" alt="alt text" className="img-responsive"/>
                                <a href="single-portfolio.html" className="overlay">
                                    <div className="background"/>
                                    <div className="meta">
                                        <span className="title">Portfolio Item - 10</span>
                                        <span className="category">Websites</span>
                                    </div>
                                    {/* end .meta */}
                                </a> {/* end .overlay */}
                            </div>
                            {/* end .item */}
                        </div>
                        {/* end .portfolio */}
                        <div className="portfolio-load-more">
                            <a href="single-portfolio.html" className="button solid-button white icon-right">Load
                                More Work<i className="md-refresh"/></a>
                        </div>
                        {/* end .portfolio-load-more */}
                    </div>
                    {/* end .portfolio-wrapper */}
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Education;