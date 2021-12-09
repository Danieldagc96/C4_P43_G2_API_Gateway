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

  type MensajeDelete {
    Eliminado: Boolean
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

  input AfiliadoUpdate {
    identificacion: Int!
    correo: String!
    direccion: String!
  }

  extend type Query {
    afiliadoByIdentificacion(identificacion: Int!): Afiliado
    todosAfiliados: [Afiliado]
  }
  extend type Mutation {
    createAfiliado(afiliado: AfiliadoInput): Afiliado
    updateAfiliado(afiliado: AfiliadoUpdate): Afiliado
    deleteAfiliado(identificacion: Int!): MensajeDelete
  }
`;

module.exports = afiliadoTypeDefs;
