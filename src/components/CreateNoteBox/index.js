import React from 'react';
import './create-notebox.css';
import Materialize from 'materialize-css/dist/js/materialize.min';

class CreateNoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            tags: []
        }
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onCreateNoteBox = this.onCreateNoteBox.bind(this);
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
                this.setState({ tags: (tagsEl.chipsData || []).map(chip => chip.tag) })
            }
        });
    }

    onChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    onChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    onCreateNoteBox() {
        alert(JSON.stringify(this.state));
    }

    render() {
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
                                <input onChange={this.onChangeTitle} autoFocus placeholder="e.g, Coding tips" id="first_name" type="text" className="validate center create-notebox-text-input" />
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
                                <input onChange={this.onChangeDescription} id="note_description" type="text" placeholder="e.g, Useful tips and tricks on programming" className="validate center create-notebox-text-input" />
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
                    <div className="row center create-notebox-page-btn">
                        <a onClick={this.onCreateNoteBox} className="waves-effect waves-purple btn-large white purple-text">Create Note Box</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateNoteBox;