import React, {Component} from 'react';

class Skill extends Component {
    render() {
        return (
            <section id="section3">
                <div className="container">
                    <h2>My Skills Values</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Technical Skills</h4>
                            <label className="progress-bar-label">Wordpress</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={85}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>85%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                            <label className="progress-bar-label">Photoshop</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={99}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>99%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                            <label className="progress-bar-label">HTML&amp;CSS</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={75}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>75%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                            <label className="progress-bar-label">Javascript</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={67}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>67%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                        </div>
                        {/* end .col-sm-6 */}
                        <div className="col-sm-6">
                            <h4>Knowledge</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-icons purple bold-list">
                                        <li><i className="md-arrow-forward"/>Install and Configure</li>
                                        <li><i className="md-arrow-forward"/>Web Usability</li>
                                        <li><i className="md-arrow-forward"/>Digital Painting</li>
                                        <li><i className="md-arrow-forward"/>Grid and Layout</li>
                                        <li><i className="md-arrow-forward"/>Mobile App Design</li>
                                        <li><i className="md-arrow-forward"/>Graphical Design</li>
                                        <li><i className="md-arrow-forward"/>SEO Optimization</li>
                                    </ul>
                                </div>
                                {/* end .col-sm-6 */}
                                <div className="col-sm-6">
                                    <ul className="list-icons purple bold-list">
                                        <li><i className="md-arrow-forward"/>UX and UI Design</li>
                                        <li><i className="md-arrow-forward"/>Logo Design</li>
                                        <li><i className="md-arrow-forward"/>3D Animation &amp; Visual Effects
                                        </li>
                                        <li><i className="md-arrow-forward"/>Audio Video Editing</li>
                                        <li><i className="md-arrow-forward"/>Photography</li>
                                        <li><i className="md-arrow-forward"/>Web Development</li>
                                        <li><i className="md-arrow-forward"/>Digital Marketing</li>
                                    </ul>
                                </div>
                                {/* end .col-sm-6 */}
                            </div>
                            {/* end .row */}
                        </div>
                        {/* end .col-sm-6 */}
                    </div>
                    {/* end .row */}
                    <div className="spacer"/>
                    <h4>Language Skills</h4>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="circle-progress-wrapper clearfix">
                                <div className="circle-progress">
                                    <input type="text" className="dial" defaultValue={99} data-color="#7c4dff"
                                           data-from={0} data-to={99}/>
                                </div>
                                {/* end .circle-progress */}
                                <div className="circle-progress-label-wrapper"><label
                                    className="circle-progress-label">English Experienced</label></div>
                            </div>
                            {/* end .circle-progress-wrapper */}
                        </div>
                        {/* end .col-sm-4 */}
                        <div className="col-sm-4">
                            <div className="circle-progress-wrapper clearfix">
                                <div className="circle-progress">
                                    <input type="text" className="dial" defaultValue={80} data-color="#7c4dff"
                                           data-from={0} data-to={80}/>
                                </div>
                                {/* end .circle-progress */}
                                <div className="circle-progress-label-wrapper"><label
                                    className="circle-progress-label">French Advanced</label></div>
                            </div>
                            {/* end .circle-progress-wrapper */}
                        </div>
                        {/* end .col-sm-4 */}
                        <div className="col-sm-4">
                            <div className="circle-progress-wrapper clearfix">
                                <div className="circle-progress">
                                    <input type="text" className="dial" defaultValue={69} data-color="#7c4dff"
                                           data-from={0} data-to={69}/>
                                </div>
                                {/* end .circle-progress */}
                                <div className="circle-progress-label-wrapper"><label
                                    className="circle-progress-label">German Basic</label></div>
                            </div>
                            {/* end .circle-progress-wrapper */}
                        </div>
                        {/* end .col-sm-4 */}
                    </div>
                    {/* end .row */}
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Skill;