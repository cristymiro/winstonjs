const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});






function saludar(){
    const mensaje = 'Hola Mundo';
    try{
        procesarMensaje();
    }catch (error){
        logger.error(error);
    }finally{
        logger.warn('Yo me salgo aquí');
    }
    return mensaje;
}



