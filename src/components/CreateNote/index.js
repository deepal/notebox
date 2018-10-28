import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import './create-note.css';
import Editor from 'tui-editor';

import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';

class CreateNote extends React.Component {
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
            window.M.Chips.init(elems, {
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
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col m8 offset-m2">
                            <h3 className="heading center white-text">Jot something down...</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2">
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
                                                <div className="chips chips-autocomplete">
                                                    <input placeholder="Add some tags" className="custom-class" />
                                                </div>
                                            </div>
                                            <div className="row no-margin-bottom">
                                                <div className="col m4 offset-m4">
                                                    <a className="waves-effect waves-light btn-large purple white-text btn-block"><i className="material-icons left">send</i>Create
                      Note</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2">
                            <h4 className="heading center white-text">Or</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m4 offset-m4">
                            <a className="btn-block waves-effect waves-purple btn-large white purple-text" href="/manage">Manage Your Note Box</a>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default CreateNote;