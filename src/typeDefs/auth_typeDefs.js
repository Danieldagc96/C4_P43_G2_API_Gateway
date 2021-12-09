const { gql } = require("apollo-server");

const authTypeDefs = gql`
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  input CredentialsInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    name: String!
    password: String!
    email: String!
  }

  type UserDetail {
    id: Int!
    username: String!
    name: String!
    email: String!
  }

  input UserUpdateInput {
    email: String!
  }

  input Refresh {
    refresh: String!
  }

  type Email {
    email: String
  }

  type Query {
    userDetailById: UserDetail!
  }

  type Mutation {
    createUser(user: SignUpInput!): Tokens!
    deleteUser: String!
    updateUser(email: UserUpdateInput!): Email 
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(token: Refresh!): Access!
  }
  
`;

module.exports = authTypeDefs;
