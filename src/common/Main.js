import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <div className="sections">
                <div className="sections-wrapper clearfix">
                    {/* Home */}
                    <section id="section1" className="no-padding-bottom active">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7 vertical-center padding-fix">
                                    <h1>Design<sup>+</sup> Develope<sup>+</sup> Interactive<sup>+</sup> Art<sup>+</sup>
                                    </h1>
                                    <p>Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and UX design. I
                                        am worked on a variety of brands and with agencies both big and small.</p>
                                    <p className="button-row"><a href={"/xxxx"} className="button solid-button white">Hire Me
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
                    {/* end #section1 */}
                    {/* About */}
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
                    {/* end #section1 */}
                    {/* Skills */}
                    <section id="section3">
                        <div className="container">
                            <h2>My Skills Values</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4>Technical Skills</h4>
                                    <label className="progress-bar-label">Wordpress</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={85}
                                             aria-valuemin={0} aria-valuemax={100}>
                                            <span>85%</span>
                                        </div>
                                        {/* end .progress-bar */}
                                    </div>
                                    {/* end .progress */}
                                    <label className="progress-bar-label">Photoshop</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={99}
                                             aria-valuemin={0} aria-valuemax={100}>
                                            <span>99%</span>
                                        </div>
                                        {/* end .progress-bar */}
                                    </div>
                                    {/* end .progress */}
                                    <label className="progress-bar-label">HTML&amp;CSS</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                            <span>75%</span>
                                        </div>
                                        {/* end .progress-bar */}
                                    </div>
                                    {/* end .progress */}
                                    <label className="progress-bar-label">Javascript</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={67}
                                             aria-valuemin={0} aria-valuemax={100}>
                                            <span>67%</span>
                                        </div>
                                        {/* end .progress-bar */}
                                    </div>
                                    {/* end .progress */}
                                </div>
                                {/* end .col-sm-6 */}
                                <div className="col-sm-6">
                                    <h4>Knowledge</h4>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="list-icons purple bold-list">
                                                <li><i className="md-arrow-forward"/>Install and Configure</li>
                                                <li><i className="md-arrow-forward"/>Web Usability</li>
                                                <li><i className="md-arrow-forward"/>Digital Painting</li>
                                                <li><i className="md-arrow-forward"/>Grid and Layout</li>
                                                <li><i className="md-arrow-forward"/>Mobile App Design</li>
                                                <li><i className="md-arrow-forward"/>Graphical Design</li>
                                                <li><i className="md-arrow-forward"/>SEO Optimization</li>
                                            </ul>
                                        </div>
                                        {/* end .col-sm-6 */}
                                        <div className="col-sm-6">
                                            <ul className="list-icons purple bold-list">
                                                <li><i className="md-arrow-forward"/>UX and UI Design</li>
                                                <li><i className="md-arrow-forward"/>Logo Design</li>
                                                <li><i className="md-arrow-forward"/>3D Animation &amp; Visual Effects
                                                </li>
                                                <li><i className="md-arrow-forward"/>Audio Video Editing</li>
                                                <li><i className="md-arrow-forward"/>Photography</li>
                                                <li><i className="md-arrow-forward"/>Web Development</li>
                                                <li><i className="md-arrow-forward"/>Digital Marketing</li>
                                            </ul>
                                        </div>
                                        {/* end .col-sm-6 */}
                                    </div>
                                    {/* end .row */}
                                </div>
                                {/* end .col-sm-6 */}
                            </div>
                            {/* end .row */}
                            <div className="spacer"/>
                            <h4>Language Skills</h4>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="circle-progress-wrapper clearfix">
                                        <div className="circle-progress">
                                            <input type="text" className="dial" defaultValue={99} data-color="#7c4dff"
                                                   data-from={0} data-to={99}/>
                                        </div>
                                        {/* end .circle-progress */}
                                        <div className="circle-progress-label-wrapper"><label
                                            className="circle-progress-label">English Experienced</label></div>
                                    </div>
                                    {/* end .circle-progress-wrapper */}
                                </div>
                                {/* end .col-sm-4 */}
                                <div className="col-sm-4">
                                    <div className="circle-progress-wrapper clearfix">
                                        <div className="circle-progress">
                                            <input type="text" className="dial" defaultValue={80} data-color="#7c4dff"
                                                   data-from={0} data-to={80}/>
                                        </div>
                                        {/* end .circle-progress */}
                                        <div className="circle-progress-label-wrapper"><label
                                            className="circle-progress-label">French Advanced</label></div>
                                    </div>
                                    {/* end .circle-progress-wrapper */}
                                </div>
                                {/* end .col-sm-4 */}
                                <div className="col-sm-4">
                                    <div className="circle-progress-wrapper clearfix">
                                        <div className="circle-progress">
                                            <input type="text" className="dial" defaultValue={69} data-color="#7c4dff"
                                                   data-from={0} data-to={69}/>
                                        </div>
                                        {/* end .circle-progress */}
                                        <div className="circle-progress-label-wrapper"><label
                                            className="circle-progress-label">German Basic</label></div>
                                    </div>
                                    {/* end .circle-progress-wrapper */}
                                </div>
                                {/* end .col-sm-4 */}
                            </div>
                            {/* end .row */}
                        </div>
                        {/* end .container */}
                    </section>
                    {/* end #section1 */}
                    {/* Experience */}
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
                    {/* end #section1 */}
                    {/* Education */}
                    <section id="section5">
                        <div className="container">
                            <h2>Educational Value</h2>
                            <div className="education clearfix">
                                <div className="item">
                                    <div className="marker"/>
                                    <div className="content">
                                        <span>University Of Design</span>
                                        <h4>Master Degree of Design</h4>
                                    </div>
                                    <div className="year">2005 - 2006</div>
                                </div>
                                {/* end item */}
                                <div className="item">
                                    <div className="marker"/>
                                    <div className="content">
                                        <span>University Of Design</span>
                                        <h4>Master Degree of Design</h4>
                                    </div>
                                    <div className="year">2005 - 2006</div>
                                </div>
                                {/* end item */}
                                <div className="item">
                                    <div className="marker"/>
                                    <div className="content">
                                        <span>University Of Design</span>
                                        <h4>Master Degree of Design</h4>
                                    </div>
                                    <div className="year">2005 - 2006</div>
                                </div>
                                {/* end item */}
                                <div className="item">
                                    <div className="marker"/>
                                    <div className="content">
                                        <span>University Of Design</span>
                                        <h4>Master Degree of Design</h4>
                                    </div>
                                    <div className="year">2005 - 2006</div>
                                </div>
                                {/* end item */}
                                <div className="line"/>
                            </div>
                            {/* end .education */}
                            <h2>Hobbies &amp; Interest</h2>
                            <div className="row">
                                <div className="col-sm-2 col-sm-offset-1 col-xs-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="ion-easel"/></div>
                                        <h6>Web Research</h6>
                                    </div>
                                    {/* end .icon-box */}
                                </div>
                                {/* end .col-sm-2 */}
                                <div className="col-sm-2 col-xs-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="ion-ios-camera-outline"/></div>
                                        <h6>Photography</h6>
                                    </div>
                                    {/* end .icon-box */}
                                </div>
                                {/* end .col-sm-2 */}
                                <div className="col-sm-2 col-xs-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="ion-plane"/></div>
                                        <h6>Travelling</h6>
                                    </div>
                                    {/* end .icon-box */}
                                </div>
                                {/* end .col-sm-2 */}
                                <div className="col-sm-2 col-xs-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="ion-ios-bookmarks-outline"/></div>
                                        <h6>Book Reading</h6>
                                    </div>
                                    {/* end .icon-box */}
                                </div>
                                {/* end .col-sm-2 */}
                                <div className="col-sm-2 col-xs-6">
                                    <div className="icon-box">
                                        <div className="icon"><i className="ion-ios-musical-notes"/></div>
                                        <h6>Music</h6>
                                    </div>
                                    {/* end .icon-box */}
                                </div>
                                {/* end .col-sm-2 */}
                            </div>
                            {/* end .row */}
                        </div>
                        {/* end .container */}
                    </section>
                    {/* end #section1 */}
                    {/* Portfolio */}
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
                    {/* end #section1 */}
                    {/* Blog */}
                    <section id="section7">
                        <div className="container">
                            <h2>Blog Post</h2>
                            <div className="blog-posts masonry" id="blog-masonry">
                                <div className="blog-grid-sizer"/>
                                <div className="blog-post image-left">
                                    <div className="inner">
                                        <a href="single-blog-post.html">
                                            <div className="image"
                                                 style={{backgroundImage: 'url("images/blog-post-image01.jpg")'}}/>
                                        </a>
                                        <div className="content">
                                            <span className="date">March 14, 2015</span>
                                            <h4><a href="single-blog-post.html">We Support Any Type Of Design</a></h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">3 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                                <div className="blog-post">
                                    <div className="inner">
                                        <div className="content">
                                            <span className="date">March 15, 2015</span>
                                            <h4><a href="single-blog-post.html">We Give 99% Satisfy In All Work</a></h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">7 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                                <div className="blog-post image-top">
                                    <div className="inner">
                                        <a href="single-blog-post.html">
                                            <div className="image"
                                                 style={{backgroundImage: 'url("images/blog-post-image02.jpg")'}}/>
                                        </a>
                                        <div className="content">
                                            <span className="date">March 13, 2015</span>
                                            <h4><a href="single-blog-post.html">We Won CSS Design Of The Year</a></h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">4 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                                <div className="blog-post image-top">
                                    <div className="inner">
                                        <a href="single-blog-post.html">
                                            <div className="image"
                                                 style={{backgroundImage: 'url("images/blog-post-image03.jpg")'}}/>
                                        </a>
                                        <div className="content">
                                            <span className="date">March 12, 2015</span>
                                            <h4><a href="single-blog-post.html">How to Launch Website Easily</a></h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">10 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                                <div className="blog-post image-right">
                                    <div className="inner">
                                        <a href="single-blog-post.html">
                                            <div className="image"
                                                 style={{backgroundImage: 'url("images/blog-post-image04.jpg")'}}/>
                                        </a>
                                        <div className="content">
                                            <span className="date">March 11, 2015</span>
                                            <h4><a href="single-blog-post.html">Music Is Help To Relax Body And Mind</a>
                                            </h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">5 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                                <div className="blog-post">
                                    <div className="inner">
                                        <div className="content">
                                            <span className="date">March 10, 2015</span>
                                            <h4><a href="single-blog-post.html">We Support any Type of Design</a></h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">3 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                                <div className="blog-post image-left">
                                    <div className="inner">
                                        <a href="single-blog-post.html">
                                            <div className="image"
                                                 style={{backgroundImage: 'url("images/blog-post-image05.jpg")'}}/>
                                        </a>
                                        <div className="content">
                                            <span className="date">March 9, 2015</span>
                                            <h4><a href="single-blog-post.html">Change Your Domain Without Risk</a></h4>
                                            <footer>
                                                <span className="comments-link"><a href="single-blog-post.html">6 Comments</a></span>
                                                <span className="share-link"><a href="single-blog-post.html"><i
                                                    className="fa fa-share-alt"/></a></span>
                                            </footer>
                                        </div>
                                        {/* end .content */}
                                    </div>
                                    {/* end .inner */}
                                </div>
                                {/* end .blog-post */}
                            </div>
                            {/* end .blog-posts */}
                            <div className="blog-load-more">
                                <a href="single-blog-post.html" className="button solid-button white icon-right">Load
                                    More Posts<i className="md-refresh"/></a>
                            </div>
                            {/* end .blog-load-more */}
                        </div>
                        {/* end .container */}
                    </section>
                    {/* end #section1 */}
                    {/* Contact */}
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
                    {/* end #section1 */}
                </div>
                {/* end .sections-wrapper */}
            </div>

        )
    }
}

export default Main;