
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom';
const {Component} = React;

const getClockTime = function() {
    var date = new Date();
    var time = {
        hours : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds(),
        ampm : 'AM'
    };

    if(time.hours === 12) {
        time.timeOfDay = 'PM';
    } else if (time.hours > 12) {
        time.timeOfDay = 'PM';
        time.hours -= 12;
    }

    return time;
}

class Clock extends Component {
    constructor() {
        super();
        this.state = getClockTime();
    }

    componentDidMount() {
        console.log('시계 시작 중');
        this.ticking = setInterval(() => {
            this.setState(getClockTime())
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticking);
        console.log('시계 중단 중');
    }

    render() {
        const { hours, minutes, seconds, timeOfDay } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }
}

const target =  document.getElementById('root');

render(
    <Clock onClose={()=> unmountComponentAtNode(target)} />,
    target
);