//App es nuestro servidor.

import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// Apollo Client
import client from './graphql/ApolloClient';
import { ApolloProvider } from "react-apollo";

import Navbar from './components/navbar/NavbarComponent';
import Browser from './components/browse/BrowseComponent';
import routes from './routes';

class App extends Component {
  
  render() {
   /*  let options= [{opcion:1, src:'./img/1.jpg'},
                  {opcion:2, src:'./img/2.jpg'},
                  {opcion:3, src:'./img/3.jpg'}]; */
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
