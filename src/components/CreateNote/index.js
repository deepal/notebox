import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createNote} from '../../actions/noteActions';
import NoteEditor from './NoteEditor';
import * as noteActionStatus from '../../constants/actionTypes/notes';
import Materialize from 'materialize-css/dist/js/materialize.min';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.createNote = this.createNote.bind(this);
    }

    createNote(note){
        this.props.actions.createNote(note);
    }

    render() {
        const isSaving = this.props.status === noteActionStatus.CREATE_NOTE_REQUEST;
        const isNoteCreateSuccessful = this.props.status === noteActionStatus.CREATE_NOTE_SUCCESSFUL;
        const isNoteCreateFailed = this.props.status === noteActionStatus.CREATE_NOTE_FAILED;

        if (isNoteCreateFailed) {
            Materialize.toast({
                classes: `red darken-2`,
                html: `<span>Failed to save note. Please try again.</span>`
            });
        }

        if (isNoteCreateSuccessful) {
            Materialize.toast({
                html: `<span>Successfully created note</span>`
            });
        }

        return (
            <div className="row">
                <div className="col m12 s12">
                    <div className="row">
                        <div className="col m8 offset-m2 s12">
                            <h3 className="heading center white-text">Jot something down...</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12">
                            <NoteEditor 
                                note={this.props.note} 
                                onSaveNote={this.createNote}
                                isSaving={isSaving}
                            ></NoteEditor>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateNote.propTypes = {
    note: PropTypes.object,
    status: PropTypes.string,
    errorCode: PropTypes.number,
    actions: PropTypes.object
}

CreateNote.defaultProps = {
    status: noteActionStatus.CREATE_NOTE_READY
}

function mapStateToProps(state){
    return {
        note: state.createNoteView.note,
        status: state.createNoteView.status,
        errorCode: state.createNoteView.errorCode,
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({createNote}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);