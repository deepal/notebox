import React from 'react';
import PropTypes from 'prop-types';

class NoteBoxTag extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="chip white purple-text">{this.props.name}</div>
    }
}

NoteBoxTag.propTypes = {
    name: PropTypes.string.isRequired
};

export default NoteBoxTag;
