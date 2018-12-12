import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import Navbar from './components/navbar/NavbarComponent';
import ImageList from './components/imageListComponent/ImageListComponent';
import routes from './routes';

class App extends Component {
  
  render() {
    let options= [{opcion:1, src:'./img/1.jpg'},
                  {opcion:2, src:'./img/2.jpg'},
                  {opcion:3, src:'./img/3.jpg'}];
    return (
      <div>
        <Navbar />
        <ImageList options={options}/>
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
