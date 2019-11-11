import React, {Component} from 'react';
import Masonry from "react-masonry-component";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: this.props.value.gallery
        }
    }

    render() {
        return (
            <section id="section6" style={{width: 1903}}>
                <div className="container">
                    <h2>Portfolio</h2>
                    <div className="portfolio-wrapper">
                        <div id="portfolio-filters" className="portfolio-filters">
                            <button className="button solid-button white-purple small"
                                    onClick={() => this.select('')}>Show
                                All
                            </button>
                            <button className="button solid-button white-purple small"
                                    onClick={() => this.select('branding')}>Branding
                            </button>
                            <button className="button solid-button white-purple small"
                                    onClick={() => this.select('print')}>Print
                            </button>
                            <button className="button solid-button white-purple small"
                                    onClick={() => this.select('motion')}>Motion
                            </button>
                            <button className="button solid-button white-purple small"
                                    onClick={() => this.select('website')}>Websites
                            </button>
                        </div>

                        <Masonry
                            className={'portfolio'} // default ''
                            id ={'portfolio'}
                            elementType={'div'} // default 'div'
                            options={{transitionDuration: 0}} // default {}
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                            imagesLoadedOptions={ { background: '.my-bg-image-el' }} // default {}
                        >
                            {
                                this.state.gallery.map((element, index) => {
                                    return (
                                        <div className={element.class} key={index}>
                                            <img src={element.src}  alt = {element.name}/>
                                            <a href={element.src} className="overlay">
                                                <div className="background"/>
                                                <div className="meta">
                                                    <span className="title">{element.title}</span>
                                                    <span className="category">{element.category}</span>
                                                </div>
                                                {/*<!-- end .meta -->*/}
                                            </a>  {/*<!-- end .overlay -->*/}
                                        </div>
                                    );
                                })
                            }
                        </Masonry>

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

    select(select) {
        this.setState({
            gallery: this.props.value.gallery.filter(each => each.class.indexOf(select) > -1)
        })
    }

}

export default Education;