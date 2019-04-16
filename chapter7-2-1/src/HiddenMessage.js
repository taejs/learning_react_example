import React, {Component} from 'react';
import XRegExp from 'xregexp';

const Letter = XRegExp('\\pL', 'g');
class HiddenMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           hidden : typeof props.hide === 'boolean' ? props.hide : true
        }
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }

    hide() {
        this.setState({hidden : true})
    }

    show() {
        this.setState({hidden : false})
    }

    render() {
        const {children} = this.props;
        const {hidden} = this.state;
        return (
            <p onMouseEnter={this.show}
                onMouseLeave={this.hide}>
                {(hidden) ? 
                    children.replace(Letter, 'x') :
                    children
                }
            </p>
        )
    }
}
export default HiddenMessage