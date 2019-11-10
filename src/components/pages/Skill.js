import React, {Component} from 'react';
import Knob from "../Knob";

class Skill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Knob: {
                value1: 0,
                value2: 0,
                value3: 0
            },
            Progress:{
                value1: 0,
                value2: 0,
                value3: 0,
                value4: 0
            }
        };
        this.Input= {
            Knob : {
                input1: 90, input2: 80, input3: 75
            },
            Progress: {
                input1: 90, input2: 80, input3: 75, input4:60
            }
        };


        setInterval(() => {
            let {value1, value2, value3, update} = Skill.getNextValue(this.state.Knob, this.Input.Knob);
            if (update) {
                this.setState({
                    Knob: {value1, value2, value3}
                })
            }

            //TODO: clear Interval
        }, 10);

        setInterval(() => {
            let {update, value1, value2, value3, value4} = Skill.getNextValue(this.state.Progress, this.Input.Progress);
            if (update) {
                this.setState({
                    Progress: {value1, value2, value3, value4}
                })
            }

            //TODO: clear Interval
        }, 10);

    }

    static getNextValue(Value, Input) {
        let update = false;
        let {value1, value2, value3, value4} = Value;
        let {input1, input2, input3, input4} = Input;

        if (value1 < input1) {
            value1++;
            update = true;
        }
        if (value2 < input2) {
            value2++;
            update = true;
        }

        if (value3 < input3) {
            value3++;
            update = true;
        }

        if(value4!=undefined && value4<input4){
            value4++;
            update = true;
        }

        return ({update, value1, value2, value3, value4})
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
                                <div className="progress-bar" role="progressbar" aria-valuenow={this.state.Progress.value1}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:`${this.state.Progress.value1}%`}}>
                                    <span>{this.state.Progress.value1}%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                            <label className="progress-bar-label">Photoshop</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={this.state.Progress.value2}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:`${this.state.Progress.value2}%`}}>
                                    <span>{this.state.Progress.value2}%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                            <label className="progress-bar-label">HTML&amp;CSS</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={this.state.Progress.value3}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:`${this.state.Progress.value3}%`}}>
                                    <span>{this.state.Progress.value3}%</span>
                                </div>
                                {/* end .progress-bar */}
                            </div>
                            {/* end .progress */}
                            <label className="progress-bar-label">Javascript</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={this.state.Progress.value4}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:`${this.state.Progress.value4}%`}}>
                                    <span>{this.state.Progress.value4}%</span>
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
                                            value={this.state.Knob.value1}
                                            lineCap={'round'}
                                            readOnly={true}
                                            width={200}
                                            thickness={.05}
                                            inputColor='#232323'
                                            fgColor="#7c4dff"
                                            bgColor='#e8e8e8'
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
                                        value={this.state.Knob.value1}
                                        lineCap={'round'}
                                        readOnly={true}
                                        width={200}
                                        thickness={.05}
                                        inputColor='#232323'
                                        fgColor="#7c4dff"
                                        bgColor='#e8e8e8'
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
                                            value={this.state.Knob.value1}
                                            lineCap={'round'}
                                            readOnly={true}
                                            width={200}
                                            thickness={.05}
                                            inputColor='#232323'
                                            fgColor="#7c4dff"
                                            bgColor='#e8e8e8'

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
}

export default Skill;