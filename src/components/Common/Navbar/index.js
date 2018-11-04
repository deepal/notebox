import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Materialize from 'materialize-css/dist/js/materialize.min'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.sidenav = null;
        this.dismissSideNav = this.dismissSideNav.bind(this);
    }

    componentDidMount() {
        const elem = document.getElementById('nav-links');
        this.sidenav = Materialize.Sidenav.init(elem);
    }

    dismissSideNav() {
        setTimeout(() => {
            this.sidenav.close();
        }, 0);
    }

    render() {
        // default homepage is Landing page 
        const { firstName, lastName, home = '/' } = this.props.user || {};

        if (firstName) {
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
                        <li onClick={this.dismissSideNav}><Link className="white-text" to={'/create-note'}>Create Note</Link></li>
                        <li onClick={this.dismissSideNav}><Link className="white-text" to={'/create-notebox'}>Create Note Box</Link></li>
                        <li onClick={this.dismissSideNav}><Link className="white-text" to={'/noteboxes'}>Your Note Boxes</Link></li>
                        <li onClick={this.dismissSideNav}><a className="white-text" href="/auth/logout">Logout <i className="material-icons left white-text">exit_to_app</i></a></li>
                    </ul>
                </div>
            );
        }

        return null;
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