import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <MainContent />
      </div>
    );
  }
}

export default App;
