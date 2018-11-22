import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Spinner from '../Common/Spinner';
import * as actions from '../../actions/noteBoxActions';
import * as noteBoxActionStatus from '../../constants/actionTypes/noteBoxes';
import './create-notebox.css';
import Materialize from 'materialize-css/dist/js/materialize.min';

class CreateNoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onCreateNoteBox = this.onCreateNoteBox.bind(this);
        this.onUpdateNoteBoxDraft = this.onUpdateNoteBoxDraft.bind(this);
    }

    onCreateNoteBox(){
        this.props.actions.saveNoteBox(this.props.noteBox);
    }

    onUpdateNoteBoxDraft(changes){
        this.props.actions.updateDraftNoteBoxInfo(changes);
    }

    componentDidMount() {
        const elem = document.getElementById('create-notebox-chips');
        const tagsEl = Materialize.Chips.init(elem, {
            placeholder: 'Type something and press enter',
            autocompleteOptions: {
                data: {
                    'Apple': null,
                    'Microsoft': null,
                    'Google': null
                },
                limit: Infinity,
                minLength: 1
            }
        });

        const tagInput = Array.from(tagsEl.el.childNodes).find(el => el.localName === 'input');
        tagInput.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                this.onUpdateNoteBoxDraft({ tags: (tagsEl.chipsData || []).map(chip => chip.tag) })
            }
        });
    }

    onChangeTitle(event) {
        this.onUpdateNoteBoxDraft({ title: event.target.value });
    }

    onChangeDescription(event) {
        this.onUpdateNoteBoxDraft({ description: event.target.value });
    }

    render() {
        const isSaving = this.props.status === noteBoxActionStatus.CREATE_NOTE_BOX_REQUEST;
        const isNoteBoxCreateSuccessful = this.props.status === noteBoxActionStatus.CREATE_NOTE_BOX_SUCCESSFUL;
        const isNoteBoxCreateFailed = this.props.status === noteBoxActionStatus.CREATE_NOTE_BOX_FAILED;

        if (isNoteBoxCreateFailed) {
            Materialize.toast({
                classes: `red darken-2`,
                html: `<span>Failed to create Note Box. Please try again.</span>`
            });
        }

        if (isNoteBoxCreateSuccessful) {
            Materialize.toast({
                html: `<span>Successfully created Note Box</span>`
            });
        }

        return (
            <div className="row">
                <div className="col m12 s12">
                    <div className="row center create-notebox-heading">
                        <div className="col m12 s12">
                            <h4 className="white-text">A cool title for your Note Box</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12 center">
                            <div className="input-field col s12 m12 create-notebox-text">
                                <input
                                    value={this.props.noteBox.title}
                                    onChange={this.onChangeTitle}
                                    autoFocus
                                    placeholder="e.g, Coding tips"
                                    id="first_name"
                                    type="text"
                                    className="validate center create-notebox-text-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col m12">
                    <div className="row center create-notebox-heading">
                        <div className="col m12 s12">
                        <h4 className="white-text">Describe your Note Box</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12 center">
                            <div className="input-field col s12 m12 create-notebox-text">
                                <input
                                    value={this.props.noteBox.description}
                                    onChange={this.onChangeDescription}
                                    id="note_description"
                                    type="text"
                                    placeholder="e.g, Useful tips and tricks on programming"
                                    className="validate center create-notebox-text-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col m12">
                    <div className="row center create-notebox-heading">
                        <div className="col m12 s12">
                            <h4 className="white-text">Pick some tags to create new Note Box</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12 center">
                            <div id="create-notebox-chips" className="chips chips-autocomplete chips-placeholder create-notebox-chips" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m2 offset-m5 s8 offset-s2">
                            <a onClick={this.onCreateNoteBox} className="waves-effect waves-light btn-large white purple-text btn-block">
                                {isSaving
                                    ? <Spinner color={'purple'}></Spinner>
                                    : <div><i className="material-icons left">send</i>Create Note Box</div>
                                }
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateNoteBox.propTypes = {
    noteBox: PropTypes.object,
    status: PropTypes.string,
    errorCode: PropTypes.number,
    actions: PropTypes.object
}

function mapStateToProps({createNoteBoxView}) {
    const { noteBox, status, errorCode } = createNoteBoxView;
    return { noteBox, status, errorCode };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteBox);
