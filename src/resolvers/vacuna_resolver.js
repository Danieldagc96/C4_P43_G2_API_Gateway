const vacunaResolver = {
    Query: {
        vacunasByIdPersona: async (_, {idPersona}, {dataSources, userIdToken}) => {
            if (isNaN(userIdToken) == false) {
                return await dataSources.afiliadoAPI.vacunasByIdPersona(idPersona);
              } else {
                return null;
              }
        }
    },
    Mutation: {
        createVacuna: async (_, {vacuna}, {dataSources, userIdToken}) => {
            if (isNaN(userIdToken) == false) {
                return await dataSources.afiliadoAPI.createVacuna(vacuna);
              } else {
                return null;
              }
        }
    }
};

module.exports = vacunaResolver;