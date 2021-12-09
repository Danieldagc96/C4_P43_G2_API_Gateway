const contagioResolver = {
    Query: {
        contagiosByIdPersona: async (_, {idPersona}, {dataSources, userIdToken}) => {
            if (isNaN(userIdToken) == false) {
                return await dataSources.afiliadoAPI.contagiosByIdPersona(idPersona);
              } else {
                return null;
              }
        }
    },
    Mutation: {
        createContagio: async (_, {contagio}, {dataSources, userIdToken}) => {
            if (isNaN(userIdToken) == false) {
                return await dataSources.afiliadoAPI.createContagio(contagio);
              } else {
                return null;
              }
        },
        updateContagio: async (_, {contagio}, {dataSources, userIdToken}) => {
            if (isNaN(userIdToken) == false) {
                return await dataSources.afiliadoAPI.updateContagio(contagio);
              } else {
                return null;
              }
        }
    }
};

module.exports = contagioResolver;