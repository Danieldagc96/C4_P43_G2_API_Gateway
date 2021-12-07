const vacunaResolver = {
    Query: {
        vacunasByIdPersona: async (_, {idPersona}, {dataSources, autenticado}) => {
            if (autenticado == true) {
                return await dataSources.afiliadoAPI.vacunasByIdPersona(idPersona);
              } else {
                return null;
              }
        }
    },
    Mutation: {
        createVacuna: async (_, {vacuna}, {dataSources, autenticado}) => {
            if (autenticado == true) {
                return await dataSources.afiliadoAPI.createVacuna(vacuna);
              } else {
                return null;
              }
        }
    }
};

module.exports = vacunaResolver;