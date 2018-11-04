import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getProperty from 'lodash.get';
import Spinner from '../Common/Spinner';
import ErrorPage from '../ErrorPage';
import Note from './Note';
import NoteBoxTag from './NoteBoxTag';
import NoteBoxSideBar from './NoteBoxSideBar';
import * as noteAction from '../../constants/actionTypes/notes';
import * as actions from '../../actions/noteActions';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const openNoteBoxId = getProperty(this.props.match, 'params.id');
        this.props.actions.getNotes(openNoteBoxId);
    }

    render() {
        const isLoading = this.props.status === noteAction.FETCH_NOTES_REQUEST;
        const fetchNotesSuccessful = this.props.status === noteAction.FETCH_NOTES_SUCCESSFUL;
        const fetchNotesFailed = this.props.status === noteAction.FETCH_NOTES_FAILED;

        let contentComponent = <div></div>;

        if (isLoading) {
            contentComponent = (
                <Spinner></Spinner>
            );
        }

        if (fetchNotesFailed) {
            contentComponent = (
                <ErrorPage errorCode={this.props.errorCode}></ErrorPage>
            );
        }

        if (fetchNotesSuccessful) {
            const noteBox   = this.props.openNoteBox.noteBox;
            const notes     = this.props.openNoteBox.notes;
            let noteBoxTagsComponent = null;

            if (noteBox.tags) {
                noteBoxTagsComponent = noteBox.tags.map((tag, i) => <NoteBoxTag key={i} name={tag}></NoteBoxTag>)
            }

            contentComponent = (
                <div>
                    <div className="row center">
                        <h4 className="white-text">{noteBox.title}</h4>
                    </div>
                    <div className="row center">
                        <span className="white-text">{noteBox.description}</span>
                    </div>
                    <div id="notebox-meta" className="row">
                        <div className="col m12 s12 center">
                            {noteBoxTagsComponent}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m10 offset-m1">
                            <div className="col s12 m12">
                                {notes.map((note, i) => <Note key={i} note={note}></Note>)}
                            </div>
                        </div>
                    </div>
                    <NoteBoxSideBar></NoteBoxSideBar>
                </div>
            )
        }

        return contentComponent;
    }
}

NoteBox.propTypes = {
    match: PropTypes.object.isRequired,
    openNoteBox: PropTypes.object,
    status: PropTypes.string,
    errorCode: PropTypes.number,
    actions: PropTypes.object
}

NoteBox.defaultProps = {
    status: noteAction.FETCH_NOTES_REQUEST
}

function mapStateToProps(state) {
    return state.noteBoxView
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBox);
