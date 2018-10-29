import React from 'react';
import PropTypes from 'prop-types';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import './note-editor.css';

import Editor from 'tui-editor';
import Materialize from 'materialize-css/dist/js/materialize.min';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '300px'
        });
        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.chips');
            Materialize.Chips.init(elems, {
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
        });
    }

    render() {
        return (
            <div className="col s12 m12">
                <div className="card z-depth-5">
                    <div className="card-content">
                        <div className="row no-margin-bottom">
                            <div className="input-field col m12">
                                <textarea id="icon_prefix2" className="materialize-textarea" defaultValue={""} />
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
                                <div className="create-note-chips chips chips-autocomplete">
                                    <input placeholder="Add some tags" className="custom-class" />
                                </div>
                            </div>
                            <div className="row no-margin-bottom">
                                <div className="col m4 offset-m4">
                                    <a href="/manage" className="waves-effect waves-light btn-large purple white-text btn-block">
                                    <i className="material-icons left">send</i>Create Note</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteEditor;