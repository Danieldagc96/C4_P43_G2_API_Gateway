const usersResolver = {
  Query: {
    userDetailById: async (_, {}, { dataSources, userIdToken }) => {
      if (isNaN(userIdToken) == false) {
        return await dataSources.authAPI.userDetailById(userIdToken);
      } else {
        return null;
      }
    },
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources }) => {
      return await dataSources.authAPI.createUser(user);
    },

    deleteUser: async (_, {}, {dataSources, userIdToken}) => {
       if (isNaN(userIdToken) == false) {
         return await dataSources.authAPI.deleteUser(userIdToken);
       } else {
         return null;
       }
    },

    updateUser: async (_, {email}, {dataSources, userIdToken}) => {
      if (isNaN(userIdToken) == false) {
        return await dataSources.authAPI.updateUser(email, userIdToken);
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
