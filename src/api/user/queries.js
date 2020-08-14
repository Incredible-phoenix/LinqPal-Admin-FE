
import gql from 'graphql-tag';

const CURRENT_USER = gql`
  {
    currentUser {
      _id
      email
      userName
    }
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export {
  CURRENT_USER,
  IS_LOGGED_IN
};
