import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

/*  const REGISTER = gql`
     mutation Register($first_name:String!,$last_name:String!,$email:String!,
    $password:String!){
        signup(data:{
            first_name:$first_name,
            last_name:$last_name,
            email:$email,
            password:$password
        }){
            token
        }
    }
`; */

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <p>Sign Up Page</p>
         );
    }
}
 
export default Signup;