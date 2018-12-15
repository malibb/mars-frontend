import React, { Component } from 'react';

import './style.css';

// const LOGIN = gql`
//     mutation LOGIN($email:String!,$password:String!){
//         login(email:$email,password:$password){
//             token
//         }
//     }
// `

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() { 
        return ( 
            <p>Sign Up Page</p>
         );
    }
    
}
 
export default LoginComponent;