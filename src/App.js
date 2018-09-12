import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider }from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import CraeteView from './views/CreateView';
import DetailView from './views/DetailView';


const client = new ApolloClient({
  uri: 'https://m55w845j9.lp.gql.zone/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
       <Router>
         <div>
           <Route exact path='/' component={HomeView} />
           <Switch>
             <Route exact path='/messages/createpost/' component={CraeteView} />
             <Route exact path='/messages/:id/' component={DetailView} />
           </Switch>
         </div>
       </Router>
      </ApolloProvider>
    );
  }
}

export default App;
