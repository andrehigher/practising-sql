import React from 'react';
import ReactDOM from 'react-dom';

import styles from './css/main.scss';

ReactDOM.render(
  <div>
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">UFMG - Practising SQL</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">DCC</a></li>
        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li><a href="#">DCC</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    </nav>
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <br /><br />
        <h1 className="header center orange-text">Practising SQL</h1>
        <div className="row center">
          <h5 className="header col s12 light">A modern responsive tool to learn SQL!</h5>
        </div>
        <div className="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br /><br />

      </div>
    </div>


    <div className="container">
      <div className="section">

        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
              <h5 className="center">Speeds up development</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque massa, tempus vel sem ut, iaculis posuere sapien. Vestibulum tellus felis, sollicitudin id magna et, euismod luctus nisi. Vivamus quis bibendum purus, ut congue mauris. Proin ac lacus augue. Praesent a ante sed nunc gravida rutrum vel et sem. Ut fermentum nulla id velit volutpat porta. Vivamus suscipit felis eu dui egestas auctor et sit amet quam. Ut id enim ultricies, efficitur purus ac, interdum urna. Maecenas vitae auctor nunc.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
              <h5 className="center">User Experience Focused</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque massa, tempus vel sem ut, iaculis posuere sapien. Vestibulum tellus felis, sollicitudin id magna et, euismod luctus nisi. Vivamus quis bibendum purus, ut congue mauris. Proin ac lacus augue. Praesent a ante sed nunc gravida rutrum vel et sem. Ut fermentum nulla id velit volutpat porta. Vivamus suscipit felis eu dui egestas auctor et sit amet quam. Ut id enim ultricies, efficitur purus ac, interdum urna. Maecenas vitae auctor nunc.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
              <h5 className="center">Easy to work with</h5>

              <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque massa, tempus vel sem ut, iaculis posuere sapien. Vestibulum tellus felis, sollicitudin id magna et, euismod luctus nisi. Vivamus quis bibendum purus, ut congue mauris. Proin ac lacus augue. Praesent a ante sed nunc gravida rutrum vel et sem. Ut fermentum nulla id velit volutpat porta. Vivamus suscipit felis eu dui egestas auctor et sit amet quam. Ut id enim ultricies, efficitur purus ac, interdum urna. Maecenas vitae auctor nunc.</p>
            </div>
          </div>
        </div>

      </div>
      <br /><br />
    </div>

    <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">UFMG Info</h5>
            <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Settings</h5>
            <ul>
              <li><a className="white-text" href="#!">Link 1</a></li>
              <li><a className="white-text" href="#!">Link 2</a></li>
              <li><a className="white-text" href="#!">Link 3</a></li>
              <li><a className="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li><a className="white-text" href="#!">Link 1</a></li>
              <li><a className="white-text" href="#!">Link 2</a></li>
              <li><a className="white-text" href="#!">Link 3</a></li>
              <li><a className="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">André Gonzaga</a>
        </div>
      </div>
    </footer>
  </div>,
  document.getElementById('root')
);