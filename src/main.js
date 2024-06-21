'use extrict'
/*************************************************************************************
|    Modulos de Log                                                                   |  
|    Cada modulo implementa uma middleware diferente para obter                       |
|    logs e podem ser configurados de forma idependente                               |
|    mantendo a coesão do server Http que será executado em seguida.                  |
***************************************************************************************/
const winstonLogger = require('./loggers/WinstonLogger');
const morganLogger  = require('./loggers/MorganLogger'); 
const pinoLogger    = require('./loggers/PinoLogger');
const Bootstrap     = require('./bootstrap');
/**************************************************************************************
|    Modulos de Http                                                                    |
|    Cada modulo implementa uma novo server http                                        |
|    e pode ser usado com os multiplos loggers acima.                                   |   
***************************************************************************************/
const Express       = require('./express');
const Koa           = require('./KoaServer');

(async ()=>{ 
         const boot = new Bootstrap(Express(morganLogger));
         await boot.exec(8000);
})();

