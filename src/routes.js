// Initial Config
import React    from 'react';
import {Route}  from 'react-router-dom';

//Components

import Home     from './components/home/Home.js';
import Login    from './components/login/Login.js';
import Signup   from './components/signup/Signup.js';

export default [
    <Route exact path="/home"   component={Home}/>,
    <Route exact path="/login"  component={Login} />,
    <Route exact path="/signup" component={Signup} />
]
