import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '';
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="색 이름" required />
                <input ref="_color" type="color" required/>
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
