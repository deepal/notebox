import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Materialize from 'materialize-css/dist/js/materialize.min';
import './create-notebox.css';

class CreateNoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <main className="container-fluid">
                    <div className="row center create-notebox-heading">
                        <h4 className="white-text">Pick some tags to create new Note Box</h4>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12 center">
                            <div className="chips chips-autocomplete create-notebox-chips" />
                        </div>
                    </div>
                    <div className="row center">
                        <a href="/manage" className="waves-effect waves-purple btn-large white purple-text">Create Note Box</a>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default CreateNoteBox;