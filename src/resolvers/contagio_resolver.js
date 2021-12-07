const contagioResolver = {
    Query: {
        contagiosByIdPersona: async (_, {idPersona}, {dataSources, autenticado}) => {
            if (autenticado == true) {
                return await dataSources.afiliadoAPI.contagiosByIdPersona(idPersona);
              } else {
                return null;
              }
        }
    },
    Mutation: {
        createContagio: async (_, {contagio}, {dataSources, autenticado}) => {
            if (autenticado == true) {
                return await dataSources.afiliadoAPI.createContagio(contagio);
              } else {
                return null;
              }
        },
        updateContagio: async (_, {contagio}, {dataSources, autenticado}) => {
            if (autenticado == true) {
                return await dataSources.afiliadoAPI.updateContagio(contagio);
              } else {
                return null;
              }
        }
    }
};

module.exports = contagioResolver;