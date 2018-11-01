import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/noteBoxActions'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import NoteBox from './NoteBox';

class NoteBoxes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.actions.fetchNoteBoxes();
    }

    render() {
        return (
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <main className="container-fluid">
                <div className="row">
                    <div className="col m8 offset-m2">
                        <h4 className="heading center white-text">Your Note Boxes</h4>
                    </div>
                </div>
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
            </main>
                <Footer></Footer>
            </div>
        )
    }
}

NoteBoxes.propTypes = {
    noteBoxes: PropTypes.array,
    actions: PropTypes.object
}

NoteBoxes.defaultProps = {
    noteBoxes: []
}

function mapStateToProps(state){
    return {
        noteBoxes: state.noteBoxes
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(NoteBoxes);