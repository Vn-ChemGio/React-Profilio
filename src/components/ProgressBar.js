import React,{ Component} from 'react';

class ProgressBar extends Component{
    render() {
        let {name, value} = this.props.item;
        return(
            <div>
                <label className="progress-bar-label">{name}</label>
                <div className="progress">
                    <div className="progress-bar" role="progressbar"
                         aria-valuenow={value}
                         aria-valuemin={0} aria-valuemax={100}
                         style={{width: `${value}%`}}>
                        <span>{value}%</span>
                    </div>
                    {/* end .progress-bar */}
                </div>
                {/* end .progress */}
            </div>
        )
    }
}

export default ProgressBar;