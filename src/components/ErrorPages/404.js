import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Materialize from 'materialize-css/dist/js/materialize.min';

class CreateNoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <main className="container-fluid">
                    <div className="row center create-notebox-heading">
                        <h4 className="white-text">Ouch! That's a 404!</h4>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default CreateNoteBox;