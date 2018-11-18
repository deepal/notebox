import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Materialize from 'materialize-css/dist/js/materialize.min';
import * as userAction from '../../../actions/userActions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.sidenav = null;
        this.dismissSideNav = this.dismissSideNav.bind(this);
    }

    componentDidMount() {
        const elem = document.getElementById('nav-links');
        this.sidenav = Materialize.Sidenav.init(elem);
        this.props.actions.getUser();
    }

    dismissSideNav() {
        setTimeout(() => {
            this.sidenav.close();
        }, 0);
    }

    render() {
        // default homepage is Landing page 
        const { firstName, lastName, home = '/' } = this.props.user || {};

        const actionsPanel = (
            <ul className="right hide-on-med-and-down">
                <li><Link to={'/create-note'}>Create Note</Link></li>
                <li><Link to={'/create-notebox'}>Create Note Box</Link></li>
                <li><Link to={'/noteboxes'}>Your Note Boxes</Link></li>
                <li><a href="/auth/logout">{firstName} {lastName} <i className="material-icons right white-text">exit_to_app</i></a></li>
            </ul>
        );

        const actionsPanelSideNav = (
            <ul className="sidenav purple lighten-1 white-text" id="nav-links">
                <li><p>Logged in as {firstName} {lastName}</p></li>
                <li onClick={this.dismissSideNav}><Link className="white-text" to={'/create-note'}>Create Note</Link></li>
                <li onClick={this.dismissSideNav}><Link className="white-text" to={'/create-notebox'}>Create Note Box</Link></li>
                <li onClick={this.dismissSideNav}><Link className="white-text" to={'/noteboxes'}>Your Note Boxes</Link></li>
                <li onClick={this.dismissSideNav}><a className="white-text" href="/auth/logout">Logout <i className="material-icons left white-text">exit_to_app</i></a></li>
            </ul>
        );

        return (
            <div>
                <nav className="notebox-navbar">
                    <div className="nav-wrapper">
                        <Link to={home} className="brand-logo">Note Box</Link>
                        <a href="#" data-target="nav-links" className="sidenav-trigger"><i className="material-icons white-text">menu</i></a>
                        { firstName ? actionsPanel : null }
                    </div>
                </nav>
                { firstName ? actionsPanelSideNav : null }
            </div>
        );
    }
}

Navbar.propTypes = {
    user: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
