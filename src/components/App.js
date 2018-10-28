/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import LandingPage from "./LandingPage";
import CreateNote from "./CreateNote";
import CreateNoteBox from './CreateNoteBox';
import ManageNoteBoxes from './ManageNoteBoxes';
import NotFound from './ErrorPages/404';
import NoteBox from './NoteBox';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Mali|Source+Code+Pro" rel="stylesheet"></link>
        {/* <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create-note" component={CreateNote} />
          <Route exact path="/create-notebox" component={CreateNoteBox} />
          <Route exact path="/manage" component={ManageNoteBoxes} />
          <Route exact path="/notebox" component={NoteBox} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
