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
    password: String!
    email: String!
  }

  type Mutation {
    signUpUser(userInput: SignUpInput): Tokens!

    logIn(credentials: CredentialsInput!): Tokens!

    refreshToken(refresh: String!): Access!
  }
  type Query {
    userDetailById(userId: Int!): UserDetail!
  }
`;

module.exports = authTypeDefs;
