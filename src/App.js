import React from 'react';


import TopPage from './components/TopPage';
import MainPage from "./components/MainPage";
import FooterPage from "./components/FooterPage";


function App() {
    return (

        <div className="App">
            <TopPage/>


            <div className="section-nav">
                <nav className="section1">
                    <a href="#section2" className="forward"><i className="md md-chevron-right"></i></a>
                    <a href="#section1" className="backward"><i className="md md-chevron-left"></i></a>
                </nav>
            </div>
            { /* end .section-nav*/ }

            <MainPage />

            <FooterPage />
            {/*<!-- jQuery -->*/}
            <script src="js/jquery-1.11.2.min.js"></script>
            {/*<!-- Bootstrap -->*/}
            <script src="js/bootstrap.min.js"></script>
            {/*<!-- Inview -->*/}
            <script src="js/jquery.inview.min.js"></script>
            {/*<!-- SmoothScroll -->*/}
            <script src="js/smoothscroll.js"></script>
           {/* <!-- jQuery Knob -->*/}
            <script src="js/jquery.knob.min.js"></script>
            {/*<!-- Owl Carousel -->*/}
            <script src="js/owl.carousel.min.js"></script>
            {/*<!-- Isotope -->*/}
            <script src="js/isotope.pkgd.min.js"></script>
            {/*<!-- Images Loaded -->*/}
            <script src="js/imagesloaded.pkgd.min.js"></script>
            {/*<!-- google maps -->*/}
            <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
            {/*<!-- Scripts.js -->*/}
            <script src="js/scripts.js"></script>

        </div>
    );
}

export default App;
