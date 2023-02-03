const log4js = require('log4js');


let logger = log4js.getLogger();
logger.level="debug";

logger.info("la aplicacion se ejecuto correctamente");
logger.warn("falta un archivo de configuracion");
logger.error("no se encontro la funcion email");
logger.fatal("la aplicacion no se pudo iniciar");

function sumar(x, y){
    return x + y;
}

module.exports = sumar;