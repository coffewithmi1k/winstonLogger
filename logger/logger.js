const winston = require('winston');
const {error} = require("winston");

const logConfiguration = {
    transports: [
        new winston.transports.File({
            level: 'error',
            filename : 'logs/examle.log' //will add logs to file only if it's an error
        }),
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label🏷️`
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

logger.log({
    message: 'Hello there',
    level: 'info'
});

logger.info('I am info');
logger.error('Hey logger I am an error');