import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Materialize from 'materialize-css/dist/js/materialize.min'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        Materialize.Sidenav.init(elems);
    }

    render() {
        const { firstName, lastName, home = '/' } = this.props.user || {};

        let actionsSection;

        // TODO: last name is not required. revise.
        if (firstName) {
            actionsSection = (
                <ul className="right hide-on-med-and-down" id="nav-link">
                    <li><Link to={'/create-note'}>Create Note</Link></li>
                    <li><Link to={'/create-notebox'}>Create Note Box</Link></li>
                    <li><Link to={'/noteboxes'}>Your Note Boxes</Link></li>
                    <li><a href="/auth/logout">{firstName} {lastName} <i className="material-icons right white-text">exit_to_app</i></a></li>
                </ul>
            );
        }

        return (
            <div>
                <nav className="notebox-navbar">
                <div className="nav-wrapper">
                    <Link to={home} className="brand-logo">Note Box</Link>
                    <a href="#" data-target="nav-links" className="sidenav-trigger"><i className="material-icons white-text">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={'/create-note'}>Create Note</Link></li>
                        <li><Link to={'/create-notebox'}>Create Note Box</Link></li>
                        <li><Link to={'/noteboxes'}>Your Note Boxes</Link></li>
                        <li><a href="/auth/logout">{firstName} {lastName} <i className="material-icons right white-text">exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav purple lighten-1 white-text" id="nav-links">
                    <li><p>Logged in as {firstName} {lastName}</p></li>
                    <li><Link className="white-text" to={'/create-note'}>Create Note</Link></li>
                    <li><Link className="white-text" to={'/create-notebox'}>Create Note Box</Link></li>
                    <li><Link className="white-text" to={'/noteboxes'}>Your Note Boxes</Link></li>
                    <li><a className="white-text" href="/auth/logout">Logout <i className="material-icons left white-text">exit_to_app</i></a></li>
            </ul>
            </div>
        ); 
    }
}

Navbar.propTypes = {
    user: PropTypes.object
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Navbar);