const { gql } = require("apollo-server");

const afiliadoTypeDefs = gql`
  type Afiliado {
    identificacion: Int!
    nombres: String!
    Apellidos: String!
    edad: Int!
    medidaEdad: String!
    sexo: String!
    correo: String!
    ciudad: String!
    direccion: String!
  }
  input AfiliadoInput {
    identificacion: Int!
    nombres: String!
    Apellidos: String!
    edad: Int!
    medidaEdad: String!
    sexo: String!
    correo: String!
    ciudad: String!
    direccion: String!
  }
  extend type Query {
    afiliadoByIdentificacion(identificacion: Int!): Afiliado
  }
  extend type Mutation {
    createAfiliado(afiliado: AfiliadoInput) Afiliado
  }
`;

module.exports = afiliadoTypeDefs;
