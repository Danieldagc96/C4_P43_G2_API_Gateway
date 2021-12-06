const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AccountAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = serverConfig.account_api_url;
  }

  async createAfiliado(afiliado) {
    afiliado = new Object(JSON.parse(JSON.stringify(afiliado)));
    return await this.post("/crearAfiliado", afiliado);
  }

  async afiliadoByIdentificacion(identificacion) {
    return await this.get(`/mostrarAfiliado/${identificacion}`);
  }
}

module.exports = AccountAPI;
