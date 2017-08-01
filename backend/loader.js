const server = require('./config/server');

require('./config/server');
require('./config/database');
require('./config/routes')(server); /*RETORNA O QUE FOI ATRIBUIDO PRA O MODO EXPORTS (FUNÇÃO)*/