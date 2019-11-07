import React, {Component} from "react";

class SearchTop extends Component{
    render() {
        return (
            <div>
                {/* Search */}
                <div className="search-overlay" />
                <div className="search">
                    <a href={"/xxxx"} className="search-close"><i className="md md-close" /></a>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h4>Just Start Typing Text and Press Enter</h4>
                            <form className="search-form">
                                <input type="text" id="search" name="search" className="text-center" />
                            </form> {/* end .search-form */}
                        </div> {/* end .col-sm-6 */}
                    </div> {/* end .row */}
                </div> {/* end .row */}
            </div>
        );
    }
}
export default SearchTop;