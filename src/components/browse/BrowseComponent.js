import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query }  from 'react-apollo';
import ImageCard from './ImagecardComponent';

const ALLHOMES = gql`
    query{
        allHomes{
            _id,
            name,
            description
        }
    }
`

export default class BrowseComponent extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">
                <Query query={ALLHOMES}>
                {
                    ({data, error, loading}) => {
                        if(error) return <h4 className='center-align white-text'>{"Hubo un Error !! :("}</h4>
                        if (loading) return <h4 className='center-align white-text'>Cargando ...</h4>

                        const homes = data.allHomes.map( (home ,index) => (
                            <div className="col s4" key={index}>
                                <ImageCard 
                                title = {home.name}
                                description = {home.description}
                                />
                            </div>
                        ))   
                        return(
                            <React.Fragment>
                                {homes}
                            </React.Fragment>
                        )
                    }
                }
                </Query> 
                </div>
        </div>
    )
    
  }
}