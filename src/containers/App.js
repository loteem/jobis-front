import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          JOB IS https://jobis.io
        </h1>
        <p>
          We should buy the domain
        </p>

        <Link to='/sample'>Sample</Link>
      </div>
    );
  }
}

export default App;
