import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addColor } from './actions';

class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const {_title, _color} = this;
        this.props.store.dispatch(addColor(_title.value, _color.value));
        _title.value = '';
        _color.value = '';
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref={input => this._title = input} type="text" placeholder="색 이름" required />
                <input ref={input => this._color = input} type="color" required/>
                <button>추가</button>
            </form>
        );
    }
}
AddColorForm.propTypes = {
    onNewColor : PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor : f=>f
}

export default AddColorForm;
