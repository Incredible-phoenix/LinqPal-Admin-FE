
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

const REMOVE_USER = gql`
  mutation RemoveUser($_id: ID!) {
    removeUser(_id: $_id) {
      _id
    }
  }
`;

const EDIT_USER = gql`
  mutation EditUser($_id: ID!, $user: UserInput!) {
    editUser(_id: $_id, user: $user) {
      _id
      email
      password
      userName
      fullName
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($user: UserInput!) {
    addUser(user: $user) {
      _id
    }
  }
`;

export {
  LOGIN,
  REMOVE_USER,
  EDIT_USER,
  ADD_USER
};
