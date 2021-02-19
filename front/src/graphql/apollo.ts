import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import typeDefs from '@/graphql/types';
import { ApolloLink } from 'apollo-link';

const mainLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
});

const authLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/auth',
  headers: {
    Authorization: `Bearer ${(localStorage.getItem('token') || 'sdfKfwe32ekerw')}`,
  },
});

const cache = new InMemoryCache();

export default new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().type === 'auth',
    authLink,
    mainLink,
  ),
  cache,
  typeDefs,
});
