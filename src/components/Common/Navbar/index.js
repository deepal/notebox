import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="notebox-navbar">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Note Box</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/create">Create Note</a></li>
                        <li><a href="/create-notebox">Create Note Box</a></li>
                        <li><a href="/">Deepal Jayasekara <i className="material-icons right white-text">exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;