import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import NoteBox from './NoteBox';

class ManageNoteBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteBoxes: [
                {
                    title: 'Vi Cheatsheet',
                    description: 'A collection of vi commands, hacks and tutorials',
                    numberOfNotes: 2,
                    isSystemNoteBox: false
                },
                {
                    title: 'Git for dummies',
                    description: 'Basic git commands for developers',
                    numberOfNotes: 12,
                    isSystemNoteBox: false
                },
                {
                    title: 'Heroku Deployment Guide',
                    description: 'Guides for deploying node.js apps on heroku',
                    numberOfNotes: 5,
                    isSystemNoteBox: false
                },
                {
                    title: 'Project ideas',
                    description: 'Web application development ideas',
                    numberOfNotes: 3,
                    isSystemNoteBox: false
                },
                {
                    title: 'AWS ECS - Elastic Container Service',
                    description: 'A curated list of AWS implementation guides and tutorials',
                    numberOfNotes: 56,
                    isSystemNoteBox: false
                },
                {
                    title: 'Everything else',
                    description: 'All other notes which do not belong to any Note Box :(',
                    numberOfNotes: 31,
                    isSystemNoteBox: true
                }
            ]
        }
    }

    render() {
        return (
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <main className="container-fluid">
                <div className="row">
                    <div className="col m8 offset-m2">
                        <h4 className="heading center white-text">Your Note Boxes</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col m10 offset-m1">
                        <div className="col s12 m12">
                            <div className="row">
                                {this.state.noteBoxes.map((notebox, i) => (
                                    <div key={i} className="col s12 m4">
                                        <NoteBox {...notebox}></NoteBox>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default ManageNoteBoxes;