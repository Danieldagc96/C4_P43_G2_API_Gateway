const { RESTDataSource } = require("apollo-datasource-rest");

const serverConfig = require("../server");

class AuthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.auth_api_url;
  }

  async createUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    return await this.post('/create_user/', user);
  }

  async deleteUser(userId) {
    return await this.delete(`/delete_user/${userId}/`)
  }

  async logIn(credentials) {
    credentials = new Object(JSON.parse(JSON.stringify(credentials)));
    return await this.post(`/login/`, credentials);
  }

  //revisar si está bien que llegue un objeto o tiene que ser un string
  async updateUser(user){
    user = new Object(JSON.parse(JSON.stringify(user)));
    let userId = user.id;
    return await this.put(`/update_user/${userId}/`, user);
}
  
  async userDetailById(userId) {
    return await this.get(`/view_user/${userId}/`);
  }

  async refreshToken(token) {
    token = new Object(JSON.parse(JSON.stringify(token)));
    return await this.post(`/refresh/`, token);
  }
}

module.exports = AuthAPI;
