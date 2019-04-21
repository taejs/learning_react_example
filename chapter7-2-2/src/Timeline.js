import React, {Component} from 'react';
import d3 from 'd3'

class Timeline extends Component{
    constructor({data = []}) {
        const times = d3.extent(data.map(d => d.year));
        const range = [10, 500];
        super({data});
        this.state = {data, times, range};
    }

    componentDidMount() {
        let group;
        const {data, times, range} = this.state;
        const { target } =this.refs;
        const scale = d3.timeDay.scale().domain(times).range(range);

        d3.select(target)
        .append('svg')
        .attr('height', 230)
        .attr('width', 700);

        group = d3.select(target.children[0])
        .selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr(
            'transform',
            (d ,i) => 'translate(' + scale(d.year) + ', 0)'
        );

        group.append('circle')
            .attr('cy', 190)
            .attr('r' , 5)
            .style('fill', 'blue')

        group.append('text')
            .text(d => d.year +'-' + d.event)
            .style('font-size', '9px')
            .attr('y', 130)
            .attr('x', -130)
            .attr('transform', 'rotaet(-45)')
    }

    render() {
        return (
            <div className="timeline">
                <h1>{this.props.name}타임라인</h1>
                <div ref="target"></div>
            </div>
        )
    }
}
export default Timeline;