const afiliadoResolver = {
  Query: {
    afiliadoByIdentificacion: async (
      _,
      { identificacion },
      { dataSources, autenticado }
    ) => {
      if (autenticado == true) {
        return await dataSources.afiliadoAPI.afiliadoByIdentificacion(
          identificacion
        );
      } else {
        return null;
      }
    },
    todosAfiliados: async (_, {}, { dataSources, autenticado }) => {
      if (autenticado == true) {
        return await dataSources.afiliadoAPI.todosAfiliados();
      } else {
        return null;
      }
    },
  },
  Mutation: {
    createAfiliado: async (_, { afiliado }, { dataSources, autenticado }) => {
      if (autenticado == true) {
        return await dataSources.afiliadoAPI.createAfiliado(afiliado);
      } else {
        return null;
      }
    },
    updateAfiliado: async (_, { afiliado }, { dataSources, autenticado }) => {
      if (autenticado == true) {
        return await dataSources.afiliadoAPI.updateAfiliado(afiliado);
      } else {
        return null;
      }
    },
    deleteAfiliado: async (
      _,
      { identificacion },
      { dataSources, autenticado }
    ) => {
      if (autenticado == true) {
        return await dataSources.afiliadoAPI.deleteAfiliado(identificacion);
      } else {
        return null;
      }
    },
  },
};

module.exports = afiliadoResolver;
