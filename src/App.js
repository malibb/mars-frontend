import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';

import NavbarComponent from './components/navbar/NavbarComponent';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarComponent />
      <Router>
          <Switch>
              { routes }
          </Switch>
      </Router>
  </div>
    );
  }
}

export default App;
