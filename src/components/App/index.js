import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FunkyCaps</h1>
          <nav className='App-nav'>
            <Link to='/'>Home</Link> &nbsp; &nbsp;
            <Link to='/gallery'>Gallery</Link> &nbsp; &nbsp;
            <Link to='/upload'>Upload</Link>
          </nav>
        </header>
          {this.props.children}
      </div>
    );
  }
}

export default App;
