import React, {Component} from 'react';


import SearchTop from './SearchTop';
import Header from './Header';
import SlideOutTopHeader from "./SlideOutTopHeader";
import SlideOutTopWidget from "./SlideOutTopWidget";

class TopPage extends Component{
    render(){
        return(
            <div>
                <SearchTop />
                <div className="slide-out-overlay"></div>
                <div className="slide-out">
                    <SlideOutTopHeader/>
                    <SlideOutTopWidget/>

                </div>
                <Header />
                <div className="responsive-menu">
                    <a href="/vcard" className="responsive-menu-close">Close <i className="ion-android-close"></i></a>
                    <nav className="responsive-nav"></nav>
                    {/*<!-- end .responsive-nav --> */}
                </div>
                {/*<!-- end .responsive-menu --> */}-
            </div>
        )
    }
}

export default TopPage;