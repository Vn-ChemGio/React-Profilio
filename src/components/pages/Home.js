import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <section id="section1" className="no-padding-bottom active">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 vertical-center padding-fix">
                            <h1>Design<sup>+</sup> Develope<sup>+</sup> Interactive<sup>+</sup> Art<sup>+</sup>
                            </h1>
                            <p>Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and UX design. I
                                am worked on a variety of brands and with agencies both big and small.</p>
                            <p className="button-row"><a href={"/xxxx"} className="button solid-button white">Hire
                                Me
                                Now</a><a href={"/xxxx"} className="button solid-button purple">Download CV</a></p>
                        </div>
                        {/* end .col-sm-7 */}
                        <div className="col-sm-5 vertical-center">
                            <img src="images/man01.png" alt="man" className="img-responsive section-img"/>
                        </div>
                        {/* end .col-sm-5 */}
                    </div>
                    {/* end .row */}
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Home;