const usersResolver = {
  Query: {
    userDetailById: async (_, { userId }, { dataSources, autenticado }) => {
      if (autenticado == true) {
        return await dataSources.authAPI.userDetailById(userId);
      } else {
        return null;
      }
    },
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources }) => {
      return await dataSources.authAPI.createUser(user);
    },

    deleteUser: async (_, {userId}, {dataSources, autenticado}) => {
       if (autenticado == true) {
         return await dataSources.authAPI.deleteUser(userId);
       } else {
         return null;
       }
    },

    updateUser: async (_, {user}, {dataSources, autenticado}) => {
      if (autenticado == true) {
        return await dataSources.authAPI.UpdateUser(user);
      } else {
        return null;
      }
    },

    logIn: async(_, { credentials }, { dataSources }) => {
      return await dataSources.authAPI.logIn(credentials);
    },

    refreshToken: async(_, { token }, { dataSources }) => {
      return await dataSources.authAPI.refreshToken(token);
    }
  }
};

module.exports = usersResolver;
