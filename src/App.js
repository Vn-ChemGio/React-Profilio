import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import SlideOut from "./components/SlideOut";
import Header from './common/Header'
import Main from "./common/Main";
import Footer from "./common/Footer";


class App extends Component {
    constructor(props) {
        super(props);

        this.data = {
            slideOut: {
                imagesInstagram: [
                    "images/instagram01.jpg",
                    "images/instagram02.jpg",
                    "images/instagram03.jpg",
                    "images/instagram04.jpg",
                    "images/instagram05.jpg",
                    "images/instagram06.jpg",
                ]
            },
            header: {
                socialNav: [
                    {name: "Facebook", href: "#"},
                    {name: "Twitter", href: "#"},
                    {name: "Linkedin", href: "#"},
                    {name: "Google+", href: "#"},
                    {name: "Behance", href: "#"},
                ],
                sectionNav: [
                    {name: "Home", href: "/"},
                    {name: "About", href: "/about"},
                    {name: "Skill", href: "/skill"},
                    {name: "Experience+", href: "/experience"},
                    {name: "Education", href: "/education"},
                    {name: "Work", href: "/work"},
                    {name: "Blog", href: "/blog"},
                    {name: "Contact", href: "/contact"},
                ],
            },
            footer: {
                socialNav: [
                    {name: "Facebook", href: "#", className: "fa fa-facebook"},
                    {name: "Twitter", href: "#", className: "fa fa-twitter"},
                    {name: "Google+", href: "#", className: "fa fa-google-plus"},
                    {name: "Behance", href: "#", className: "fa fa-behance"},
                    {name: "Dribbble", href: "#", className: "fa fa-dribbble"},
                ],
                contact: "Tel: +61 123-456-7890<br />Mail: Sility@example.com",
                address: "123 Sility, South Corner Street,<br />Melbornem Australia."
            },
            main: {
                skillValue: {
                    LanguageSkill: [
                        {name: "English Experienced", value: 90},
                        {name: "French Advanced", value: 80},
                        {name: "German Basic", value: 70}
                    ],
                    TechnicalSkill: [
                        {name: "Woodpress", value: 90},
                        {name: "Photoshop", value: 80},
                        {name: "HTML &amp; CSS", value: 70},
                        {name: "JavaScript", value: 65},

                    ],
                    Knowledge: [
                        "Install and Configure",
                        "Web Usability",
                        "Digital Painting",
                        "Grid and Layout",
                        "Mobile App Design",
                        "Graphical Design",
                        "SEO Optimization",
                        "UX and UI Design",
                        "Logo Design",
                        "3D Animation &amp; Visual Effects",
                        "Audio Video Editing",
                        "Photography",
                        "Web Development",
                        "Digital Marketing",
                    ]

                },
                workValue: {
                    gallery: [
                        {src: "images/portfolio01.jpg", class: "item branding print", title:"Portfolio Item - 01", category:"Branding, Print"},
                        {src: "images/portfolio02.jpg", class: "item motion", title:"Portfolio Item - 02", category:"Motion"},
                        {src: "images/portfolio03.jpg", class: "item print", title:"Portfolio Item - 03", category:"Print"},
                        {src: "images/portfolio04.jpg", class: "item print branding websites", title:"Portfolio Item - 04", category:"Branding, Websites"},
                        {src: "images/portfolio05.jpg", class: "item print branding", title:"Portfolio Item - 05", category:"Print, Branding"},
                        {src: "images/portfolio06.jpg", class: "item motion", title:"Portfolio Item - 06", category:"Motion"},
                        {src: "images/portfolio07.jpg", class: "item motion", title:"Portfolio Item - 07", category:"Motion"},
                        {src: "images/portfolio08.jpg", class: "item print", title:"Portfolio Item - 08", category:"Print"},
                        {src: "images/portfolio09.jpg", class: "item motion", title:"Portfolio Item - 09", category:"Motion"},
                        {src: "images/portfolio10.jpg", class: "item websites", title:"Portfolio Item - 10", category:"Websites"},

                    ]
                }
            }
        };

        this.state = {
            wellComeLogo: true
        };


    }


    render() {
        return (
            <Router>
                {/* <!-- Slide Out --> */}
                <div className="slide-out-overlay"></div>
                <SlideOut header={this.data.header} slideOut={this.data.slideOut}/>

                {/* <!-- Head -->*/}
                <Header header={this.data.header}/>
                <div className="responsive-menu">
                    <a href="true" className="responsive-menu-close">Close <i className="ion-android-close"></i></a>
                    <nav className="responsive-nav"></nav>
                    {/* <!-- end .responsive-nav -->*/}
                </div>

                <div id="logo" className="welcome-screen loading-welcome" style={this.state.wellComeLogo ? {display: 'block'} : {display: 'none'}}>
                    <div className="helper">&nbsp;</div>
                    <img src="images/loading-logo.png" alt="loading-logo"/>
                </div>
                {/* <!-- end .responsive-menu -->*/}

                {/*<!-- Section Navigation -->/*}
                <div className="section-nav">
                    <nav className="section1">
                        <a href="#section2" className="forward"><i className="md md-chevron-right"></i></a>
                        <a href="#section1" className="backward"><i className="md md-chevron-left"></i></a>
                    </nav>
                </div>
                  {/*<!-- end .section-nav --> */}

                <Main value={this.data.main}/>
                <Footer footer={this.data.footer}/>
            </Router>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({wellComeLogo: false})
        }, 2000)
    }
}

export default App;