import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './notebox.css';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            title,
            description,
            numberOfNotes,
            isSystemNoteBox
        } = this.props;
        return (
            <div className="card z-depth-5 white">
                <div className="card-content purple-text">
                    { isSystemNoteBox ? <i className="material-icons purple-text system-notebox-badge">bookmark</i> : null }
                    <span className="card-title">{title}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <div id="card-action-panel" className="row">
                        <div className="col m8">
                            <Link to={`/notebox/${id}`} className="purple-text"><i className="material-icons left">drafts</i>Open the box</Link>
                        </div>
                        <div className="col m4 right">
                            <div className="purple-text right">{numberOfNotes} Notes</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

NoteBox.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numberOfNotes: PropTypes.number,
    isSystemNoteBox: PropTypes.bool
}

export default NoteBox;