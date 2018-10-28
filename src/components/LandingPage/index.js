import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css'
import Footer from '../Common/Footer';

const LandingPage = () => {
  return (
    <div className="purple lighten-1 white-text">

      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br /><br />
          <h1 className="header center white-text">Note Box</h1>
          <div className="row center">
            <h5 className="header col s12 white-text">An Innovative Way to Organize Your Thoughts and Knowledge</h5>
          </div>
          <div className="row center">
            <a href="/create" id="get-started-button" className="btn-large waves-effect waves-purple white purple-text">Get Started</a>
          </div>
          <br /><br />
        </div>
      </div>
      <div className="container">
        <div className="section">
          {/*   Icon Section   */}
          <div className="row">
            <div className="col s12 m12">
              <div className="icon-block">
                <div className="center white-text"><i className="material-icons home-icon">contact_support</i></div>
                <h5 className="center white-text">What is it?</h5>
                <p className="center white-text">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center white-text"><i className="material-icons home-icon">flash_on</i></h2>
                <h5 className="center white-text">Speeds up development</h5>
                <p className="white-text">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center white-text"><i className="material-icons home-icon">group</i></h2>
                <h5 className="center white-text">User Experience Focused</h5>
                <p className="white-text">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center white-text"><i className="material-icons home-icon">settings</i></h2>
                <h5 className="center white-text">Easy to work with</h5>
                <p className="white-text">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
      <Footer></Footer>
      {/*  Scripts*/}
    </div>

  );
};

export default LandingPage;
