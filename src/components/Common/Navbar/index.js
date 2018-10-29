import React from 'react';
import PropTypes from 'prop-types';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const loggedInUser = this.props.loggedInUser;
        let navbarContent;

        if (loggedInUser) {
            const {firstName, lastname} = loggedInUser;
            navbarContent = (
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Note Box</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/create-note">Create Note</a></li>
                        <li><a href="/create-notebox">Create Note Box</a></li>
                        <li><a href="/">{firstName} {lastname} <i className="material-icons right white-text">exit_to_app</i></a></li>
                    </ul>
                </div>
            )
        } else {
            navbarContent = (
                <div className="nav-wrapper">
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/login">Log In<i className="material-icons right white-text">person</i></a></li>
                    </ul>
                </div>
            )
        }

        return (
            <nav className="notebox-navbar">
                {navbarContent}
            </nav>
        );
    }
}

Navbar.propTypes = {
    loggedInUser: PropTypes.object
}

export default Navbar;