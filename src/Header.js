import React, { Component } from 'react';
import './css/Header.css';
import logo from './img/koolicar-logo.jpg';
import menuIcon from './img/menu-icon.jpg';

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      isNotActive: true
    }
  }

  toggleActive () {
    this.setState({
      isNotActive: !this.state.isNotActive
    })

    if(this.state.isNotActive){
      document.getElementById('nav').className += ' active';
    } else {
      document.getElementById('nav').classList.remove('active');
    }
  }

  render() {
    return (
			<div id="header" role="header">
          <div className="container">
              <div id="logo" className="header-item">
                  <img src={logo} alt="Koolicar logo" />
              </div>
              <ul id="nav" className="nomob header-item" role="navigation">
                  <li><a href="#">Inscription</a></li>
                  <li><a href="#">Connexion</a></li>
                  <li><a href="#">Aide</a></li>
                  <li className="button">
                      <button type="button">Inscrire mon véhicule</button>
                  </li>
              </ul>
              <img src={menuIcon} id="nav-mob" className="mob" alt="Menu" onClick={this.toggleActive.bind(this)} />
          </div>
      </div>
    );
  }
}

export default Header;
