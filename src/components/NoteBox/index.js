import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Materialize from 'materialize-css/dist/js/materialize.min';
import './notebox.css';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            const options = {};
            const elems = document.querySelectorAll('.sidenav');
            const instances = Materialize.Sidenav.init(elems, options);
        });
    }

    render() {
        return (
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <ul id="slide-out" className="sidenav purple lighten-1">
                    <li className="white-text center"><h5>VI Cheatsheet</h5></li>
                    <li><a className="subheader white-text">Tags</a></li>
                    <li>
                        <div className="row">
                            <div className="col m12 s12">
                                <label className="col m12 s12">
                                    <input type="checkbox" className="filled-in" defaultChecked="checked" />
                                    <span className="white-text">vi</span>
                                </label>
                                <label className="col m12 s12">
                                    <input type="checkbox" className="filled-in" defaultChecked="checked" />
                                    <span className="white-text">linux</span>
                                </label>
                                <label className="col m12 s12">
                                    <input type="checkbox" className="filled-in" defaultChecked="checked" />
                                    <span className="white-text">mac</span>
                                </label>
                                <label className="col m12 s12">
                                    <input type="checkbox" className="filled-in" defaultChecked="checked" />
                                    <span className="white-text">bash</span>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li><a className="waves-effect white-text" href="#!"><i className="material-icons left white-text">refresh</i>Refresh</a></li>
                    <li><a className="waves-effect white-text" href="#!"><i className="material-icons left white-text">edit</i>Edit Note Box</a></li>
                    <li><div className="divider white" /></li>
                    <li><a className="waves-effect white-text" href="#!"><i className="material-icons left white-text">delete</i>Delete Note Box</a></li>
                </ul>
                <div className="fixed-action-btn">
                    <a href="#" data-target="slide-out" className="sidenav-trigger btn-large btn-floating waves-effect waves-light"><i className="material-icons white purple-text">menu</i></a>
                </div>
                <main className="container-fluid">
                    <div className="row center">
                        <h4 className="white-text">VI Cheatsheet</h4>
                    </div>
                    <div className="row center">
                        <span className="white-text">Nisi ullamco aliquip id pariatur id adipisicing magna sunt exercitation in.</span>
                    </div>
                    <div id="notebox-meta" className="row">
                        <div className="col m12 s12 center">
                            <div className="chip white purple-text">vi</div>
                            <div className="chip white purple-text">linux</div>
                            <div className="chip white purple-text">mac</div>
                            <div className="chip white purple-text">bash</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m10 offset-m1">
                            <div className="col s12 m12">
                                <div className="row">
                                    <div className="col s12 m12">
                                        <div className="card-panel white note-box-note">
                                            <div className="row purple-text note-box-note-content">
                                                <div className="col s12 m4 note-box-note-title-container">
                                                    <span>Sunt magna id culpa pariatur nulla ipsum est.</span>
                                                </div>
                                                <div className="col s12 m8 note-box-note-content-container">
                                                    <span>Dolore eu cupidatat proident commodo adipisicing consequat pariatur
                                                      exercitation aliqua. Irure elit reprehenderit sunt qui veniam sunt magna.
                                                      Ea culpa magna nisi non magna commodo id ea dolor sit quis. Veniam in
                                                      cupidatat sit dolor irure dolor est adipisicing voluptate mollit ad laboris
                                                      consectetur cillum. Id Lorem nulla non consectetur do qui ea consequat
                                                      minim. Labore incididunt mollit incididunt consequat ex commodo eiusmod.
                      Duis nisi anim laboris do velit.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m12">
                                        <div className="card-panel white note-box-note">
                                            <div className="row purple-text note-box-note-content">
                                                <div className="col s12 m4 note-box-note-title-container">
                                                    <span>Sunt magna id culpa pariatur nulla ipsum est.</span>
                                                </div>
                                                <div className="col s12 m8 note-box-note-content-container">
                                                    <span>Qui ad voluptate elit cillum quis tempor consequat nulla.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m12">
                                        <div className="card-panel white note-box-note">
                                            <div className="row purple-text note-box-note-content">
                                                <div className="col s12 m4 note-box-note-title-container">
                                                    <span>Sunt magna id culpa pariatur nulla ipsum est.</span>
                                                </div>
                                                <div className="col s12 m8 note-box-note-content-container">
                                                    <span>Qui ad voluptate elit cillum quis tempor consequat nulla.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 m12">
                                        <div className="card-panel white note-box-note">
                                            <div className="row purple-text note-box-note-content">
                                                <div className="col s12 m4 note-box-note-title-container">
                                                    <span>Sunt magna id culpa pariatur nulla ipsum est.</span>
                                                </div>
                                                <div className="col s12 m8 note-box-note-content-container">
                                                    <span>Qui ad voluptate elit cillum quis tempor consequat nulla.</span>
                                                </div>
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

export default NoteBox;
