import React from 'react';
import PropTypes from 'prop-types';
import Materialize from 'materialize-css/dist/js/materialize.min';
import './note-actions.css';

class NoteActions extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const elms = document.querySelectorAll('.dropdown-trigger');
        Materialize.Dropdown.init(elms, {
            alignment: 'right',
            coverTrigger: false,
            constrainWidth: false
        });
    }

    render(){
        return (
            [
                <a key={1} id="note-actions" className="dropdown-trigger purple-text text-lighten-1" href="#" data-target="dropdown1"><i className="material-icons">more_vert</i></a>,
                <ul key={2} id="dropdown1" className="dropdown-content">
                    <li><a href="#!" className="purple-text text-lighten-1"><i className="material-icons">edit</i>Edit Note</a></li>

                    <li><a href="#!" className="red-text text-lighten-1"><i className="material-icons">delete</i>Delete Note</a></li>
                </ul>
            ]
        )
    }
}

NoteActions.propTypes = {
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func
}

NoteActions.defaultProps = {
    onClickEdit(){},
    onClickDelete(){}
}

export default NoteActions;
