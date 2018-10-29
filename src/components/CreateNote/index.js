import React from 'react';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import NoteEditor from './NoteEditor';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
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
                            <NoteEditor></NoteEditor>
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