const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AfiliadoAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = serverConfig.afiliado_api_url;
  }

  async createAfiliado(afiliado) {
    afiliado = new Object(JSON.parse(JSON.stringify(afiliado)));
    return await this.post('/crearAfiliado', afiliado);
  }

  async createContagio(contagio){
    contagio = new Object(JSON.parse(JSON.stringify(contagio)));
    return await this.post('/crearContagio', contagio);
  }

  async createVacuna(vacuna){
    vacuna = new Object(JSON.parse(JSON.stringify(vacuna)));
    return await this.post('/crearVacuna', vacuna);
  }

  async deleteAfiliado(identificacion){
    return await this.delete(`/eliminarAfiliado/${identificacion}`);
  }

  async updateAfiliado(afiliado){
    afiliado = new Object(JSON.parse(JSON.stringify(afiliado)));
    return await this.put('/modificarAfiliado', afiliado);
  }

  async updateContagio(contagio){
    contagio = new Object(JSON.parse(JSON.stringify(contagio)));
    return await this.put('/modificarContagio', contagio);

  }

  async afiliadoByIdentificacion(identificacion) {
    return await this.get(`/mostrarAfiliado/${identificacion}`);
  }

  async contagiosByIdPersona(idPersona){
    return await this.get(`/mostrarContagiosAfiliado/${idPersona}`);
  }

  async todosAfiliados(){
    return await this.get('/mostrarTodosAfiliados');
  }

  async vacunasByIdPersona(idPersona){
    return await this.get(`/vacunasAfiliado/${idPersona}`);
  }
}

module.exports = AfiliadoAPI;
