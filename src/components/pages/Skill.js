import React, {Component} from 'react';
import Knob from "../Knob";
import ProgreesBar from '../ProgressBar';

class Skill extends Component {
    constructor(props) {
        super(props);

        let {LanguageSkill, TechnicalSkill, Knowledge} = this.props.value;

        this.state = {
            // config for start run animation
            LanguageSkill: LanguageSkill.map(each => {
                return {value: 0, name: each.name}
            }),
            TechnicalSkill: TechnicalSkill.map(each => {
                return {value: 0, name: each.name}
            })
        };


        let refresh = setInterval(() => {
            let [update1, ...values1] = Skill.getValueNext(this.state.LanguageSkill, LanguageSkill);
            let [update2, ...values2] = Skill.getValueNext(this.state.TechnicalSkill, TechnicalSkill);

            if (update1|| update2)
                this.setState({
                    LanguageSkill: values1,
                    TechnicalSkill: values2
                });

            else
                clearInterval(refresh)

        },10);

        this.KnowledgeLeft = Knowledge.slice(0, Math.ceil( Knowledge.length/2));
        this.KnowledgeRight =  Knowledge.slice(Math.ceil( Knowledge.length/2) +1);


    }

    static getValueNext(currentState, endState) {
        let update = false;
        currentState.forEach(function (each, index) {
            if (currentState[index].value < endState[index].value) {
                currentState[index].value++;
                update = true;
            }
        });
        return ([update, ...currentState])
    }

    render() {
        return (
            <section id="section3">
                <div className="container">
                    <h2>My Skills Values</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Technical Skills</h4>
                            {this.state.TechnicalSkill.map((skill, index) => <ProgreesBar item = {skill} key={index}/>)}
                        </div>
                        {/* end .col-sm-6 */}
                        <div className="col-sm-6">
                            <h4>Knowledge</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-icons purple bold-list">
                                        {this.KnowledgeLeft.map((item, index) =>  <li  key ={index} ><i className="md-arrow-forward"/>{item}</li> )}
                                    </ul>
                                </div>
                                {/* end .col-sm-6 */}
                                <div className="col-sm-6">
                                    <ul className="list-icons purple bold-list">
                                        {this.KnowledgeRight.map((item, index) =>  <li  key ={index} ><i className="md-arrow-forward"/>{item}</li> )}
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
                        {
                            this.state.LanguageSkill.map((skill, index) => {
                                return (
                                    <div className="col-sm-4" key={index}>
                                        <div className="circle-progress-wrapper clearfix">
                                            <div className="circle-progress">
                                                <div className="circle-progress">
                                                    <Knob value={skill.value} lineCap={'round'} readOnly={true}
                                                          width={200} thickness={.05} inputColor='#232323'
                                                          fgColor="#7c4dff" bgColor='#e8e8e8'/>
                                                </div>
                                            </div>
                                            {/* end .circle-progress */}
                                            <div className="circle-progress-label-wrapper"><label
                                                className="circle-progress-label">{skill.name}</label></div>
                                        </div>
                                        {/* end .circle-progress-wrapper */}
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* end .row */}
                </div>
                {/* end .container */}
            </section>
        )
    }
}

export default Skill;