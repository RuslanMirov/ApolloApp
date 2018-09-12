import React from 'react';
import { Query } from 'react-apollo';
//import qql from 'graphql-tag';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

const query = gql`
{
posts {
  id
  title
}
}
`

const HomeView = () => (
  <div>
  <Query query={query}>
    {( {loading, error, data} ) => {
      if(loading) return <p>Loading...</p>;
      if(error) return <p>Error</p>;

      return(
        <div>

        {data.posts.map((post) => (
          <p key={post.id}>
            <Link to={`/messages/${post.id}/`}>
            {post.title}
            </Link>
          </p>
        ))}
      </div>
      )
    }}
  </Query>

  <Link to={'/messages/createpost/'}>
  Create new post
  </Link>
</div>
)

export default HomeView;
