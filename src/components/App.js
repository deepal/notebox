/* eslint-disable import/no-named-as-default */
// import { NavLink, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import CreateNote from "./CreateNote";
import CreateNoteBox from './CreateNoteBox';
import NoteBoxes from './ManageNoteBoxes';
import ErrorPage from './ErrorPage';
import NoteBox from './NoteBox';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      [
        <Navbar key={1}></Navbar>,
        (
          <main key={2}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Mali|Source+Code+Pro" rel="stylesheet"></link>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/create-note" component={CreateNote} />
              <Route exact path="/create-notebox" component={CreateNoteBox} />
              <Route exact path="/noteboxes" component={NoteBoxes} />
              <Route exact path="/notebox/:id" component={NoteBox} />
              <Route component={ErrorPage} />
            </Switch>
          </main>
        ),
        <Footer key={3}></Footer>
      ]
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
