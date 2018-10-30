import React from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min';

class NoteBoxSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Materialize.Sidenav.init(document.querySelectorAll('.sidenav'));

        const tapTargetElms = document.querySelectorAll('.tap-target');
        Materialize.TapTarget.init(tapTargetElms);
        const instance = Materialize.TapTarget.getInstance(tapTargetElms[0]);
        setTimeout(() => {
            instance.open();
        }, 2000);
    }

    render() {
        return (
            <div>
                <div className="tap-target purple lighten-2" data-target="menu">
                    <div className="tap-target-content">
                        <h5>Hey there!</h5>
                        <p>You can view more details about this Note Box or change the settings here!</p>
                    </div>
                </div>

                <ul id="slide-out" className="sidenav purple lighten-1">
                    <li className="white-text center"><h5>VI Cheatsheet</h5></li>
                    <li><p className="subheader white-text">Tags</p></li>
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
                    <a id="menu" href="#" data-target="slide-out" className="sidenav-trigger btn-large btn-floating waves-effect waves-light"><i className="material-icons white purple-text">menu</i></a>
                </div>
            </div>
        )
    }
}
export default NoteBoxSideBar;