import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
 
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
 
const cache = new InMemoryCache();

// todo: export to consts
const SERVER_URL = 'http://localhost:4000/graphql';
 
const httpLink = new HttpLink({
  uri: SERVER_URL,
 /* headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },*/
});
 
const client = new ApolloClient({
  link: httpLink,
  cache,
});
 
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
 
serviceWorker.register();

//registerServiceWorker();