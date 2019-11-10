import React, {Component} from 'react';
import Gallery from "../Galery";

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

                        <Gallery elements={this.state.gallery}/>

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