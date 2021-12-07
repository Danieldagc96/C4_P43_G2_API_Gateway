//Se llama al typedef (esquema) de cada submodulo
const afiliadoTypeDefs = require("./afiliado_typeDefs");
const contagioTypeDefs = require("./contagio_typeDefs");
const vacunaTypeDefs = require("./vacuna_typeDefs");
const authTypeDefs = require("./auth_typeDefs");

// Se unen
const schemasArrays = [authTypeDefs, afiliadoTypeDefs, contagioTypeDefs, vacunaTypeDefs,];

//Se exportan

module.exports = schemasArrays;
