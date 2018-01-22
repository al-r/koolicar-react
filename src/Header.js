import React, { Component } from 'react';
import './css/Header.css';
import logo from './img/koolicar-logo.jpg';
import menuIcon from './img/menu-icon.jpg';
import MainContent from './MainContent';

class Header extends React.Component {

  render() {
    return (
			<div id="header" role="header">
          <div class="container">
              <div id="logo" class="header-item">
                  <img src={logo} alt="Koolicar logo" />
              </div>
              <ul id="nav" class="nomob header-item" role="navigation">
                  <li><a href="#">Inscription</a></li>
                  <li><a href="#">Connexion</a></li>
                  <li><a href="#">Aide</a></li>
                  <li class="button">
                      <button type="button">Inscrire mon véhicule</button>
                  </li>
              </ul>
              <img src={menuIcon} id="nav-mob" class="mob" alt="Menu" />
          </div>
      </div>
    );
  }
}

export default Header;