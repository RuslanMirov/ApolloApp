import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';


const query = gql`
query DetailView($id: ID!){
  postById(id: $id){
     id
     title
     text
   }
}

`
const getId = (id) => {
  return {id: id}
}


const DetailView = (props) => (
  // Находим новость по id, id получаем из свойства props.match.params.id
  <Query query={query} variables={getId(props.match.params.id)}>


    {( {loading, error, data} ) => {
      if(loading) return <p>Loading...</p>;
      if(error) {
        //console.log("Параметр " + props.match.params.id)
        return <h1>ERROR!</h1>
      };

      return(
        <div>
        <p>Text - {data.postById.text}</p>

        <Link to={`/`}>
        Home
        </Link>
      </div>
      )
    }}
  </Query>
)

export default DetailView;
