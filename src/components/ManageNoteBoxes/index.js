import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import './manage-note-boxes.css';

class ManageNoteBoxes extends React.Component {
    constructor(props) {
        super(props);
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
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">VI Cheatsheet</span>
                                            <p>A collection of vi commands for day-to-day coding</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">12 Notes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">VI Cheatsheet</span>
                                            <p>A collection of vi commands for day-to-day coding</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">3 Notes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">VI Cheatsheet</span>
                                            <p>A collection of vi commands for day-to-day coding</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">5 Notes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">VI Cheatsheet</span>
                                            <p>A collection of vi commands for day-to-day coding</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">1 Notes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">VI Cheatsheet</span>
                                            <p>A collection of vi commands for day-to-day coding</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">6 Notes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">VI Cheatsheet</span>
                                            <p>A collection of vi commands for day-to-day coding</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">12 Notes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card white z-depth-5">
                                        <div className="card-content purple-text">
                                            <span className="card-title">Everything else</span>
                                            <p>All other notes which do not belong to any Note Box :(</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="/notebox" className="purple-text"><i className="material-icons left">drafts</i>Open the box</a>
                                            <div className="purple-text right">8 Notes</div>
                                        </div>
                                    </div>
                                </div>
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

export default ManageNoteBoxes;