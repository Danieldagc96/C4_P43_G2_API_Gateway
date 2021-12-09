const { gql } = require("apollo-server");

const vacunaTypeDefs = gql`
  type Vacuna {
    idPersona: Int!
    fabricante: String!
    lote: Int!
    dosis: Int!
    fechaAplicacion: String!
  }
  input VacunaInput {
    idPersona: Int!
    fabricante: String!
    lote: Int!
    dosis: Int!
    fechaAplicacion: String!
  }
  extend type Query {
    vacunasByIdPersona(idPersona: Int!): [Vacuna]
  }
  extend type Mutation {
    createVacuna(vacuna: VacunaInput!): Vacuna!
  }
`;

module.exports = vacunaTypeDefs;
