
import gql from 'graphql-tag';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!, $remember: Boolean!) {
    adminLogin(email: $email, password: $password, remember: $remember) {
      token
      user{
        _id
        email
      }
    }
  }
`;

export {
  LOGIN
};
