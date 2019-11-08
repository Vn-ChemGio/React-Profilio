import React , {Component} from 'react';

import SlideOut from "./components/SlideOut";

import Header from './common/Header'
import Main from "./common/Main";
import Footer from "./common/Footer";

import './App.css';

class App extends Component{
    constructor(props) {
        super(props);

        this.data = {
            slideOut: {
                imagesInstagram:[
                    "images/instagram01.jpg",
                    "images/instagram02.jpg",
                    "images/instagram03.jpg",
                    "images/instagram04.jpg",
                    "images/instagram05.jpg",
                    "images/instagram06.jpg",
                ]
            },
            header:{
                socialNav: [
                    {name:"Facebook", href:"#"},
                    {name:"Twitter", href:"#"},
                    {name:"Linkedin", href:"#"},
                    {name:"Google+", href:"#"},
                    {name:"Behance", href:"#"},
                ],
                sectionNav: [
                    {name:"Home", href:"#section1"},
                    {name:"About", href:"#section2"},
                    {name:"Skill", href:"#section3"},
                    {name:"Experience+", href:"#section4"},
                    {name:"Education", href:"#section5"},
                    {name:"Work", href:"#section6"},
                    {name:"Blog", href:"#section7"},
                    {name:"Contact", href:"#section8"},
                ],
            },
            footer :{
                socialNav: [
                    {name:"Facebook", href:"#", className:"fa fa-facebook"},
                    {name:"Twitter", href:"#",className:"fa fa-twitter"},
                    {name:"Google+", href:"#", className:"fa fa-google-plus"},
                    {name:"Behance", href:"#", className:"fa fa-behance"},
                    {name:"Dribbble", href:"#", className:"fa fa-dribbble"},
                ],
                contact:"Tel: +61 123-456-7890<br />Mail: Sility@example.com",
                address:"123 Sility, South Corner Street,<br />Melbornem Australia."
            }
        }
    }


    render() {
        return (
            <div>
                {/* <!-- Slide Out --> */ }
                <div className="slide-out-overlay"></div>
                <SlideOut header ={this.data.header} slideOut={this.data.slideOut}/>

                {/* <!-- Head -->*/ }
                <Header header ={this.data.header} />
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
                <Footer footer = {this.data.footer}/>
            </div>
        );
    }
}

export default App;