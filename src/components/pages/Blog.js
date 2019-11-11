import React, {Component} from 'react';
import Masonry from "react-masonry-component";


class Blog extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h2>Blog Post</h2>
                    <Masonry
                        className={'blog-posts masonry'} // default ''
                        id ={'blog-masonry'}
                        elementType={'div'} // default 'div'
                        options={{transitionDuration: 0}} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={ { background: '.my-bg-image-el' }} // default {}
                    >
                        <div className="blog-grid-sizer"></div>
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

                    </Masonry>
                    {/* end .blog-posts */}
                    <div className="blog-load-more">
                        <a href="single-blog-post.html" className="button solid-button white icon-right">Load
                            More Posts<i className="md-refresh"/></a>
                    </div>
                    {/* end .blog-load-more */}
                </div>
                {/* end .container */}
            </section>

        )
    }
}

export default Blog;