import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skill from "../components/pages/Skill";
import Experience from "../components/pages/Experience";
import Education from "../components/pages/Education";
import Work from "../components/pages/Work";

import Blog from "../components/pages/Blog";
import Contact from '../components/pages/Contact';


class Main extends Component {

    render() {
        let {skillValue} = this.props.value;
        return (
            <div className="sections">
                <div className="sections-wrapper clearfix">

                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>

                        <Route path="/about" exact>
                            <About/>
                        </Route>

                        <Route path="/skill" exact>
                            <Skill value = {skillValue}/>
                        </Route>

                        <Route path="/experience" exact>
                            <Experience/>
                        </Route>

                        <Route path="/education" exact>
                            <Education/>
                        </Route>

                        <Route path="/work" exact>
                            <Work   />
                        </Route>

                        <Route path="/blog" exact>
                            <Blog/>
                        </Route>

                        <Route path="/contact" exact>
                            <Contact/>
                        </Route>
                    </Switch>
                    {/* end .sections-wrapper */}
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log("mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update")
    }
}

export default Main;
