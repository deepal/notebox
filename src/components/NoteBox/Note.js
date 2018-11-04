import React from 'react';
import PropTypes from 'prop-types';
import MarkDownViewer from '../Common/MarkdownViewer';
import NoteActions from './NoteActions';
import './note.css';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            noteContent,
            tags
        } = this.props.note;
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card-panel white note-box-note">
                        <NoteActions></NoteActions>
                        <div className="row purple-text note-box-note-content">
                            <div className="col s12 m4 note-box-note-title-container">
                                <span>{title}</span>
                            </div>
                            <div className="col s12 m8 note-box-note-content-container">
                                <div className="row note-content-section">
                                    <MarkDownViewer content={noteContent}></MarkDownViewer>
                                </div>
                                <div className="row note-tags-section-content">
                                    <div className="col m12">
                                        {tags.map((tag, i) => <div key={i} className="purple lighten-1 white-text chip">{tag}</div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Note.propTypes = {
    note: PropTypes.object.isRequired
}

export default Note;