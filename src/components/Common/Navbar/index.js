import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, home = '/' } = this.props.user || {};

        let actionsSection;

        // TODO: last name is not required. revise.
        if (firstName) {
            actionsSection = (
                <ul className="right hide-on-med-and-down">
                    <li><Link to={'/create-note'}>Create Note</Link></li>
                    <li><Link to={'/create-notebox'}>Create Note Box</Link></li>
                    <li><Link to={'/noteboxes'}>Your Note Boxes</Link></li>
                    <li><a href="/auth/logout">{firstName} {lastName} <i className="material-icons right white-text">exit_to_app</i></a></li>
                </ul>
            );
        }

        return (
            <nav className="notebox-navbar">
                <div className="nav-wrapper">
                    <Link to={home} className="brand-logo">Note Box</Link>
                    {actionsSection}
                </div>
            </nav>
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