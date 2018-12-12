import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://pruebamars.herokuapp.com/graphql"
});

export default client; 