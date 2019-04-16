import React, {Component} from 'react';
import XRegExp from 'xregexp';

const Letter = XRegExp('\\pL', 'g');
class HiddenMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           hidden : typeof props.hide === 'boolean' ? props.hide : true
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({hidden : nextProps.hide});
    }

    render() {
        const {children} = this.props;
        const {hidden} = this.state;
        return (
            <p>
                {(hidden) ? 
                    children.replace(Letter, 'x') :
                    children
                }
            </p>
        )
    }
}
export default HiddenMessage