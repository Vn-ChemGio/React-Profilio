import React, {Component} from 'react';
import Knob from "../Knob";

import $ from 'jquery';

class Skill extends Component {
    constructor() {
        super();

        this.state = {
            Knob: {
                value1: 0,
                value2: 0,
                value3: 0
            },
            KnobMax :{
                value1: 90,
                value2: 80,
                value3: 70
            }
        };


        /*let inteval = setInterval(() =>{
            this.setState({
                Knob: this.getNextValue(this.state.Knob)
            })
        },500)*/

    }

    getNextValue (Knob){
        return {
            Knob:{
                value1 : Knob.value1 < this.state.KnobMax.value1 ? Knob.value1+1 : this.state.KnobMax.value1,
                value2 : Knob.value2 < this.state.KnobMax.value2 ? Knob.value2+1 : this.state.KnobMax.value2,
                value3 : Knob.value3 < this.state.KnobMax.value3 ? Knob.value3+1 : this.state.KnobMax.value3,
            }
        }
    }
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
                                    <div className="circle-progress">
                                        <Knob
                                            value={this.state.KnobMax.value1}
                                            lineCap={'round'}
                                            readOnly={true}
                                            width={200}
                                            thickness={.05}
                                            inputColor='#232323'
                                            fgColor="#7c4dff"
                                            bgColor='#e8e8e8'
                                            min={0}
                                            max={100}
                                            step={1}


                                        />

                                    </div>
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
                                    <Knob
                                        value={this.state.KnobMax.value2}
                                        lineCap={'round'}
                                        readOnly={true}
                                        width={200}
                                        thickness={.05}
                                        inputColor='#232323'
                                        fgColor="#7c4dff"
                                        bgColor='#e8e8e8'
                                        min={0}
                                        max={100}
                                        step={1}


                                    />

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
                                    <div className="circle-progress">
                                        <Knob
                                            value={this.state.KnobMax.value3}
                                            lineCap={'round'}
                                            readOnly={true}
                                            width={200}
                                            thickness={.05}
                                            inputColor='#232323'
                                            fgColor="#7c4dff"
                                            bgColor='#e8e8e8'
                                            min={0}
                                            max={100}
                                            step={1}


                                        />

                                    </div>
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

    componentDidMount() {
        $('.progress-bar').css('width', function () {
            return ($(this).attr('aria-valuenow') + '%');
        });


        $('.dial').on('load', function (event, isInView) {
            var $this = $(this);
            var myVal = $this.attr("value");
            var color = $this.attr("data-color");
            $this.knob({
                readOnly: true,
                width: 200,
                rotation: 'anticlockwise',
                thickness: .05,
                inputColor: '#232323',
                fgColor: color,
                bgColor: '#e8e8e8',
                'draw': function () {
                    $(this.i).val(this.cv + '%')
                }
            });
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });

        });
    }
}

export default Skill;