import React from 'react';
import PropTypes from 'prop-types';
import './notebox.css';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isSystemNoteBox} = this.props;
        return (
            <div className="card z-depth-5 white">
                <div className="card-content purple-text">
                    { isSystemNoteBox ? <i className="material-icons purple-text system-notebox-badge">bookmark</i> : null }
                    <span className="card-title">{this.props.title}</span>
                    <p>{this.props.description}</p>
                </div>
                <div className="card-action">
                    <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                    <div className="purple-text right">{this.props.numberOfNotes} Notes</div>
                </div>
            </div>
        )
    }
}

NoteBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numberOfNotes: PropTypes.number,
    isSystemNoteBox: PropTypes.bool
}

export default NoteBox;