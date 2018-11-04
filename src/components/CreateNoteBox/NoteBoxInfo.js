import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoteBoxInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
    }

    handleProceed() {
        this.props.onProceed(this.state.inputValue);
    }

    handleInputUpdate(event) {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div className="col m12">
                <div className="row center create-notebox-heading">
                    <h4 className="white-text">{this.props.title}</h4>
                </div>
                <div className="row">
                    <div className="col m8 offset-m2 s12 center">
                        
                    </div>
                </div>
                <div className="row center create-notebox-page-btn">
                    <Link to={'/noteboxes'} className="waves-effect waves-purple btn-large white purple-text">
                        {this.props.actionIcon
                            ? <i className="material-icons left purple-text text-lighten-1">{this.props.actionIcon}</i>
                            : null
                        }
                        {this.props.actionTitle}
                    </Link>
                </div>
            </div>
        )
    }
}

NoteBoxInfo.propTypes = {
    title: PropTypes.string.isRequired,
    actionTitle: PropTypes.string.isRequired,
    actionIcon: PropTypes.string,
    inputType: PropTypes.oneOf(['text', 'chip']),
    onProceed: PropTypes.func.isRequired
}

NoteBoxInfo.defaultProps = {
    inputType: 'text'
}

export default NoteBoxInfo;
