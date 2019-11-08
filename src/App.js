import React , {Component} from 'react';

import SlideOut from "./components/SlideOut";

import Header from './common/Header'
import Main from "./common/Main";
import Footer from "./common/Footer";

import './App.css';

class App extends Component{
    constructor(props){
        super(props)
    };



    render() {
        return (
            <div>
                {/* <!-- Slide Out --> */ }
                <div className="slide-out-overlay"></div>
                <SlideOut/>

                {/* <!-- Head -->*/ }
                <Header />
                <div className="responsive-menu">
                    <a href={true} className="responsive-menu-close">Close <i className="ion-android-close"></i></a>
                    <nav className="responsive-nav"></nav>
                    {/* <!-- end .responsive-nav -->*/ }
                </div>
                {/* <!-- end .responsive-menu -->*/ }

                {/*<!-- Section Navigation --> */ }
                <div className="section-nav">
                    <nav className="section1">
                        <a href="#section2" className="forward"><i className="md md-chevron-right"></i></a>
                        <a href="#section1" className="backward"><i className="md md-chevron-left"></i></a>
                    </nav>
                </div>  {/*<!-- end .section-nav --> */ }

                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;