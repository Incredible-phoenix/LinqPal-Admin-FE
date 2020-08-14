import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { onError } from "@apollo/link-error";

import { BACKEND_GRAPHQL_URL } from './config';
import { getValidToken } from 'utils/auth';

const httpLink = new createUploadLink({
  uri: BACKEND_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  const token = getValidToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
      'client-name': 'Pronet Admin [web]',
      'client-version': '1.0.0'
    },
    fetch
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(`[Network error] ${networkError}`);
  }
});

const cache = new InMemoryCache();
cache.writeData({
  data: {
    isLoggedIn: !!getValidToken()
  }
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(errorLink).concat(httpLink),
  resolvers: {}
});

export default client;