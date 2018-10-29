import React from 'react';
import PropTypes from 'prop-types';
import './note.css';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card-panel white note-box-note">
                        <div className="row purple-text note-box-note-content">
                            <div className="col s12 m4 note-box-note-title-container">
                                <span>{this.props.title}</span>
                            </div>
                            <div className="col s12 m8 note-box-note-content-container">
                                <span>{this.props.content}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Note.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Note;