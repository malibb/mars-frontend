//App es nuestro servidor.

import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// Apollo Client
import client from './graphql/ApolloClient';
import { ApolloProvider } from "react-apollo";

import Navbar from './components/navbar/NavbarComponent';
import routes from './routes';

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
          <Navbar />
          <Router>
            <Switch>
              { routes }
            </Switch>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
