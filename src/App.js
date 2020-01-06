import React, { Component } from 'react';
import './App.css';

const togglehamburger = () => {
  let sss = document.getElementById('nav_list');
    sss.classList.toggle('opened');
};

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="nav_icon" >
      <i className="fab fa-500px"></i> &nbsp; <span>Navigation</span>
      <i className="fas fa-align-justify" id="fa-align-justify" onClick={togglehamburger}></i>
        <ul className="nav_list" id="nav_list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Sign in</li>
          <li>Sign out</li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default App;
