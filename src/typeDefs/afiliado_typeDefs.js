const { gql } = require("apollo-server");

const afiliadoTypeDefs = gql`
  type Afiliado {
    identificacion: Int!
    nombres: String!
    apellidos: String!
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
    apellidos: String!
    edad: Int!
    medidaEdad: String!
    sexo: String!
    correo: String!
    ciudad: String!
    direccion: String!
  }

  input AfiliadoUpdate{       
    nombres: String!
    apellidos: String!
    edad: Int!
    medidaEdad: String!
    sexo: String!
    correo: String!
    ciudad: String!
    direccion: String!
  }

  extend type Query {
    afiliadoByIdentificacion(identificacion: Int!): Afiliado
    todosAfiliados(): [Afiliado] 
  }
  extend type Mutation {
    createAfiliado(afiliado: AfiliadoInput): Afiliado
    updateAfiliado(afiliado: AfiliadoUpdate): Afiliado 
    deleteAfiliado(identificacion: Int!): String!
  }
`;

module.exports = afiliadoTypeDefs;
