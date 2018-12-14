import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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

}
 
export default LoginComponent;