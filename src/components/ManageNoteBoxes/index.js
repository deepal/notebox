import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteBoxActionState from '../../constants/actionTypes/noteBoxes';
import * as actions from '../../actions/noteBoxActions';
import Spinner from '../Common/Spinner';
import ErrorPage from '../ErrorPage';
import NoteBox from './NoteBox';

class NoteBoxes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchNoteBoxes();
    }

    render() {
        const isLoading = this.props.status === noteBoxActionState.FETCH_NOTE_BOXES_REQUEST;
        const notesLoaded = this.props.status === noteBoxActionState.FETCH_NOTE_BOXES_SUCCESSFUL;
        const notesLoadingError = this.props.status === noteBoxActionState.FETCH_NOTE_BOXES_FAILED;

        let component;

        if (isLoading) {
            component = (
                <Spinner></Spinner>
            );
        }

        if (notesLoaded) {
            component = (
                <div className="row">
                    <div className="col m10 offset-m1">
                        <div className="col s12 m12">
                            <div className="row">
                                {this.props.noteBoxes.map((notebox, i) => (
                                    <div key={i} className="col s12 m4">
                                        <NoteBox {...notebox}></NoteBox>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (notesLoadingError) {
            return (
                <div>
                    <ErrorPage></ErrorPage>
                </div>
            );
        }

        return (
            <div>
                <div className="row">
                    <div className="col m8 offset-m2">
                        <h4 className="heading center white-text">Your Note Boxes</h4>
                    </div>
                </div>
                {component}
            </div>
        )
    }
}

NoteBoxes.propTypes = {
    noteBoxes: PropTypes.array,
    status: PropTypes.string,
    actions: PropTypes.object
}

NoteBoxes.defaultProps = {
    noteBoxes: [],
    status: noteBoxActionState.FETCH_NOTE_BOXES_REQUEST
}

function mapStateToProps(state) {
    return {
        noteBoxes: state.noteBoxesView.noteBoxes,
        status: state.noteBoxesView.status
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBoxes);