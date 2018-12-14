import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home   from './components/home/HomeComponent';
import Login  from './components/login/LoginComponent';
import Signup from './components/signup/SignupComponent';
import Browse from './components/browse/BrowseComponent';

const Logout = () => {
    //localStorage.removeItem({tokencreadodesesión});
    // return this.props.history.push('/') 
    return <Redirect to="/login" />
}

export default [
    <Route exact path='/'        component={ Home }    key={ 1 }/>,
    <Route exact path='/signup'  component={ Signup }  key={ 2 }/>,
    <Route exact path='/login'   component={ Login }   key={ 3 }/>,
    <Route exact path='/logout'  component={ Logout }  key={ 4 }/>,
    <Route exact path='/browse'  component={ Browse }  key={ 5 }/>,

];