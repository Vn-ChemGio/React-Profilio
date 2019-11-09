import React, {Component} from 'react';

class About extends Component {
    render() {
        return (

        <section id="section2">
            <div className="container">
                <h2>About Me</h2>
                <div className="row">
                    <div className="col-sm-3">
                        <img src="images/man02.png" alt="man" className="img-responsive section-img"/>
                    </div>
                    {/* end .col-sm-3 */}
                    <div className="col-sm-9">
                        <h3 className="small-margin-bottom">Benjamin Thomson</h3>
                        <h5>Web &amp; UX Designer</h5>
                        <p>Ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo nemo enim ipsam voluptatem. Sed ut perspiciatis unde
                            omnis iste natus error sit voluptatem accusantium doloremque latu dantium, totam
                            rem aperiam, eaque ipsa quae ab illo tempor dignissim at. </p>
                        <div className="signature"><img src="images/signature.png" alt="signature"
                                                        className="img-responsive"/></div>
                        <ul className="list-unstyled text-uppercase">
                            <li><b>Date Of Birth:</b> 24 Jan 1989</li>
                            <li><b>Phone:</b> 012-345-6789</li>
                            <li><b>Email:</b> Sility@example.com</li>
                            <li><b>Address:</b> 123 Sility, South Corner Street, Melborne, Australia.</li>
                            <li><b>Website:</b> http://www.example.com</li>
                        </ul>
                        {/* end .list-unstyled */}
                        <div className="spacer"/>
                        <h3>What I'm Doing</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="service">
                                    <div className="icon"><i className="ion-monitor"/></div>
                                    <h5>Web &amp; UX Design</h5>
                                </div>
                                {/* end .service */}
                            </div>
                            {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <div className="service">
                                    <div className="icon"><i className="ion-iphone"/></div>
                                    <h5>App Development</h5>
                                </div>
                                {/* end .service */}
                            </div>
                            {/* end .col-sm-4 */}
                            <div className="col-sm-4">
                                <div className="service">
                                    <div className="icon"><i className="ion-trophy"/></div>
                                    <h5>Marketing</h5>
                                </div>
                                {/* end .service */}
                            </div>
                            {/* end .col-sm-4 */}
                        </div>
                        {/* end .row */}
                    </div>
                    {/* end .col-sm-9 */}
                </div>
                {/* end .row */}
            </div>
            {/* end .container */}
        </section>
    )
    }
}

export default About;