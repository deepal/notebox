import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'tui-editor';
import Materialize from 'materialize-css/dist/js/materialize.min';
import Spinner from '../Common/Spinner';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import './note-editor.css';
class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
            noteContent: ''
        };

        this.tagsEl = null;
        this.editor = null;
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCreateNote = this.onCreateNote.bind(this);
    }

    componentDidMount() {
        this.initializeEditor();
        this.initializeTagInput();
    }

    initializeEditor() {
        this.editor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '300px'
        });

        this.editor.on('change', () => {
            this.setState({ noteContent: this.editor.getValue() })
        });
    }

    initializeTagInput() {
        const elm = document.getElementById('note-tags');
        this.tagsEl = Materialize.Chips.init(elm, {
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

        const tagInput = Array.from(this.tagsEl.el.childNodes).find(el => el.localName === 'input');
        tagInput.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                this.setState({ tags: (this.tagsEl.chipsData || []).map(chip => chip.tag) })
            }
        });
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    onCreateNote(event) {
        this.props.onSaveNote(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="col s12 m12">
                <div className="card z-depth-5">
                    <div className="card-content">
                        <div className="row no-margin-bottom">
                            <div className="input-field col m12">
                                <input value={this.state.title} autoFocus type="text" id="icon_prefix2" className="materialize-textarea" onChange={this.onTitleChange} />
                                <label htmlFor="icon_prefix2">Title</label>
                            </div>
                        </div>
                        <div className="row no-margin-bottom">
                            <div className="col s12">
                                <div id="editSection" />
                            </div>
                        </div>
                        <div className="row no-margin-bottom">
                            <div className="input-field col m12 s12">
                                <div id="note-tags" className="create-note-chips chips chips-autocomplete">
                                    <input placeholder="Add some tags" className="custom-class" />
                                </div>
                            </div>
                            <div className="row no-margin-bottom">
                                <div className="col m4 offset-m4">
                                    <a onClick={this.onCreateNote} className="waves-effect waves-light btn-large purple white-text btn-block">
                                        {this.props.isSaving
                                            ? <Spinner></Spinner>
                                            : <div><i className="material-icons left">send</i>Create Note</div>
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

NoteEditor.propTypes = {
    note: PropTypes.object,
    isSaving: PropTypes.bool,
    onSaveNote: PropTypes.func
}

NoteEditor.defaultProps = {
    isSaving: false,
    onSaveNote() { }
}

export default NoteEditor;