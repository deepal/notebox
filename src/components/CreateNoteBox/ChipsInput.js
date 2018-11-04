import React from 'react';
import PropTypes from 'prop-types';
import Materialize from 'materialize-css/dist/js/materialize.min';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.chipsInput = null;
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const elems = document.querySelectorAll('.chips');
        this.chipsInput = Materialize.Chips.init(elems, {
            autocompleteOptions: {
                data: {
                    'Apple': null,
                    'Microsoft': null,
                    'Google': null
                },
                limit: Infinity,
                minLength: 1
            }
        });
    }

    handleChange(event) {
        this.props.onChange({
            id: this.props.inputId,
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="chips chips-autocomplete create-notebox-chips" />
        )
    }
}

TextInput.propTypes = {
    inputId: PropTypes.string.isRequired,
    autoCompleteData: PropTypes.array,
    onChange: PropTypes.func
}

TextInput.defaultProps = {
    type: 'text',
    onChange(){}
}

export default TextInput;