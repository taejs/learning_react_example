import React, {Component} from 'react';
import {connect} from 'react-redux'
import uuidv1 from 'uuid'
import {addArticle} from '../actions/index'

function mapDispatchToProps(dispatch) {
    return {
        addArticle : article => dispatch(addArticle(article))
    }
}
const mapStateToProps = state => {
    return { articles : state.articles };
}

class connectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title : ''});
    }

    render() {
        const {title} = this.state;
        return (
            <React.Fragment>
                <div>{title}</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-success btn-lg"
    >SAVE</button>
                </form>
            </React.Fragment>
        )
    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(connectedForm);

export default Form;
