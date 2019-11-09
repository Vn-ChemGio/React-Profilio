import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <section id="section4">
                <div className="container">
                    <h2>8 Years Experience</h2>
                    <div className="experience-timeline">
                        <div className="experience-block clearfix">
                            <div className="meta">
                                <span className="year">2012 - Current</span>
                                <span className="company">Themeforest</span>
                            </div>
                            {/* end .meta */}
                            <div className="content">
                                <h5>Senior Web &amp; UX Designer</h5>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore
                                    et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                            {/* end .content */}
                            <div className="icon">
                                <i className="ion-easel"/>
                            </div>
                            {/* end .icon */}
                            <div className="line"/>
                        </div>
                        {/* end .experience-block */}
                        <div className="experience-block clearfix">
                            <div className="meta">
                                <span className="year">2008 - 2012</span>
                                <span className="company">Graphicriver</span>
                            </div>
                            {/* end .meta */}
                            <div className="content">
                                <h5>Graphic Designer</h5>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore
                                    et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                            {/* end .content */}
                            <div className="icon">
                                <i className="ion-images"/>
                            </div>
                            {/* end .icon */}
                            <div className="line"/>
                        </div>
                        {/* end .experience-block */}
                        <div className="experience-block clearfix">
                            <div className="meta">
                                <span className="year">2006 - 2008</span>
                                <span className="company">Codecanyon</span>
                            </div>
                            {/* end .meta */}
                            <div className="content">
                                <h5>Web Developer</h5>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore
                                    et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                            {/* end .content */}
                            <div className="icon">
                                <i className="ion-card"/>
                            </div>
                            {/* end .icon */}
                        </div>
                        {/* end .experience-block */}
                    </div>
                    {/* end .experience-timeline */}
                    {/* Testimonials */}
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="testimonial-slider owl-carousel">
                                <div>
                                    <div className="image"><img src="images/testimonial.jpg" alt="alt text"/>
                                    </div>
                                    <div className="sep"/>
                                    <p>" Awesome to work with. Incredibly organized, easy to communicate with,
                                        responsive with next iterations, and beautiful work. "</p>
                                    <span className="author">swetain , CEO of Texco Company</span>
                                </div>
                                <div>
                                    <div className="image"><img src="images/testimonial.jpg" alt="alt text"/>
                                    </div>
                                    <div className="sep"/>
                                    <p>" Awesome to work with. Incredibly organized, easy to communicate with,
                                        responsive with next iterations, and beautiful work. "</p>
                                    <span className="author">swetain , CEO of Texco Company</span>
                                </div>
                                <div>
                                    <div className="image"><img src="images/testimonial.jpg" alt="alt text"/>
                                    </div>
                                    <div className="sep"/>
                                    <p>" Awesome to work with. Incredibly organized, easy to communicate with,
                                        responsive with next iterations, and beautiful work. "</p>
                                    <span className="author">swetain , CEO of Texco Company</span>
                                </div>
                            </div>
                            {/* end .testimonial-slider */}
                        </div>
                        {/* end .col-sm-8 */}
                    </div>
                    {/* end .row */}
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Experience;