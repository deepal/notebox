import React from 'react';
import PropTypes from 'prop-types';
import './spinner.css';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let spinnerColorClass = '';
        switch(this.props.color) {
            case 'green'    :   spinnerColorClass = 'spinner-green-only'; break;
            case 'blue'     :   spinnerColorClass = 'spinner-blue-only'; break;
            case 'red'      :   spinnerColorClass = 'spinner-red-only'; break;
            case 'purple'   :   spinnerColorClass = 'spinner-purple-only'; break;
            default         :   spinnerColorClass = 'spinner-white-only'; break;
        }
        
        return (
            <div className="center">
                <div className={`preloader-wrapper active ${this.props.size}`}>
                <div className={`spinner-layer ${spinnerColorClass}`}>
                    <div className="circle-clipper left">
                        <div className="circle" />
                    </div><div className="gap-patch">
                        <div className="circle" />
                    </div><div className="circle-clipper right">
                        <div className="circle" />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string
};

Spinner.defaultProps = {
    color: 'white',
    size: 'small'
}

export default Spinner;