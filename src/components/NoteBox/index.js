import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getProperty from 'lodash.get';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Note from './Note';
import NoteBoxTag from './NoteBoxTag';
import NoteBoxSideBar from './NoteBoxSideBar';
import * as actions from '../../actions/openNoteBoxActions';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const openNoteBoxId = getProperty(this.props.match, 'params.id');
        this.props.actions.getNotes(openNoteBoxId);
    }

    render() {
        const noteBox   = this.props.openNoteBox.noteBox;
        const notes     = this.props.openNoteBox.notes;

        let noteBoxTagsComponent = null;

        if (noteBox.tags) {
            noteBoxTagsComponent = noteBox.tags.map((tag, i) => <NoteBoxTag key={i} name={tag}></NoteBoxTag>)
        }
        return (
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <NoteBoxSideBar></NoteBoxSideBar>
                <main className="container-fluid">
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
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

NoteBox.propTypes = {
    match: PropTypes.object.isRequired,
    openNoteBox: PropTypes.object,
    actions: PropTypes.object
}

function mapStateToProps(state) {
    return {
        openNoteBox: state.openNoteBox
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBox);
