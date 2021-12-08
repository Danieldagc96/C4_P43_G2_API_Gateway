const afiliadoResolver = require('./afiliado_resolver');
const contagioResolver = require('./contagio_resolver');
const vacunaResolver = require('./vacuna_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(afiliadoResolver, contagioResolver, vacunaResolver, authResolver);
module.exports = resolvers;