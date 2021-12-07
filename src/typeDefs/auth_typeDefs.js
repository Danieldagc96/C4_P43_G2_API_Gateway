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
    id: Int!
    email: String!
  }

  input Refresh {
    refresh: String!
  }

  type Query {
    userDetailById(userId: Int!): UserDetail!
  }

  type Mutation {
    createUser(user: SignUpInput!): Tokens!
    deleteUser(userId: Int!): String!
    updateUser(user: UserUpdateInput!): UserDetail 
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(token: Refresh!): Access!
  }
  
`;

module.exports = authTypeDefs;
