import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange({
            id: this.props.inputId,
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="input-field col s12 m12 create-notebox-text">
                <input onChange={this.handleChange} type="text" placeholder="some text" className="validate center create-notebox-text-input" />
            </div>
        )
    }
}

TextInput.propTypes = {
    inputId: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func
}

TextInput.defaultProps = {
    type: 'text',
    onChange(){}
}

export default TextInput;