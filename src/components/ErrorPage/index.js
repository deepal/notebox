import React from 'react';
import PropTypes from 'prop-types';
import './error-page.css';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.errorMap = {
            404: {
                icon: 'mood_bad',
                message: `Ouch! That's a nay!`,
                description: `I'm sorry, I couldn't find what you requested. Wait...Perhaps you are looking at the wrong place?`
            },
            500: {
                icon: 'whatshot',
                message: `OMG! Server's on fire!`,
                description: `I'm sorry, Something's gone terribly bad on my end. Please come back later.`
            },
            401: {
                icon: 'report',
                message: `No way!`,
                description: `I'm sorry to say this bud, but you are not authorized to visit here.`
            },
            403: {
                icon: 'cloud_off',
                message: `Go away!`,
                description: `The master says he can't let you in. Poor me, what to do.`
            }
        }
        this.getErrorByCode = this.getErrorByCode.bind(this);
    }

    getErrorByCode(errorCode) {
        return this.errorMap[errorCode] || this.errorMap[500];
    }

    render() {
        const { icon, message, description } = this.getErrorByCode(this.props.errorCode);
        return (
            <div className="row center create-notebox-heading">
                <i className="material-icons white-text error-page-logo">{icon}</i>
                <h4 className="white-text">{message}</h4>
                <p className="white-text">{description}</p>
            </div>
        )
    }
}

ErrorPage.propTypes = {
    errorCode: PropTypes.number
}

ErrorPage.defaultProps = {
    errorCode: 404
}

export default ErrorPage;