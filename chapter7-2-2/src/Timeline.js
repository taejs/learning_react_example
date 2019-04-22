import React, {Component} from 'react';
import d3 from 'd3';

const TimelineDot = ({position, txt}) => 
    <g transform={`translate($position), 0`}>
        <circle cy={160} r={5} style={{fill:'blue'}} />
        <text y={115} x={-95} transform="rotate(-45)" style={{fontSize:'10px'}}>{txt}</text>
    </g>

const Canvas = ({children}) =>
    <svg height="200" width="500">
        {children}
    </svg>

class Timeline extends Component{
    constructor({data = []}) {
        const times = d3.extent(data.map(d => d.year));
        const range = [10, 500];
        super({data});
        this.scale = d3.time.scale().domain(times).range(range);
        this.state = {data, times, range};
    }

    componentDidMount() {
        let group;
        const {data, times, range} = this.state;
        const { target } =this.refs;
        const scale = d3.time.scale().domain(times).range(range);
    }

    render() {
        const { data } = this.state;
        const { scale } = this;
        
        return (
            <div className="timeline">
                <h1>{this.props.name} 타임라인</h1>
                <Canvas>
                    {
                        data.map((d, i) => 
                        <TimelineDot position={scale(d.year)}
                                    txt={`${d.year} - ${d.event}`} />
                        )
                    }
                </Canvas>
                <div ref="target"></div>
            </div>
        )
    }
}
export default Timeline;